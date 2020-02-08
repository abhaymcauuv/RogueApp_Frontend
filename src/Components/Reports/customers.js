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

class CustomersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: [],
      error: {},
      isDataFetched: false,
      isCount: false,
      totalDataSize: 0,
      sizePerPage: 0,
      currentPage: 1,
      CustomerList: [],
      isRemote: true,
    }
  }

  componentDidMount() {
    this.loadCustomers(1, 10);
  }

  loadCustomers = async (pageNo, pageSize) => {
    let customerId = 967;
    axios({
      method: 'POST',
      url: EndPoints.ReportBaseUrl + EndPoints.Customer.Url,
      data: {
        CustomerID: customerId,
        PageSize: pageSize,
        PageNo: pageNo,
        IsCount: this.state.isCount
      }
    }).then(async (response) => {
      var result = await response.data.Items;
      this.setState({
        totalDataSize: this.state.isCount ? this.state.totalDataSize : result.Count,
        sizePerPage: pageSize,
        currentPage: pageNo,
        CustomerList: result.Customers,
        isDataFetched: true,
        isCount: true
      });
    }).catch(function (error) {
      console.log(error);
    });
  }

  onPageChange(page, sizePerPage) {
    if (this.state.isRemote) {
      this.setState({
        currentPage: page,
        isDataFetched: false,
        CustomerList: []
      });
      this.loadCustomers(page, sizePerPage);
    }
    return;
  }

  // onSizePerPageList(sizePerPage) {
  //   alert(`sizePerPage: ${sizePerPage}`);
  //   this.loadCustomers(this.state.currentPage, sizePerPage);
  // }

  onSortChange(sortName, sortOrder) {
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

  // onExportToCSV() {
  //   return this.state.CustomerList
  // }

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

    if (this.state.CustomerList.length !== this.state.totalDataSize) {
      let customerId = 967;
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
        this.setState({
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
      <ExportCSVButton
        btnText='Export'
        onClick={() => this.handleExportCSVButtonClick(onClick)} />
    );
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
                      <BootstrapTable remote={this.state.isRemote} data={this.state.CustomerList} exportCSV={true} pagination={true}
                        fetchInfo={{ dataTotalSize: this.props.totalDataSize }}
                        options={{
                          sizePerPage: this.state.sizePerPage,
                          onPageChange: this.onPageChange.bind(this),
                          sizePerPageList: [5, 10, 20],
                          page: this.state.currentPage,
                          //onSizePerPageList: this.props.onSizePerPageList,
                          noDataText: this.setTableOption(),
                          onSortChange: this.onSortChange.bind(this),
                          exportCSVBtn: this.createCustomExportCSVButton.bind(this)
                          // onExportToCSV: this.onExportToCSV.bind(this)
                        }}>
                        <TableHeaderColumn export={false} dataFormat={this.customerDetailsFormatter} dataAlign='center' width='30'></TableHeaderColumn>
                        <TableHeaderColumn dataField='CustomerID' isKey={true} dataSort={true}>ID</TableHeaderColumn>
                        <TableHeaderColumn dataField='CustomerName' dataSort={true}>Customer Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='Email' dataSort={true}>Email</TableHeaderColumn>
                        <TableHeaderColumn dataField='Phone' dataSort={true}>Phone</TableHeaderColumn>
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
