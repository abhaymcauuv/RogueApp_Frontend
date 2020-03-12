import React, { Component } from 'react';
import HomeHeaderscreen from '../homeheader';
import PageFooter from '../footer';
import axios from 'axios';
import '../../styles/styles.css';
import EndPoints from '../../Config/ApiEndpoints/endpoints';
import ReactLoading from "react-loading";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

let customerId = 967;

class PersonalUseOrdersScreen extends Component {
  constructor() {
    super();
    this.state = {
      error: {},
      isDataFetched: false,
      isCount: false,
      totalDataSize: 0,
      sizePerPage: 10,
      currentPage: 1,
      OrderList: [],
      isRemote: true,
      sortName: '',
      sortOrder: '',
      searchData: '',
      orderExportedData: [],
      isFetchingExportData: false
    }
  }

  componentDidMount() {
    this.loadOrders();
  }

  loadOrders = () => {
    axios({
      method: 'POST',
      url: EndPoints.Order.PersonalUseOrders.Url,
      data: {
        CustomerID: customerId,
        PageSize: this.state.sizePerPage,
        PageNo: this.state.currentPage,
        IsCount: this.state.isCount,
        SortName: this.state.sortName,
        SortOrder: this.state.sortOrder,
        SearchData: this.state.searchData
      }
    }).then(async (response) => {
      var result = await response.data.Items;
      await this.setState({
        totalDataSize: this.state.isCount ? this.state.totalDataSize : result.Count,
        OrderList: result.Orders,
        isDataFetched: true,
        isCount: true
      });
    }).catch(function (error) {
      //console.log(error);
    });
  }

  onPageChange = async (page, sizePerPage) => {
    if (this.state.isRemote) {
      await this.setState({
        currentPage: page,
        sizePerPage: sizePerPage,
        isDataFetched: false,
        OrderList: [],
      });
      this.loadOrders();
    }
    return;
  }

  onSortChange = async (sortName, sortOrder) => {
    if (this.state.OrderList.length === 0) {
      return;
    }
    if (this.state.isRemote) {
      await this.setState({
        isDataFetched: false,
        OrderList: [],
        sortName: sortName,
        sortOrder: sortOrder
      });
      this.loadOrders();
    }
    else {
      if (sortOrder === 'asc') {
        this.state.OrderList.sort(function (a, b) {
          if (a[sortName] > b[sortName]) {
            return 1;
          } else if (b[sortName] > a[sortName], 10) {
            return -1;
          }
          return 0;
        });
      } else {
        this.state.OrderList.sort(function (a, b) {
          if (a[sortName] > b[sortName]) {
            return -1;
          } else if (b[sortName] > a[sortName]) {
            return 1;
          }
          return 0;
        });
      }
      this.setState({
        OrderList: this.state.OrderList
      });
    }
  }

  onSearchChange = async (searchText, colInfos, multiColumnSearch) => {
    const text = searchText.trim();
    if (this.state.isRemote) {
      await this.setState({
        isDataFetched: false,
        OrderList: [],
        sortName: '',
        sortOrder: '',
        currentPage: 1,
        totalDataSize: 0,
        searchData: text,
        isCount: false
      });
      this.loadOrders();
    } else {
      return;
    }
  }

  checkOrderFetchedData() {
    if (this.state.isDataFetched) {
      return "No records found";
    } else {
      return (
        <center><ReactLoading type="bars" color="#000" height={30} width={30} /></center>
      );
    }
  }

  handleExportCSVButtonClick = async (onClick) => {
    await this.setState({ isFetchingExportData: true });
    if (this.state.isRemote) {
      axios({
        method: 'POST',
        url: EndPoints.Order.PersonalUseOrders.Url,
        data: {
          CustomerID: customerId,
          PageSize: 0,
          PageNo: 0,
          IsCount: true
        }
      }).then(async (response) => {
        this.setState({ isRemote: false });
        var result = await response.data.Items;
        await this.setState({
          OrderList: this.state.searchData ? this.state.OrderList : result.Orders,
          isFetchingExportData: false,
          totalDataSize: this.state.searchData ? this.state.totalDataSize : result.Orders.length,
        });
        this.setState({ isRemote: true });
        onClick();
      }).catch(function (error) {
        console.log(error);
      });
    }
    else {
      await this.setState({
        isFetchingExportData: false
      });
      onClick();
    }
  }

  createCustomExportCSVButton = (onClick) => {
    return (
      <button disabled={this.state.isFetchingExportData} style={{ margin: "10px" }} onClick={() => this.handleExportCSVButtonClick(onClick)} type="button" className="k-grid-excel btn btn-primary hidden-print"><i className="fa fa-download"></i> {this.state.isFetchingExportData ? 'Exporting..' : 'Export'}</button>
    );
  }

  createCustomToolBar = props => {
    return (
      <div style={{ width: "100%" }}>
        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
          {props.components.searchPanel}
        </div>
        <div style={{ textAlign: "right", float: "right" }} className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
          {props.components.btnGroup}
        </div>
      </div>
    );
  }

