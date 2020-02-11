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
//import ReactExport from "react-export-excel";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
let customerId = 967;

// const ExcelFile = ReactExport.ExcelFile;
// const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
// const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

var products = [
  {
    id: 2019,
    name: "$47.96",
    price: 29
  },
  {
    id: 2018,
    name: "$50.00",
    price: 11
  },
];


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
      allCustomerList: []
    }
  }

  componentDidMount() {
    this.loadCustomers();
  }

  loadCustomers = async () => {
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
      this.setState({
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

  // onSizePerPageList(sizePerPage) {
  //   alert(`sizePerPage: ${sizePerPage}`);
  //   this.loadCustomers(this.state.currentPage, sizePerPage);
  // }

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
    if (!text && this.state.allCustomerList.length > 0) {
      await this.setState({
        CustomerList: this.state.allCustomerList
      });
      return;
    }
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

  //  onExportToCSV() {
  //     return this.state.CustomerList
  //  }

  customerDetailsFormatter(cell, row, data) {
    return <Link to="/" data-toggle="modal" data-target=".bd-example-modal-lg"><i className="far fa-address-book"></i></Link>;
  }

  setTableOption() {
    if (this.state.isDataFetched) {
      return "No records found";
    } else {
      return (
        <center><ReactLoading type="bars" color="#000" height={30} width={30} /></center>
      );
    }
  }

  handleExportCSVButtonClick = async (onClick) => {
    if (this.state.CustomerList.length === 0) {
      return;
    }
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
          CustomerList: result.Customers,
          totalDataSize: result.Customers.length,
          isFetchingExportData: false
        });
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
      //<button onClick={this.getDataForExport.bind(this)} disabled={this.state.isFetchingExportData} style={{ margin: "10px" }} type="button"  className="k-grid-excel btn btn-primary hidden-print"><i className="fa fa-download"></i>{this.state.isFetchingExportData ? 'Exporting..' : 'Export'}</button>
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

  getDataForExport = async () => {
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
        var result = await response.data.Items;
        await this.setState({ isRemote: false });
        await this.setState({
          customerExportedData: result.Customers,
          CustomerList: this.state.searchData ? this.state.CustomerList : result.Customers,
          allCustomerList: result.Customers,
          totalDataSize: this.state.searchData ? this.state.totalDataSize : result.Customers.length,
          isFetchingExportData: false
        });
        await this.setState({
          customerExportedData: []
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
    else {
      await this.setState({
        customerExportedData: this.state.CustomerList,
        isFetchingExportData: false
      });
    }
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="row content">
            <div className="container">
              <div className="col-sm-12">
                <h2 className="h2hdr">Customer List</h2>
                <div className="row">
                  <ReportLeftmenuscreen />
                  <div className="col-md-9">
                    <div className="panel panel-default panelmb50" style={{ backgroundColor: "#ebf2ff" }}>
                      {/* {this.state.customerExportedData.length > 0 ? (
                        <ExcelFile hideElement={true} filename={"customers"}>
                          <ExcelSheet data={this.state.customerExportedData} name="Sheet1">
                            <ExcelColumn label="Customer ID" value="CustomerID" />
                            <ExcelColumn label="Customer Name" value="CustomerName" />
                            <ExcelColumn label="Email" value="Email" />
                            <ExcelColumn label="Phone" value="Phone" />
                            <ExcelColumn label="Address" value="Address" />
                          </ExcelSheet>
                        </ExcelFile>
                      ) : null} */}
                      <BootstrapTable search={true} searchPlaceholder='Search by Cusomer id/Name/Address' remote={this.state.isRemote} data={this.state.CustomerList} exportCSV={true} pagination={true}
                        fetchInfo={{ dataTotalSize: this.state.totalDataSize }}
                        options={{
                          defaultSearch: '',
                          searchDelayTime: 2000,
                          sizePerPage: this.state.sizePerPage,
                          onPageChange: this.onPageChange.bind(this),
                          sizePerPageList: [5, 10, 20],
                          page: this.state.currentPage,
                          //onSizePerPageList: this.state.onSizePerPageList,
                          noDataText: this.setTableOption(),
                          onSortChange: this.onSortChange.bind(this),
                          exportCSVBtn: this.createCustomExportCSVButton.bind(this),
                          toolBar: this.createCustomToolBar.bind(this),
                          searchPanel: (props) => (<MySearchPanel {...props} />),
                          searchField: this.createCustomSearchField.bind(this),
                          onSearchChange: this.onSearchChange.bind(this),
                          //onExportToCSV: this.onExportToCSV.bind(this)
                        }}>
                        <TableHeaderColumn export={false} dataFormat={this.customerDetailsFormatter} dataAlign='center' width='30'></TableHeaderColumn>
                        <TableHeaderColumn dataField='CustomerID' isKey={true} dataSort={true}>ID</TableHeaderColumn>
                        <TableHeaderColumn dataField='CustomerName' dataSort={true}>Customer Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='Email' dataSort={true}>Email</TableHeaderColumn>
                        <TableHeaderColumn dataField='Phone' searchable={false} dataSort={true}>Phone</TableHeaderColumn>
                        <TableHeaderColumn dataField='Address' dataSort={true}>Address</TableHeaderColumn>
                      </BootstrapTable>


                      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title hdrh5" id="exampleModalLabel">Customer Details</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" className="closeicon">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              <div class="row">
                                <div class="col-sm-2">
                                  <img className="img-fluid logopdng1 avatar" src="../src/images/profiles/14113.png" alt="logo"></img>
                                  {/* <img src="" class="avatar"></img> */}
                                </div>
                                <div class="col-sm-10">
                                  <h3 className="Customerh3"><strong>Aleshia Lindhardt</strong> <small class="textmuted">#17050</small><br></br>
                                  </h3>
                                </div>
                              </div>
                              <div>
                                <div className="col-sm-12">
                                  <ul class="nav nav-tabs margintop30" id="myTab" role="tablist">
                                    <li class="nav-item">
                                      <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">General</a>
                                    </li>
                                    <li class="nav-item">
                                      <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Orders</a>
                                    </li>
                                    <li class="nav-item">
                                      <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Auto Orders</a>
                                    </li>
                                  </ul>
                                  <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                      <div class="row">
                                        <div class="col-sm-6 padiingt10">
                                          <label>Contact Information</label>
                                          <div class="well well-white no-border wellbg">
                                            <div class="media">
                                              <i class="media-object fa fa-phone fa_icon1"></i>
                                              <div class="media-body">
                                                <a href="tel:">+1-800-741-8264</a>
                                              </div>
                                            </div>
                                            <div class="media">
                                              <i class="media-object fa fa-envelope fa_icon1"></i>
                                              <div class="media-body">
                                                <a href="mailto:info@yoofoo.com">info@yoofoo.com</a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="row">
                                        <div class="col-sm-6">
                                          <label>Addresses</label>
                                          <div class="well well-white no-border wellbg">
                                            <div class="media">
                                              <i class="media-object fa fa-home"></i>
                                              <div class="media-body">
                                                <p className="addresspara">YooFoo, LLC.</p>
                                                <p className="addresspara"> 9192 South 300 West Suite 3 Sandy,</p>
                                                <p className="addresspara">Utah 84070</p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                      </div>

                                    </div>
                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                      <BootstrapTable data={products} options={this.options} pagination>
                                        <TableHeaderColumn dataField='id' isKey dataSort>Order Date</TableHeaderColumn>
                                        <TableHeaderColumn dataField='name' dataSort>Total</TableHeaderColumn>
                                        <TableHeaderColumn dataField='price'>PV</TableHeaderColumn>
                                      </BootstrapTable>

                                    </div>
                                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                      <BootstrapTable data={products} options={this.options} pagination>
                                        <TableHeaderColumn dataField='id' isKey dataSort>Order Date</TableHeaderColumn>
                                        <TableHeaderColumn dataField='name' dataSort>Total</TableHeaderColumn>
                                        <TableHeaderColumn dataField='price'>PV</TableHeaderColumn>
                                      </BootstrapTable>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <RemotePaging onPageChange={this.onPageChange.bind(this)}
                        onSortChange={this.onSortChange.bind(this)} onExportToCSV={this.onExportToCSV.bind(this)}  {...this.state} /> */}
                      {/* <RemotePaging onPageChange={this.onPageChange.bind(this)}
                        onSizePerPageList={this.onSizePerPageList.bind(this)} {...this.state} /> */}
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

export default CustomersScreen;

// export class RemotePaging extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   customerDetailsFormatter(cell, row, data) {
//     return <Link to="/"><i className="far fa-address-book"></i></Link>;
//   }

//   setTableOption() {
//     if (this.props.isDataFetched) {
//       return "No records found";
//     } else {
//       return (
//         <center><ReactLoading type="bars" color="#000" height={30} width={30} /></center>
//       );
//     }
//   }

//   render() {
//     return (
//       <BootstrapTable data={this.props.CustomerList} remote={true} exportCSV={true} pagination={true}
//         fetchInfo={{ dataTotalSize: this.props.totalDataSize }}
//         options={{
//           sizePerPage: this.props.sizePerPage,
//           onPageChange: this.props.onPageChange,
//           sizePerPageList: [5, 10, 20],
//           page: this.props.currentPage,
//           //onSizePerPageList: this.props.onSizePerPageList,
//           noDataText: this.setTableOption(),
//           onSortChange: this.props.onSortChange,
//           onExportToCSV: this.props.onExportToCSV
//         }}>
//         <TableHeaderColumn export={false} dataFormat={this.customerDetailsFormatter} dataAlign='center' width='30'></TableHeaderColumn>
//         <TableHeaderColumn dataField='CustomerID' isKey={true} dataSort={true}>ID</TableHeaderColumn>
//         <TableHeaderColumn dataField='CustomerName' dataSort={true}>Customer Name</TableHeaderColumn>
//         <TableHeaderColumn dataField='Email' dataSort={true}>Email</TableHeaderColumn>
//         <TableHeaderColumn dataField='Phone' dataSort={true}>Phone</TableHeaderColumn>
//         <TableHeaderColumn dataField='Address' dataSort={true}>Address</TableHeaderColumn>
//       </BootstrapTable>
//     );
//   }
// }

export class MySearchPanel extends React.Component {
  render() {
    return (
      <div style={{ margin: "10px" }}>
        {this.props.searchField}
      </div>
    );
  }
}
