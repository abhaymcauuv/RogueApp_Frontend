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
import ReactExport from "react-export-excel";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
let customerId = 967;

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;


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
      sortOrder: ''
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
        SortOrder: this.state.sortOrder
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

  //  onExportToCSV() {
  //     return this.state.CustomerList
  //  }

  customerDetailsFormatter(cell, row, data) {
    return <Link to="/"><i className="far fa-address-book"></i></Link>;
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

  handleExportCSVButtonClick = (onClick) => {
    if (this.state.CustomerList.length === 0) {
      return;
    }

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
          totalDataSize: result.Customers.length
        });
        onClick();
      }).catch(function (error) {
        console.log(error);
      });
    }
    else {
      onClick();
    }
  }

  createCustomExportCSVButton = (onClick) => {
    return (
      <button style={{ margin: "10px" }} onClick={() => this.handleExportCSVButtonClick(onClick)} type="button" className="k-grid-excel btn btn-primary hidden-print"><i className="fa fa-download"></i> Export</button>
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

  onSearchChange = async (searchText, colInfos, multiColumnSearch) => {
    alert(searchText)
    if (this.state.CustomerList.length === 0) {
      return;
    }
    if (this.state.isRemote) {
    }
    return;
  }

  onExport = async () => {
    
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
                    <div className="panel panel-default panelmb50">

                      {/* <table className="table table-bordered tablemrb">
                        <thead>
                          <tr>
                            <th colSpan="10" className="textalignr tdbg">
                              <Download onClick={this.onExport.bind(this)} {...this.state} />
                            </th>
                          </tr>
                        </thead>
                      </table> */}
                      <BootstrapTable search={false} searchPlaceholder='Search by Cusomer id/Name/Address' remote={this.state.isRemote} data={this.state.CustomerList} exportCSV={true} pagination={true}
                        fetchInfo={{ dataTotalSize: this.props.totalDataSize }}
                        options={{
                          defaultSearch: '',
                          searchDelayTime: 3000,
                          sizePerPage: this.state.sizePerPage,
                          onPageChange: this.onPageChange.bind(this),
                          sizePerPageList: [5, 10, 20],
                          page: this.state.currentPage,
                          //onSizePerPageList: this.props.onSizePerPageList,
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
    console.log(this.props)
    return (
      <div style={{ margin: "10px" }}>
        {this.props.searchField}
      </div>
    );
  }
}




export class Download extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.CustomerList.length > 0 ? (
          <ExcelFile element={<button type="button" onClick={this.props.onClick} className="k-grid-excel btn btn-primary hidden-print"><i className="fa fa-download"></i> Export</button>}>
            <ExcelSheet data={this.props.CustomerList.slice(0, 50)} name="Sheet1">
              <ExcelColumn label="Customer ID" value="CustomerID" />
              <ExcelColumn label="Customer Name" value="CustomerName" />
              <ExcelColumn label="Email" value="Email" />
              <ExcelColumn label="Phone" value="Phone" />
              <ExcelColumn label="Address" value="Address" />
            </ExcelSheet>
            <ExcelSheet data={this.props.CustomerList.slice(50, 100)} name="Sheet2">
              <ExcelColumn label="Customer ID" value="CustomerID" />
              <ExcelColumn label="Customer Name" value="CustomerName" />
              <ExcelColumn label="Email" value="Email" />
              <ExcelColumn label="Phone" value="Phone" />
              <ExcelColumn label="Address" value="Address" />
            </ExcelSheet>
          </ExcelFile>
        ) : null}
      </div>
    );
  }
}