import React, { Component } from 'react';
import HomeHeaderscreen from '../homeheader';
import PageFooter from '../footer';
import axios from 'axios';
import '../../styles/styles.css';
import EndPoints from '../../Config/ApiEndpoints/endpoints';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

let customerId = 967;

var products = [
  {
    id: 1,
    total: "Product1",
    pv: 221.48,
    type: "Shopping Cart",
    status: "Shipped",
    date_field: "2/17/2020"
  },
  {
    id: 2,
    total: "Product2",
    pv: 421.78,
    type: "Shopping Cart2",
    status: "Shipped",
    date_field: "3/12/2020"
  },
  {
    id: 3,
    total: "Product3",
    pv: 321.21,
    type: "Shopping Cart3",
    status: "Shipped",
    date_field: "4/14/2020"
  },
  {
    id: 4,
    total: "Product4",
    pv: 121.40,
    type: "Shopping Cart4",
    status: "Shipped",
    date_field: "3/20/2020"
  }
];

function random() {
  return parseInt(Math.random() * 10, 10) + 1;
}

class InventoryOrdersScreen extends Component {
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
      url: EndPoints.Order.BaseUrl + EndPoints.Order.InventoryOrders.Url,
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
      //console.log(result)
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

  render() {
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="row content">
            <div className="container">
              <div className="col-sm-12">
                <h2 className="h2hdr">Inventory Orders</h2>
                <div className="row">
                  <div className="col-sm-3">

                    <nav className="view-navigation">
                      <div className="panel-group">
                        <div className="panel panel-default no-border">
                          <div className="panel-heading active">
                            <div className="panel-title">
                              <a href="/#/inventoryorders" className="active">
                                Inventory Orders
                                </a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default no-border">
                          <div className="panel-heading ">
                            <div className="panel-title">
                              <a href="/#/">
                                Personal Use Orders
                                </a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default no-border">
                          <div className="panel-heading">
                            <div className="panel-title">
                              <a href="/#/">
                                Sales
                                </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div className="col-md-9">
                    <div className="col-sm-12">
                      <div className="container mt-3">
                        <ul className="nav nav-tabs">
                          <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#RecentOrders">Recent Orders</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link " data-toggle="tab" href="#PersonalUseOrders">Personal Use Orders</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#InventoryOrders">Inventory Orders</a>
                          </li>
                        </ul>

                        <div className="tab-content">
                          <div id="RecentOrders" className="container tab-pane">
                            <h3>Recent Orders</h3>
                          </div>

                          <div id="PersonalUseOrders" className="container tab-pane">
                            <h3>Personal Use Orders</h3>
                          </div>

                          <div id="InventoryOrders" className="container tab-pane active">

                            <div className="col-sm-12 textalignr textbpdng">All Orders Are Displayed In Mountain Standard Time</div>
                            <div className="panel panel-default panelmb50 clear" style={{ backgroundColor: "#ebf2ff" }}>
                              <div>
                                {/* <div className="Inventorybg">
                                  <button type="button" className="btn btn-primary hidden-print"><i className="fa fa-download"></i> Excel</button>
                                </div> */}
                                <BootstrapTable search={true} searchPlaceholder='Search Order By Order Number' remote={this.state.isRemote} data={this.state.OrderList} exportCSV={true} pagination={true}
                                  fetchInfo={{ dataTotalSize: this.state.totalDataSize }}
                                  options={{
                                    defaultSearch: '',
                                    searchDelayTime: 2000,
                                    sizePerPage: this.state.sizePerPage,
                                    //onPageChange: this.onPageChange.bind(this),
                                    sizePerPageList: [5, 10, 20],
                                    page: this.state.currentPage,
                                    // noDataText: this.checkOrderFetchedData(),
                                    //onSortChange: this.onSortChange.bind(this),
                                    //exportCSVBtn: this.createCustomExportCSVButton.bind(this),
                                    //toolBar: this.createCustomToolBar.bind(this),
                                    //searchPanel: (props) => (<MySearchPanel {...props} />),
                                    // searchField: this.createCustomSearchField.bind(this),
                                    //onSearchChange: this.onSearchChange.bind(this)
                                  }}>
                                  <TableHeaderColumn dataField='OrderID' isKey={true} dataSort={true}>Order Number</TableHeaderColumn>
                                  <TableHeaderColumn dataField='Total' dataSort={true}>Total</TableHeaderColumn>
                                  <TableHeaderColumn dataField='PV' dataSort={true}>PV</TableHeaderColumn>
                                  <TableHeaderColumn dataField='TypeDescription' dataSort={false}>Type</TableHeaderColumn>
                                  <TableHeaderColumn dataField='StatusDescription' dataSort={false}>Status</TableHeaderColumn>
                                  <TableHeaderColumn dataField='OrderDate' dataSort={true}>Order Date</TableHeaderColumn>
                                </BootstrapTable>
                                {/* <BootstrapTable data={products} options={this.options} pagination>
                                  <TableHeaderColumn dataField='id' isKey dataSort>Order Number</TableHeaderColumn>
                                  <TableHeaderColumn dataField='total' dataSort>Total</TableHeaderColumn>
                                  <TableHeaderColumn dataField='pv' dataSort>PV</TableHeaderColumn>
                                  <TableHeaderColumn dataField='type' dataSort>Type</TableHeaderColumn>
                                  <TableHeaderColumn dataField='status' dataSort>Status</TableHeaderColumn>
                                  <TableHeaderColumn dataField='date_field' dataSort>Order Date</TableHeaderColumn>
                                </BootstrapTable> */}
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
          </div>
          <PageFooter />
        </div>

      </div>
    )
  }
}

export default InventoryOrdersScreen;

export class MySearchPanel extends React.Component {
  render() {
    return (
      <div style={{ margin: "10px" }}>
        {this.props.searchField}
      </div>
    );
  }
}
