import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeHeaderscreen from '../homeheader';
import ReportLeftmenuscreen from '../reportleftmenu';
import PageFooter from '../footer';
import axios from 'axios';
import '../../styles/styles.css';
import EndPoints from '../../Config/ApiEndpoints/endpoints';
import ReactLoading from "react-loading";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
let customerId = 967;

class CustomersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: [],
      error: {},
      isDataFetched: false,
      isCount: false,
      totalDataSize: 0,
      sizePerPage: 10,
      currentPage: 1,
      CustomerList: [],
      isRemote: true,
      sortName: '',
      sortOrder: '',
      searchData: '',
      customerExportedData: [],
      isFetchingExportData: false,
      allCustomerList: [],

      //for customer details
      isLoadingDetails: false,
      customerDetails: {},
      id: '',


      //for orders 
      Order: {
        isDataFetched: false,
        isCount: false,
        totalDataSize: 0,
        sizePerPage: 10,
        currentPage: 1,
        OrderList: [],
        isRemote: true,
        sortName: '',
        sortOrder: '',
      },
      //for auto orders 
      AutoOrder: {
        isDataFetched: false,
        isCount: false,
        totalDataSize: 0,
        sizePerPage: 10,
        currentPage: 1,
        OrderList: [],
        isRemote: true,
        sortName: '',
        sortOrder: ''
      },
    }
  }

  componentDidMount() {
    this.loadCustomers();
  }

  loadCustomers = () => {
    axios({
      method: 'POST',
      url: EndPoints.ReportBaseUrl + EndPoints.Customer.Url,
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
        CustomerList: result.Customers,
        isDataFetched: true,
        isCount: true
      });
    }).catch(function (error) {
      console.log(error);
    });
  }

  onPageChange = async (page, sizePerPage) => {
    if (this.state.isRemote) {
      await this.setState({
        currentPage: page,
        sizePerPage: sizePerPage,
        isDataFetched: false,
        CustomerList: [],
      });
      this.loadCustomers();
    }
    return;
  }

  onSortChange = async (sortName, sortOrder) => {
    if (this.state.CustomerList.length === 0) {
      return;
    }
    if (this.state.isRemote) {
      await this.setState({
        isDataFetched: false,
        CustomerList: [],
        sortName: sortName,
        sortOrder: sortOrder
      });
      this.loadCustomers();
    }
    else {
      if (sortOrder === 'asc') {
        this.state.CustomerList.sort(function (a, b) {
          if (a[sortName] > b[sortName]) {
            return 1;
          } else if (b[sortName] > a[sortName], 10) {
            return -1;
          }
          return 0;
        });
      } else {
        this.state.CustomerList.sort(function (a, b) {
          if (a[sortName] > b[sortName]) {
            return -1;
          } else if (b[sortName] > a[sortName]) {
            return 1;
          }
          return 0;
        });
      }
      this.setState({
        CustomerList: this.state.CustomerList
      });
    }
  }

  onSearchChange = async (searchText, colInfos, multiColumnSearch) => {
    const text = searchText.trim();
    // if (!text && this.state.allCustomerList.length > 0) {
    //   await this.setState({
    //     CustomerList: this.state.allCustomerList
    //   });
    //   return;
    // }
    if (this.state.isRemote) {
      await this.setState({
        isDataFetched: false,
        CustomerList: [],
        sortName: '',
        sortOrder: '',
        currentPage: 1,
        totalDataSize: 0,
        searchData: text,
        isCount: false
      });
      this.loadCustomers();
    } else {
      return;
    }
  }

  customerDetailsFormatter(cell, row, data) {
    return <Link to="/" onClick={() => this.getCustomerDetails(row)} data-toggle="modal" data-target=".bd-example-modal-lg"><i className="far fa-address-book"></i></Link>;
  }

  checkCustomerFetchedData() {
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
        url: EndPoints.ReportBaseUrl + EndPoints.Customer.Url,
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
          CustomerList: this.state.searchData ? this.state.CustomerList : result.Customers,
          isFetchingExportData: false,
          allCustomerList: result.Customers,
          totalDataSize: this.state.searchData ? this.state.totalDataSize : result.Customers.length,
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

  getCustomerDetails = async (row) => {
    this.setState({
      isLoadingDetails: true,
      id: row.CustomerID,
      Order: {
        isDataFetched: false,
        isCount: false,
        totalDataSize: 0,
        sizePerPage: 10,
        currentPage: 1,
        OrderList: [],
        isRemote: true,
        sortName: '',
        sortOrder: '',
      },
      AutoOrder: {
        isDataFetched: false,
        isCount: false,
        totalDataSize: 0,
        sizePerPage: 10,
        currentPage: 1,
        OrderList: [],
        isRemote: true,
        sortName: '',
        sortOrder: ''
      }
    });
    axios({
      method: 'POST',
      url: EndPoints.ReportBaseUrl + EndPoints.CustomerDetails.Url,
      data: {
        CustomerID: customerId,
        ID: row.CustomerID
      }
    }).then(async (response) => {
      var result = await response.data.Items;
      this.setState({
        isLoadingDetails: false,
        customerDetails: result.Customer
      });
    }).catch(function (error) {
      console.log(error);
    });
  }

  //#region Order

  handleOrderClick = async () => {
    if (this.state.Order.isDataFetched) {
      return;
    }
    this.loadOrders();
  }

  loadOrders = async () => {
    axios({
      method: 'POST',
      url: EndPoints.ReportBaseUrl + EndPoints.OrderList.Url,
      data: {
        CustomerID: customerId,
        ID: this.state.id,
        PageSize: this.state.Order.sizePerPage,
        PageNo: this.state.Order.currentPage,
        IsCount: this.state.Order.isCount,
        SortName: this.state.Order.sortName,
        SortOrder: this.state.Order.sortOrder
      }
    }).then(async (response) => {
      var result = await response.data.Items;
      await this.setState(prevState => ({
        Order: {
          ...prevState.Order,
          totalDataSize: this.state.Order.isCount ? this.state.Order.totalDataSize : result.Count,
          OrderList: result.Orders,
          isDataFetched: true,
          isCount: true
        }
      }));
    }).catch(function (error) {
      console.log(error);
    });
  }

  onOrderPageChange = async (page, sizePerPage) => {
    if (this.state.Order.isRemote) {
      await this.setState(prevState => ({
        Order: {
          ...prevState.Order,
          currentPage: page,
          sizePerPage: sizePerPage,
          isDataFetched: false,
          OrderList: [],
        }
      }));
      this.loadOrders();
    }
    return;
  }

  onOrderSortChange = async (sortName, sortOrder) => {
    if (this.state.Order.OrderList.length === 0) {
      return;
    }
    if (this.state.Order.isRemote) {
      await this.setState(prevState => ({
        Order: {
          ...prevState.Order,
          isDataFetched: false,
          OrderList: [],
          sortName: sortName,
          sortOrder: sortOrder
        }
      }));
      this.loadOrders();
    }
    else {
      if (sortOrder === 'asc') {
        this.state.Order.OrderList.sort(function (a, b) {
          if (a[sortName] > b[sortName]) {
            return 1;
          } else if (b[sortName] > a[sortName], 10) {
            return -1;
          }
          return 0;
        });
      } else {
        this.state.Order.OrderList.sort(function (a, b) {
          if (a[sortName] > b[sortName]) {
            return -1;
          } else if (b[sortName] > a[sortName]) {
            return 1;
          }
          return 0;
        });
      }
      this.setState(prevState => ({
        Order: {
          ...prevState.Order,
          OrderList: this.state.Order.OrderList
        }
      }));
    }
  }

  checkOrderFetchedData() {
    if (this.state.Order.isDataFetched) {
      return "No records found";
    } else {
      return (
        <center><ReactLoading type="bars" color="#000" height={30} width={30} /></center>
      );
    }
  }

  orderTotalFormatter(cell, row, data) {
    if (row.CurrencyCode) {
      return `$` + Number(row.SubTotal) + ` ` + row.CurrencyCode;
    }
    return `$` + Number(row.SubTotal);
  }

  orderDateFormatter(cell, row, data) {
    if (row.OrderDate) {
      let date = row.OrderDate.split('T');
      return date[0];
    }
  }

  orderPVFormatter(cell, row, data) {
    return Number(row.BusinessVolumeTotal) + ` PV`;
  }

  //#endregion

  //#region AutoOrder

  handleAutoOrderClick = async () => {
    if (this.state.AutoOrder.isDataFetched) {
      return;
    }
    this.loadAutoOrders();
  }

  loadAutoOrders = async () => {
    axios({
      method: 'POST',
      url: EndPoints.ReportBaseUrl + EndPoints.AutoOrderList.Url,
      data: {
        CustomerID: customerId,
        ID: this.state.id,
        PageSize: this.state.AutoOrder.sizePerPage,
        PageNo: this.state.AutoOrder.currentPage,
        IsCount: this.state.AutoOrder.isCount,
        SortName: this.state.AutoOrder.sortName,
        SortOrder: this.state.AutoOrder.sortOrder
      }
    }).then(async (response) => {
      var result = await response.data.Items;
      await this.setState(prevState => ({
        AutoOrder: {
          ...prevState.AutoOrder,
          totalDataSize: this.state.AutoOrder.isCount ? this.state.AutoOrder.totalDataSize : result.Count,
          AutoOrderList: result.AutoOrders,
          isDataFetched: true,
          isCount: true
        }
      }));
    }).catch(function (error) {
      console.log(error);
    });
  }

  onAutoOrderPageChange = async (page, sizePerPage) => {
    if (this.state.AutoOrder.isRemote) {
      await this.setState(prevState => ({
        AutoOrder: {
          ...prevState.AutoOrder,
          currentPage: page,
          sizePerPage: sizePerPage,
          isDataFetched: false,
          AutoOrderList: [],
        }
      }));
      this.loadAutoOrders();
    }
    return;
  }

  onAutoOrderSortChange = async (sortName, sortOrder) => {
    if (this.state.AutoOrder.AutoOrderList.length === 0) {
      return;
    }
    if (this.state.AutoOrder.isRemote) {
      await this.setState(prevState => ({
        AutoOrder: {
          ...prevState.AutoOrder,
          isDataFetched: false,
          AutoOrderList: [],
          sortName: sortName,
          sortOrder: sortOrder
        }
      }));
      this.loadAutoOrders();
    }
    else {
      if (sortOrder === 'asc') {
        this.state.AutoOrder.AutoOrderList.sort(function (a, b) {
          if (a[sortName] > b[sortName]) {
            return 1;
          } else if (b[sortName] > a[sortName], 10) {
            return -1;
          }
          return 0;
        });
      } else {
        this.state.AutoOrder.AutoOrderList.sort(function (a, b) {
          if (a[sortName] > b[sortName]) {
            return -1;
          } else if (b[sortName] > a[sortName]) {
            return 1;
          }
          return 0;
        });
      }
      this.setState(prevState => ({
        AutoOrder: {
          ...prevState.AutoOrder,
          AutoOrderList: this.state.AutoOrder.AutoOrderList
        }
      }));
    }
  }

  checkAutoOrderFetchedData() {
    if (this.state.AutoOrder.isDataFetched) {
      return "No records found";
    } else {
      return (
        <center><ReactLoading type="bars" color="#000" height={30} width={30} /></center>
      );
    }
  }

  autoOrderPVFormatter(cell, row, data) {
    return Number(row.BusinessVolumeTotal) + ` PV`;
  }

  autoOrderTotalFormatter(cell, row, data) {
    if (row.CurrencyCode) {
      return `$` + Number(row.SubTotal) + ` ` + row.CurrencyCode;
    }
    return `$` + Number(row.SubTotal);
  }

  autoOrderLastRunDateFormatter(cell, row, data) {
    if (row.LastRunDate) {
      let date = row.LastRunDate.split('T');
      return date[0];
    }
  }
  autoOrderNextRunDateFormatter(cell, row, data) {
    if (row.NextRunDate) {
      let date = row.NextRunDate.split('T');
      return date[0];
    }
  }

  //#endregion

  render() {
    const { isLoadingDetails, customerDetails } = this.state
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="row content">
            <div className="container">
              <div className="col-sm-12">
                <h2 className="h2hdr">Customer List</h2>
                <div className="row">
                  <ReportLeftmenuscreen {...{ "name": "customers" }} />
                  <div className="col-md-9">
                    <div className="panel panel-default panelmb50" style={{ backgroundColor: "#ebf2ff" }}>
                      <BootstrapTable search={true} searchPlaceholder='Search Customer' remote={this.state.isRemote} data={this.state.CustomerList} exportCSV={true} pagination={true}
                        fetchInfo={{ dataTotalSize: this.state.totalDataSize }}
                        options={{
                          defaultSearch: '',
                          searchDelayTime: 2000,
                          sizePerPage: this.state.sizePerPage,
                          onPageChange: this.onPageChange.bind(this),
                          sizePerPageList: [5, 10, 20],
                          page: this.state.currentPage,
                          noDataText: this.checkCustomerFetchedData(),
                          onSortChange: this.onSortChange.bind(this),
                          exportCSVBtn: this.createCustomExportCSVButton.bind(this),
                          toolBar: this.createCustomToolBar.bind(this),
                          searchPanel: (props) => (<MySearchPanel {...props} />),
                          searchField: this.createCustomSearchField.bind(this),
                          onSearchChange: this.onSearchChange.bind(this)
                        }}>
                        <TableHeaderColumn export={false} dataFormat={this.customerDetailsFormatter.bind(this)} dataAlign='center' width='30'></TableHeaderColumn>
                        <TableHeaderColumn dataField='CustomerID' isKey={true} dataSort={true}>ID</TableHeaderColumn>
                        <TableHeaderColumn dataField='CustomerName' dataSort={true}>Customer Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='Email' dataSort={true}>Email</TableHeaderColumn>
                        <TableHeaderColumn dataField='Phone' searchable={true} dataSort={true}>Phone</TableHeaderColumn>
                        <TableHeaderColumn dataField='Address' dataSort={true}>Address</TableHeaderColumn>
                      </BootstrapTable>


                      <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title hdrh5" id="exampleModalLabel">Customer Details</h5>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" className="closeicon">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <div>
                                {isLoadingDetails ? (
                                  <div className="row">
                                    <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6">
                                      <center><ReactLoading type="bars" color="#000" height={30} width={30} /></center>
                                    </div>
                                  </div>
                                ) : (
                                    <div className="row">
                                      <div className="col-sm-2">
                                        <img className="img-fluid logopdng1 avatar" src="../src/images/profiles/14113.png" alt="logo"></img>
                                        {/* <img src="" class="avatar"></img> */}
                                      </div>
                                      <div className="col-sm-10">
                                        <h3 className="Customerh3"><strong>{customerDetails.FirstName + " " + customerDetails.LastName}</strong> <small class="textmuted">#{customerDetails.CustomerID}</small><br></br>
                                        </h3>
                                      </div>
                                    </div>
                                  )
                                }
                                <div>
                                  <div className="col-sm-12">
                                    <ul className="nav nav-tabs margintop30" id="myTab" role="tablist">
                                      <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">General</a>
                                      </li>
                                      <li onClick={this.handleOrderClick} className="nav-item">
                                        <a className="nav-link" id="orders-tab" data-toggle="tab" href="#orders" role="tab" aria-controls="orders" aria-selected="false">Orders</a>
                                      </li>
                                      <li onClick={this.handleAutoOrderClick} className="nav-item">
                                        <a className="nav-link" id="autoorders-tab" data-toggle="tab" href="#autoorders" role="tab" aria-controls="autoorders" aria-selected="false">Auto Orders</a>
                                      </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                        <div className="row">
                                          <div className="col-sm-6 padiingt10">
                                            <label>Contact Information</label>
                                            {isLoadingDetails ? (
                                              <div className="well well-white no-border wellbg">
                                                <center><ReactLoading type="bars" color="#000" height={30} width={30} /></center>
                                              </div>
                                            ) : (
                                                <div className="well well-white no-border wellbg">
                                                  <div className="media">
                                                    <i className="media-object fa fa-phone fa_icon1"></i>
                                                    <div className="media-body">
                                                      <a href="tel:">{customerDetails.PrimaryPhone}</a>
                                                    </div>
                                                  </div>
                                                  <div className="media">
                                                    <i className="media-object fa fa-envelope fa_icon1"></i>
                                                    <div className="media-body">
                                                      <a href={"mailto:" + customerDetails.LoginName}>{customerDetails.LoginName}</a>
                                                    </div>
                                                  </div>
                                                </div>
                                              )}
                                          </div>
                                        </div>

                                        <div className="row">
                                          <div className="col-sm-6">
                                            <label>Addresses</label>
                                            {isLoadingDetails ? (
                                              <center>
                                                <ReactLoading type="bars" color="#000" height={30} width={30} />
                                              </center>
                                            ) : (
                                                <div>
                                                  {JSON.stringify(customerDetails) !== JSON.stringify({}) ? (<div className="well well-white no-border wellbg">
                                                    {customerDetails.MainAddress.trim() ? (
                                                      <div className="media">
                                                        <i className="media-object fa fa-home"></i>
                                                        <div className="media-body">
                                                          <p className="addresspara">{customerDetails.MainAddress}</p>
                                                          <p className="addresspara">{customerDetails.MainCity + " " + customerDetails.MainState}</p>
                                                          <p className="addresspara">{customerDetails.MainCountry + " " + customerDetails.MainZip}</p>
                                                        </div>
                                                      </div>
                                                    ) : null}
                                                    {customerDetails.MailAddress.trim() ? (
                                                      <div className="media">
                                                        <i className="media-object fa fa-home"></i>
                                                        <div className="media-body">
                                                          <p className="addresspara">{customerDetails.MailAddress}</p>
                                                          <p className="addresspara">{customerDetails.MailCity + " " + customerDetails.MailState}</p>
                                                          <p className="addresspara">{customerDetails.MailCountry + " " + customerDetails.MailZip}</p>
                                                        </div>
                                                      </div>
                                                    ) : null}
                                                    {customerDetails.OtherAddress.trim() ? (
                                                      <div className="media">
                                                        <i className="media-object fa fa-home"></i>
                                                        <div className="media-body">
                                                          <p className="addresspara">{customerDetails.OtherAddress}</p>
                                                          <p className="addresspara">{customerDetails.OtherCity + " " + customerDetails.OtherState}</p>
                                                          <p className="addresspara">{customerDetails.OtherCountry + " " + customerDetails.OtherZip}</p>
                                                        </div>
                                                      </div>
                                                    ) : null}
                                                  </div>) : (null)}
                                                </div>
                                              )}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="tab-pane fade" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                                        <BootstrapTable remote={this.state.Order.isRemote} data={this.state.Order.OrderList} pagination={true}
                                          fetchInfo={{ dataTotalSize: this.state.Order.totalDataSize }}
                                          options={{
                                            sizePerPage: this.state.Order.sizePerPage,
                                            onPageChange: this.onOrderPageChange.bind(this),
                                            sizePerPageList: [5, 10],
                                            page: this.state.Order.currentPage,
                                            noDataText: this.checkOrderFetchedData(),
                                            onSortChange: this.onOrderSortChange.bind(this),
                                          }}>
                                          <TableHeaderColumn dataField='OrderDate' dataFormat={this.orderDateFormatter.bind(this)} isKey={true} dataSort={true}>Order Date</TableHeaderColumn>
                                          <TableHeaderColumn dataField='SubTotal' dataFormat={this.orderTotalFormatter.bind(this)} dataSort={true}>Total</TableHeaderColumn>
                                          <TableHeaderColumn dataField='BusinessVolumeTotal' dataFormat={this.orderPVFormatter.bind(this)} dataSort={true}>PV</TableHeaderColumn>
                                        </BootstrapTable>
                                      </div>
                                      <div className="tab-pane fade" id="autoorders" role="tabpanel" aria-labelledby="autoorders-tab">
                                        <BootstrapTable remote={this.state.AutoOrder.isRemote} data={this.state.AutoOrder.AutoOrderList} pagination={true}
                                          fetchInfo={{ dataTotalSize: this.state.AutoOrder.totalDataSize }}
                                          options={{
                                            sizePerPage: this.state.AutoOrder.sizePerPage,
                                            onPageChange: this.onAutoOrderPageChange.bind(this),
                                            sizePerPageList: [5, 10],
                                            page: this.state.AutoOrder.currentPage,
                                            noDataText: this.checkAutoOrderFetchedData(),
                                            onSortChange: this.onAutoOrderSortChange.bind(this),
                                          }}>
                                          <TableHeaderColumn dataField='LastRunDate' dataFormat={this.autoOrderLastRunDateFormatter.bind(this)} isKey={true} dataSort={true}>Last Process Date</TableHeaderColumn>
                                          <TableHeaderColumn dataField='NextRunDate' dataFormat={this.autoOrderNextRunDateFormatter.bind(this)} dataSort={true}>Next Process Date</TableHeaderColumn>
                                          <TableHeaderColumn dataField='SubTotal' dataFormat={this.autoOrderTotalFormatter.bind(this)} dataSort={true}>Subtotal</TableHeaderColumn>
                                          <TableHeaderColumn dataField='BusinessVolumeTotal' dataFormat={this.autoOrderPVFormatter.bind(this)} dataSort={true}>PV</TableHeaderColumn>
                                        </BootstrapTable>
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
                </div>
              </div>
            </div>
            <PageFooter />
          </div>
        </div>
      </div>)
  }
}

export default CustomersScreen;

export class MySearchPanel extends React.Component {
  render() {
    return (
      <div style={{ margin: "10px" }}>
        {this.props.searchField}
      </div>
    );
  }
}