  createCustomSearchField = (props) => {
    return (
      <SearchField
        defaultValue={props.defaultValue}
        placeholder={props.placeholder} />
    );
  }

  orderDateFormatter(cell, row, data) {
    if (row.OrderDate) {
      let date = row.OrderDate.split('T');
      return date[0];
    }
  }

  orderTotalFormatter(cell, row, data) {
    if (row.CurrencyCode) {
      return `$` + Number(row.Total) + ` ` + row.CurrencyCode.toUpperCase();
    }
    return `$` + Number(row.Total);
  }

  orderPVFormatter(cell, row, data) {
    return Number(row.PV) + ` PV`;
  }

  render() {
    return (
      <div>
        <div className="col-sm-12">
          <HomeHeaderscreen />
        </div>
        <div className="container-fluid page_container">
          <div className="content">
            <div>
              <div className="col-sm-12">
                <h2 className="h2hdr">Personal Use Orders</h2>
                <div className="row">
                  <div className="col-sm-2">
                    <nav className="view-navigation">
                      <div className="panel-group leftmenuwd">
                        <div className="panel panel-default no-border">
                          <div className="panel-heading">
                            <div className="panel-title">
                              <a href="/#/orders" >
                                <i className="fa fa-list-alt lmenuicon" aria-hidden="true"></i> Inventory Orders
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default no-border">
                          <div className="panel-heading active">
                            <div className="panel-title">
                              <a className="active">
                                <i className="fa fa-list-ul lmenuicon" aria-hidden="true"></i> Personal Use Orders
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default no-border">
                          <div className="panel-heading">
                            <div className="panel-title">
                              <a href="/#/">
                                <i className="fa fa-tags lmenuicon" aria-hidden="true"></i> Sales
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div className="col-md-10">
                    <div className="col-sm-12">
                      <div>
                        <ul className="nav nav-tabs">
                          <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#RecentOrders">Recent Orders</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#PersonalUseOrders">Personal Use Orders</a>
                          </li>
                          <li className="nav-item">
                            {/* <a className="nav-link" data-toggle="tab" href="#InventoryOrders">Inventory Orders</a> */}
                            <a className="nav-link" href="/#/orders">Inventory Orders</a>
                          </li>
                        </ul>

                        <div className="tab-content">
                          <div id="RecentOrders" className="tab-pane">
                            <h3>Recent Orders</h3>
                          </div>

                          <div id="PersonalUseOrders" className="tab-pane active">
                            <div className="col-sm-12 textalignr textbpdng">All Orders Are Displayed In Mountain Standard Time</div>
                            <div className="panel panel-default panelmb50 clear" style={{ backgroundColor: "#ebf2ff" }}>
                              <div>
                                <BootstrapTable search={false} searchPlaceholder='Search Order By Order Number' remote={this.state.isRemote} data={this.state.OrderList} exportCSV={true} pagination={true}
                                  fetchInfo={{ dataTotalSize: this.state.totalDataSize }}
                                  options={{
                                    defaultSearch: '',
                                    searchDelayTime: 2000,
                                    sizePerPage: this.state.sizePerPage,
                                    onPageChange: this.onPageChange.bind(this),
                                    sizePerPageList: [5, 10, 20],
                                    page: this.state.currentPage,
                                    noDataText: this.checkOrderFetchedData(),
                                    onSortChange: this.onSortChange.bind(this),
                                    exportCSVBtn: this.createCustomExportCSVButton.bind(this),
                                    toolBar: this.createCustomToolBar.bind(this),
                                    searchPanel: (props) => (<MySearchPanel {...props} />),
                                    searchField: this.createCustomSearchField.bind(this),
                                    onSearchChange: this.onSearchChange.bind(this)
                                  }}>
                                  <TableHeaderColumn dataField='OrderID' isKey={true} dataSort={true}>Order Number</TableHeaderColumn>
                                  <TableHeaderColumn dataField='Total' dataFormat={this.orderTotalFormatter.bind(this)} dataSort={true}>Total</TableHeaderColumn>
                                  <TableHeaderColumn dataField='PV' dataFormat={this.orderPVFormatter.bind(this)} dataSort={true}>PV</TableHeaderColumn>
                                  <TableHeaderColumn dataField='TypeDescription' dataSort={false}>Type</TableHeaderColumn>
                                  <TableHeaderColumn dataField='StatusDescription' dataSort={false}>Status</TableHeaderColumn>
                                  <TableHeaderColumn dataField='OrderDate' dataFormat={this.orderDateFormatter.bind(this)} dataSort={true}>Order Date</TableHeaderColumn>
                                </BootstrapTable>
                              </div>
                            </div>
                          </div>

                          <div id="InventoryOrders" className="tab-pane">
                            <h3>Inventory Orders</h3>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="col-sm-12">
            <PageFooter />
          </div>
        </div>

      </div>
    )
  }
}

export default PersonalUseOrdersScreen;

export class MySearchPanel extends React.Component {
  render() {
    return (
      <div style={{ margin: "10px" }}>
        {this.props.searchField}
      </div>
    );
  }
}
