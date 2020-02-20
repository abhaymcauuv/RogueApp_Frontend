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

class ClubCoutureScreen extends Component {
  constructor() {
    super();
    this.state = {
      error: {},
      isDataFetched: false,
      isCount: false,
      totalDataSize: 0,
      sizePerPage: 10,
      currentPage: 1,
      ClubCoutureCustomerList: [],
      isRemote: true,
      sortName: '',
      sortOrder: '',
      searchData: '',
      customerExportedData: [],
      isFetchingExportData: false,
      allClubCoutureCustomerList: [],
      includeClosedAccounts: false,
      activeTab: 1,
      isLoadingDetails: false,
      customerDetails: {},
      sponsorDetails: {},
      enrollerDetails: {},
      isDistributor: false,
      isInEnrollerTree: false,
      isActive: false,
      volumes: {},
      id: '',
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
        AutoOrderList: [],
        isRemote: true,
        sortName: '',
        sortOrder: ''
      },
      Volume: {
        isDataFetched: false,
        isCount: false,
        totalDataSize: 0,
        sizePerPage: 10,
        currentPage: 1,
        VolumeList: [],
        isRemote: true,
        sortName: '',
        sortOrder: ''
      },
      Activity: {
        isDataFetched: false,
        CustomerRecentActivity: []
      },
      Rank: {
        isDataFetched: false,
        Rank: {}
      }
    }
  }

  componentDidMount() {
    this.loadClubCoutureCustomers();
  }

  loadClubCoutureCustomers = () => {
    axios({
      method: 'POST',
      url: EndPoints.ReportBaseUrl + EndPoints.ClubCoutureCustomer.Url,
      data: {
        CustomerID: customerId,
        PageSize: this.state.sizePerPage,
        PageNo: this.state.currentPage,
        IsCount: this.state.isCount,
        IncludeClosedAccounts: this.state.includeClosedAccounts,
        SortName: this.state.sortName,
        SortOrder: this.state.sortOrder,
        SearchData: this.state.searchData
      }
    }).then(async (response) => {
      var result = await response.data.Items;
      await this.setState({
        totalDataSize: this.state.isCount ? this.state.totalDataSize : result.Count,
        ClubCoutureCustomerList: result.ClubCoutureCustomers,
        isDataFetched: true,
        isCount: true
      });
    }).catch(function (error) {
      console.log(error);
    });
  }

  includeClosedAccountsChecked = async (e) => {
    await this.setState({
      includeClosedAccounts: e.target.checked,
      isDataFetched: false,
      ClubCoutureCustomerList: [],
      currentPage: 1,
      isCount: false,
      isRemote: true
    });
    this.loadClubCoutureCustomers();
  }

  onPageChange = async (page, sizePerPage) => {
    if (this.state.isRemote) {
      await this.setState({
        currentPage: page,
        sizePerPage: sizePerPage,
        isDataFetched: false,
        ClubCoutureCustomerList: []
      });
      this.loadClubCoutureCustomers();
    }
    else {
      return;
    }
  }

  onSortChange = async (sortName, sortOrder) => {
    if (this.state.ClubCoutureCustomerList.length === 0) {
      return;
    }
    if (this.state.isRemote) {
      await this.setState({
        isDataFetched: false,
        ClubCoutureCustomerList: [],
        sortName: sortName,
        sortOrder: sortOrder
      });
      this.loadClubCoutureCustomers();
    }
    else {
      if (sortOrder === 'asc') {
        this.state.ClubCoutureCustomerList.sort(function (a, b) {
          if (a[sortName] > b[sortName]) {
            return 1;
          } else if (b[sortName] > a[sortName], 10) {
            return -1;
          }
          return 0;
        });
      } else {
        this.state.ClubCoutureCustomerList.sort(function (a, b) {
          if (a[sortName] > b[sortName]) {
            return -1;
          } else if (b[sortName] > a[sortName]) {
            return 1;
          }
          return 0;
        });
      }
      this.setState({
        ClubCoutureCustomerList: this.state.ClubCoutureCustomerList
      });
    }
  }

  onSearchChange = async (searchText, colInfos, multiColumnSearch) => {
    const text = searchText.trim();
    // if (!text && this.state.allClubCoutureCustomerList.length > 0) {
    //   await this.setState({
    //     ClubCoutureCustomerList: this.state.allClubCoutureCustomerList
    //   });
    //   return;
    // }
    if (this.state.isRemote) {
      await this.setState({
        isDataFetched: false,
        ClubCoutureCustomerList: [],
        sortName: '',
        sortOrder: '',
        currentPage: 1,
        totalDataSize: 0,
        searchData: text,
        isCount: false
      });
      this.loadClubCoutureCustomers();
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
        url: EndPoints.ReportBaseUrl + EndPoints.ClubCoutureCustomer.Url,
        data: {
          CustomerID: customerId,
          PageSize: 0,
          PageNo: 0,
          IsCount: true,
          IncludeClosedAccounts: this.state.includeClosedAccounts,
        }
      }).then(async (response) => {
        this.setState({ isRemote: false });
        var result = await response.data.Items;
        await this.setState({
          ClubCoutureCustomerList: this.state.searchData ? this.state.ClubCoutureCustomerList : result.ClubCoutureCustomers,
          isFetchingExportData: false,
          allClubCoutureCustomerList: result.ClubCoutureCustomers,
          totalDataSize: this.state.searchData ? this.state.totalDataSize : result.ClubCoutureCustomers.length,
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
    let isDistributor = false;
    if (Number(row.CustomerTypeID) == 4) {
      isDistributor = true
    }
    await this.setState({
      activeTab: 1,
      isLoadingDetails: true,
      id: row.CustomerID,
      customerDetails: {},
      sponsorDetails: {},
      enrollerDetails: {},
      isDistributor: isDistributor,
      isInEnrollerTree: false,
      isActive: false,
      volumes: {},

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
        AutoOrderList: [],
        isRemote: true,
        sortName: '',
        sortOrder: ''
      },
      Volume: {
        isDataFetched: false,
        isCount: false,
        totalDataSize: 0,
        sizePerPage: 10,
        currentPage: 1,
        VolumeList: [],
        isRemote: true,
        sortName: '',
        sortOrder: ''
      },
      Activity: {
        isDataFetched: false,
        CustomerRecentActivity: []
      },
      Rank: {
        isDataFetched: false,
        Rank: {}
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
        customerDetails: result.Customer,
        sponsorDetails: result.Sponsor !== undefined ? result.Sponsor : {},
        enrollerDetails: result.Enroller !== undefined ? result.Enroller : {},
        // isDistributor: result.IsDistributor,
        isInEnrollerTree: result.IsInEnrollerTree !== undefined ? result.IsInEnrollerTree : false,
        isActive: result.IsActive !== undefined ? result.IsActive : false,
        volumes: result.Volumes !== undefined ? result.Volumes : {}
      });
    }).catch(function (error) {
      console.log(error);
    });
  }

  handleGeneralTabClick = async () => {
    this.setState({ activeTab: 1 });
  }

  //#region activity

  handleActivityClick = async () => {
    await this.setState({ activeTab: 2 });
    if (this.state.Activity.isDataFetched) {
      return;
    }
    this.setState({
      Activity: {
        isDataFetched: false,
        CustomerRecentActivity: []
      }
    });
    this.getCustomerRecentActivity();
  }

  getCustomerRecentActivity = async () => {
    let endPoint = EndPoints.Activity.Url.replace('{id}', this.state.id);
    axios({
      method: 'GET',
      url: EndPoints.ReportBaseUrl + endPoint
    }).then(async (response) => {
      var result = await response.data.Items;
      this.setState({
        Activity: {
          isDataFetched: true,
          CustomerRecentActivity: result
        }
      });
    }).catch(function (error) {
      console.log(error);
    });
  }

  //#endregion

  //#region Order

  handleOrderClick = async () => {
    this.setState({ activeTab: 5 })
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
    this.setState({ activeTab: 6 });
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
    else {
      let date = row.StartDate.split('T');
      return date[0];
    }
  }

  //#endregion

  //#region Volume

  handleVolumeClick = async () => {
    this.setState({ activeTab: 4 });
    if (this.state.Volume.isDataFetched) {
      return;
    }
    this.loadVolumes();
  }

  loadVolumes = async () => {
    axios({
      method: 'POST',
      url: EndPoints.ReportBaseUrl + EndPoints.VolumeList.Url,
      data: {
        ID: this.state.id,
        PageSize: this.state.Volume.sizePerPage,
        PageNo: this.state.Volume.currentPage,
        IsCount: this.state.Volume.isCount,
        SortName: this.state.Volume.sortName,
        SortOrder: this.state.Volume.sortOrder
      }
    }).then(async (response) => {
      var result = await response.data.Items;
      await this.setState(prevState => ({
        Volume: {
          ...prevState.Volume,
          totalDataSize: this.state.Volume.isCount ? this.state.Volume.totalDataSize : result.Count,
          VolumeList: result.Volumes,
          isDataFetched: true,
          isCount: true
        }
      }));
    }).catch(function (error) {
      console.log(error);
    });
  }

  onVolumePageChange = async (page, sizePerPage) => {
    if (this.state.Volume.isRemote) {
      await this.setState(prevState => ({
        Volume: {
          ...prevState.Volume,
          currentPage: page,
          sizePerPage: sizePerPage,
          isDataFetched: false,
          VolumeList: []
        }
      }));
      this.loadVolumes();
    }
    return;
  }

  onVolumeSortChange = async (sortName, sortOrder) => {
    if (this.state.Volume.VolumeList.length === 0) {
      return;
    }
    if (this.state.Volume.isRemote) {
      await this.setState(prevState => ({
        Volume: {
          ...prevState.Volume,
          isDataFetched: false,
          VolumeList: [],
          sortName: sortName,
          sortOrder: sortOrder
        }
      }));
      this.loadVolumes();
    }
    else {
      if (sortOrder === 'asc') {
        this.state.Volume.VolumeList.sort(function (a, b) {
          if (a[sortName] > b[sortName]) {
            return 1;
          } else if (b[sortName] > a[sortName], 10) {
            return -1;
          }
          return 0;
        });
      } else {
        this.state.Volume.VolumeList.sort(function (a, b) {
          if (a[sortName] > b[sortName]) {
            return -1;
          } else if (b[sortName] > a[sortName]) {
            return 1;
          }
          return 0;
        });
      }
      this.setState(prevState => ({
        Volume: {
          ...prevState.Volume,
          VolumeList: this.state.Volume.VolumeList
        }
      }));
    }
  }

  checkVolumeFetchedData() {
    if (this.state.Volume.isDataFetched) {
      return "No records found";
    } else {
      return (
        <center><ReactLoading type="bars" color="#000" height={30} width={30} /></center>
      );
    }
  }
  //#endregion

  //#region Rank
  handleRankClick = async () => {
    await this.setState({ activeTab: 3 });
    if (this.state.Rank.isDataFetched) {
      return;
    }
    let endPoint = EndPoints.Rank.Url.replace('{id}', this.state.id);
    axios({
      method: 'GET',
      url: EndPoints.ReportBaseUrl + endPoint
    }).then(async (response) => {
      var result = await response.data.Items;
      await this.setState({
        Rank: {
          isDataFetched: true,
          Rank: result
        }
      });
    }).catch(function (error) {
      console.log(error);
    });
  }
  //#endregion

  render() {
    const { activeTab, isLoadingDetails, customerDetails, sponsorDetails, enrollerDetails, volumes, Activity, Rank } = this.state;
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="row content">
            <div className="container">
              <div className="col-sm-12">
                <h2 className="h2hdr">Club Couture</h2>
                <div className="row">
                  <ReportLeftmenuscreen {...{ "name": "clubcouture" }} />
                  <div className="col-md-9">
                    <div className="checkbox cheboxpl">
                      <label>
                        <input type="checkbox" onChange={this.includeClosedAccountsChecked.bind(this)} /> Include Cancelled/Paused Customers
                      </label>
                    </div>
                    <div className="panel panel-default panelmb50" style={{ backgroundColor: "#ebf2ff" }}>
                      <BootstrapTable search={true} searchPlaceholder='Search Customer' remote={this.state.isRemote} data={this.state.ClubCoutureCustomerList} exportCSV={true} pagination={true}
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
                        <TableHeaderColumn dataField='CustomerID' csvHeader='Customer ID' isKey={true} dataSort={true}>ID</TableHeaderColumn>
                        <TableHeaderColumn dataField='CustomerName' dataSort={true}>Customer Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='Email' dataSort={true}>Email</TableHeaderColumn>
                        <TableHeaderColumn dataField='Phone' searchable={true} dataSort={true}>Phone</TableHeaderColumn>
                        <TableHeaderColumn dataField='JoinDate' dataSort={true}>Join Date</TableHeaderColumn>
                        <TableHeaderColumn dataField='CustomerStatusDescription' csvHeader='Status' searchable={false} dataSort={true}>Status</TableHeaderColumn>
                        <TableHeaderColumn dataField='EndDate' hidden={true} export={true}>End Date</TableHeaderColumn>
                        <TableHeaderColumn dataField='NumberShipmentsReceived' hidden={true} export={true}>NumberShipmentsReceived</TableHeaderColumn>
                        <TableHeaderColumn dataField='Address' dataSort={true}>Address</TableHeaderColumn>
                        <TableHeaderColumn dataField='City' hidden={true} export={true}>City</TableHeaderColumn>
                        <TableHeaderColumn dataField='State' hidden={true} export={true}>State</TableHeaderColumn>
                        <TableHeaderColumn dataField='Country' hidden={true} export={true}>Country</TableHeaderColumn>
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
                                        <h3 className="Customerh3">
                                          <strong>{customerDetails.FirstName + " " + customerDetails.LastName}</strong>
                                          <small class="textmuted"> #{customerDetails.CustomerID}</small><br></br>
                                          {customerDetails.Date1 ? (
                                            <small class="textmuted">Join Date : {customerDetails.Date1.split('T')[0]}</small>
                                          ) : null}
                                          <br></br>
                                          {this.state.isDistributor ? (
                                            <small class="textmuted">LifetimeRank : {customerDetails.RankDescription}</small>
                                          ) : null}
                                        </h3>
                                      </div>
                                    </div>
                                  )
                                }
                                <div>
                                  <div className="col-sm-12">
                                    <ul className="nav nav-tabs margintop30" id="myTab" role="tablist">
                                      <li className="nav-item" onClick={this.handleGeneralTabClick}>
                                        <a className={activeTab == 1 ? "nav-link active" : "nav-link"} id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">General</a>
                                      </li>
                                      <li hidden={this.state.isDistributor ? false : true} onClick={this.handleActivityClick} className="nav-item">
                                        <a className={activeTab == 2 ? "nav-link active" : "nav-link"} id="activity-tab" data-toggle="tab" href="#activity" role="tab" aria-controls="activity" aria-selected="false">Activity</a>
                                      </li>
                                      <li hidden={this.state.isDistributor ? false : true} onClick={this.handleRankClick} className="nav-item">
                                        <a className={activeTab == 3 ? "nav-link active" : "nav-link"} id="rank-tab" data-toggle="tab" href="#rank" role="tab" aria-controls="rank" aria-selected="false">Next Rank</a>
                                      </li>
                                      <li hidden={this.state.isDistributor ? false : true} onClick={this.handleVolumeClick} className="nav-item">
                                        <a className={activeTab == 4 ? "nav-link active" : "nav-link"} id="orders-tab" data-toggle="tab" href="#volumes" role="tab" aria-controls="volumes" aria-selected="false">Volumes</a>
                                      </li>
                                      <li onClick={this.handleOrderClick} className="nav-item">
                                        <a className={activeTab == 5 ? "nav-link active" : "nav-link"} id="orders-tab" data-toggle="tab" href="#orders" role="tab" aria-controls="orders" aria-selected="false">Orders</a>
                                      </li>
                                      <li onClick={this.handleAutoOrderClick} className="nav-item">
                                        <a className={activeTab == 6 ? "nav-link active" : "nav-link"} id="autoorders-tab" data-toggle="tab" href="#autoorders" role="tab" aria-controls="autoorders" aria-selected="false">Auto Orders</a>
                                      </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                      <div className={activeTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="home" role="tabpanel" aria-labelledby="home-tab">

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

                                          {this.state.isDistributor && !this.state.isLoadingDetails ? (
                                            <div className="col-sm-6 padiingt10">
                                              <label>Placement</label>
                                              <div className="well well-white no-border wellbg">
                                                <dl class="dl-metric no-margin">
                                                  <dt>Placement</dt>
                                                  <dd>{JSON.stringify(sponsorDetails) !== JSON.stringify({}) ? (<span>
                                                    {sponsorDetails.FirstName + " " + sponsorDetails.LastName} ({sponsorDetails.CustomerID})
                                                  </span>) :
                                                    <span>----</span>}
                                                  </dd>

                                                  <dt>Sponsor</dt>
                                                  <dd>{JSON.stringify(enrollerDetails) !== JSON.stringify({}) ? (<span>
                                                    {enrollerDetails.FirstName + " " + enrollerDetails.LastName} ({enrollerDetails.CustomerID})
                                                  </span>) :
                                                    <span>----</span>}
                                                  </dd>

                                                  {customerDetails.Date1 ? (
                                                    <div>
                                                      <dt>JoinDate</dt>
                                                      <dd>{new Date(customerDetails.Date1).toLocaleDateString()}</dd>
                                                    </div>
                                                  ) : null}

                                                </dl>
                                              </div>
                                            </div>
                                          ) : null}
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

                                          {this.state.isDistributor && !this.state.isLoadingDetails ? (
                                            <div className="col-sm-6">
                                              <label>Actions</label>
                                              <div className="well well-white no-border wellbg">
                                                <Link to="/" >View Graphical Downline</Link>
                                              </div>
                                            </div>
                                          ) : null}
                                        </div>

                                        {this.state.isDistributor && !this.state.isLoadingDetails ? (
                                          <div className="row">
                                            <div className="col-sm-12 col-md-12">
                                              <label>Volumes</label>
                                              <div className="well well-white no-border">
                                                <dl class="dl-metric no-margin">
                                                  <dt>Active</dt>
                                                  <dd>{this.state.isActive ? <span class="text-success fa fa-check"></span> : <span class="text-success fa fa-times"></span>}</dd>
                                                  <dt>PV</dt>
                                                  <dd>{volumes.Volume2 ? <span class="text-success">{volumes.Volume2}</span> : <span class="text-success">0</span>}</dd>
                                                  <dt>CFPV Current</dt>
                                                  <dd>{volumes.Volume3 ? <span class="text-success">{volumes.Volume3}</span> : <span class="text-success">0</span>}</dd>
                                                  <dt>CFPV Previous</dt>
                                                  <dd>{volumes.Volume4 ? <span class="text-success">{volumes.Volume4}</span> : <span class="text-success">0</span>}</dd>
                                                  <dt>TV</dt>
                                                  <dd>{volumes.Volume5 ? <span class="text-success">{volumes.Volume5}</span> : <span class="text-success">0</span>}</dd>
                                                  <dt>EV</dt>
                                                  <dd>{volumes.Volume6 ? <span class="text-success">{volumes.Volume6}</span> : <span class="text-success">0</span>}</dd>
                                                  <dt>PSQ</dt>
                                                  <dd>{volumes.Volume7 ? <span class="text-success">{volumes.Volume7}</span> : <span class="text-success">0</span>}</dd>
                                                  <dt>Level 1 Mentors</dt>
                                                  <dd>{volumes.Volume8 ? <span class="text-success">{volumes.Volume8}</span> : <span class="text-success">0</span>}</dd>
                                                  <dt>Unilevel Master Mentor Legs</dt>
                                                  <dd>{volumes.Volume9 ? <span class="text-success">{volumes.Volume9}</span> : <span class="text-success">0</span>}</dd>
                                                  <dt>Unilevel Couturier Legs</dt>
                                                  <dd>{volumes.Volume10 ? <span class="text-success">{volumes.Volume10}</span> : <span class="text-success">0</span>}</dd>
                                                  <dt>Unilevel Executive Couturier Legs</dt>
                                                  <dd>{volumes.Volume11 ? <span class="text-success">{volumes.Volume11}</span> : <span class="text-success">0</span>}</dd>
                                                  <dt>Designer Dollars Earned</dt>
                                                  <dd>{volumes.Volume12 ? <span class="text-success">{volumes.Volume12}</span> : <span class="text-success">0</span>}</dd>
                                                </dl>
                                              </div>
                                            </div>
                                          </div>
                                        ) : null}

                                      </div>

                                      <div className={activeTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="activity" role="tabpanel" aria-labelledby="activity-tab">
                                        {Activity.isDataFetched ? <div>
                                          {Activity.CustomerRecentActivity.length > 0 ?
                                            Activity.CustomerRecentActivity.map((data, index) => {
                                              return (
                                                <div key={index}>
                                                  <span>{data.Text}</span><br />
                                                  <div class="text-muted text-sm">
                                                    <ul class="list-unstyled list-inline no-margin">
                                                      <li><i class="fa-calendar"></i> {data.EntryDate}</li>
                                                    </ul>
                                                  </div>
                                                  <div class="space-20"></div>
                                                </div>
                                              )
                                            })
                                            : <div style={{ padding: "20px" }}><center>Your team has no recent activity.</center></div>}
                                        </div> :
                                          <center><ReactLoading type="bars" color="#000" height={30} width={30} /></center>}
                                      </div>

                                      <div className={activeTab == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="rank" role="tabpanel" aria-labelledby="rank-tab">
                                        {Rank.isDataFetched ?
                                          <RankQualificationDetails {...Rank.Rank} /> :
                                          <center><ReactLoading type="bars" color="#000" height={30} width={30} /></center>}
                                      </div>

                                      <div className={activeTab == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="volumes" role="tabpanel" aria-labelledby="volumes-tab">
                                        <BootstrapTable remote={this.state.Volume.isRemote} data={this.state.Volume.VolumeList} pagination={true}
                                          fetchInfo={{ dataTotalSize: this.state.Volume.totalDataSize }}
                                          options={{
                                            sizePerPage: this.state.Volume.sizePerPage,
                                            onPageChange: this.onVolumePageChange.bind(this),
                                            sizePerPageList: [5, 10],
                                            page: this.state.Volume.currentPage,
                                            noDataText: this.checkVolumeFetchedData(),
                                            onSortChange: this.onVolumeSortChange.bind(this)
                                          }}>
                                          <TableHeaderColumn width={"20%"} dataField='PeriodDescription' isKey={true} dataSort={false}>Period</TableHeaderColumn>
                                          <TableHeaderColumn dataField='StartDate' dataSort={true}>Start Date</TableHeaderColumn>
                                          <TableHeaderColumn dataField='EndDate' dataSort={true}>End Date</TableHeaderColumn>
                                          <TableHeaderColumn dataField='RankDescription' dataSort={false}>Paid Rank</TableHeaderColumn>
                                          <TableHeaderColumn dataField='Volume1' dataSort={false}>Active</TableHeaderColumn>
                                          <TableHeaderColumn dataField='Volume2' dataSort={false}>PV</TableHeaderColumn>
                                          <TableHeaderColumn dataField='Volume5' dataSort={false}>TV</TableHeaderColumn>
                                        </BootstrapTable>
                                      </div>
                                      <div className={activeTab == 5 ? "tab-pane fade show active" : "tab-pane fade"} id="orders" role="tabpanel" aria-labelledby="orders-tab">
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
                                      <div className={activeTab == 6 ? "tab-pane fade show active" : "tab-pane fade"} id="autoorders" role="tabpanel" aria-labelledby="autoorders-tab">
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
          </div>
          <PageFooter />
        </div>

      </div>
    )
  }
}

export default ClubCoutureScreen;

export class MySearchPanel extends React.Component {
  render() {
    return (
      <div style={{ margin: "10px" }}>
        {this.props.searchField}
      </div>
    );
  }
}

export class RankQualificationDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.IsQualified ? (
          <div className="panel panel-success">
            <div className="panel-body">
              <div className="text-center">
                <strong className="lead text-success">QualifiedAs: {this.props.Rank.RankDescription}</strong>
              </div>
            </div>
          </div>
        ) : (
            <div>
              <div className="panel panel-default">
                <div className="panel-body">
                  <h3>{this.props.Rank.RankDescription ? this.props.Rank.RankDescription : "No Rank"}</h3>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="metric metric-sm">
                        <div className="metric-body text-info">{Math.round(this.props.TotalPercentComplete) + '%'}</div>
                        <div className="metric-title">
                          Complete
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-8">
                    </div>
                  </div>
                </div>
                {/* {this.props.QualificationLegs.length == 1 ? (
                  <div>
                    <div className="panel-body">
                      <h4> {this.props.Rank.RankDescription} </h4>
                    </div>
                    <div className="list-group">
                      {this.props.QualificationLegs[0].Requirements.map((data, index) => {
                        return (
                          <RankRequirement key={index} {...data} />
                        )
                      })}
                    </div>
                  </div>
                ) : null} */}

              </div>
              {this.props.QualificationLegs.length > 0 ? (
                <div className="row">
                  {this.props.QualificationLegs.map((data, index) => {
                    return (<div key={index} className="col-sm-12">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">Qualification Requirements</h4>
                        </div>
                        <div className="list-group">
                          {data.Requirements.map((requirement, i) => {
                            return <RankRequirement key={i} {...requirement} />
                          })}
                        </div>
                      </div>
                    </div>)
                  })}
                </div>
              ) : null}
            </div>
          )}
      </div>
    );
  }
}

export class RankRequirement extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        {this.props.IsQualified ? (
          <div className="list-group-item">
            <div className="media">
              <div style={{ width: "18px", marginTop: "5px" }} className="media-object pull-left fa fa-check text-success"></div>
              <div className="media-body">
                {this.props.RequirementDescription}
              </div>
            </div>
          </div>
        ) : (
            <div className="list-group-item">
              <div className="media">
                <div style={{ width: "18px", marginTop: "5px" }} className="media-object pull-left fa fa-times text-danger"></div>
                <div className="media-body">
                  {this.props.RequirementDescription}
                  <div>
                    {!this.props.IsBoolean ? (
                      <div>
                        <div className="space-10"></div>
                        <div className="progress progress-sm no-margin">
                          <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={"" + this.props.RequiredToActualAsPercent + ""} aria-valuemin="0" aria-valuemax="100" style={{ width: "" + this.props.RequiredToActualAsPercent + "%" }}>
                            <span class="sr-only">{this.props.RequiredToActualAsPercent + '% Complete'} </span>
                          </div>
                        </div>
                        <small class="text-muted">{this.props.ActualValueAsDecimal + " of " + this.props.RequiredValueAsDecimal}  </small>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    );
  }
}