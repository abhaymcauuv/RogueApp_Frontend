import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeHeaderscreen from '../homeheader';
import ReportLeftmenuscreen from '../reportleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';
const axios = require('axios');
const BASE_URL = `http://localhost:6003/`;

class WattsofLoveDonationsScreen extends Component {
  state = {
    wolPeriodData: [],
    wolData: [],
    selectedPeriod: 0,
    pageSize: 10,
    PageNumber: 1,
    TotalRecord: 0,
    TotalDonation: 0.00
  };
  componentDidMount() {
    // Send a POST request
    this.loadWOLPeriodData();
  }
  loadWOLPeriodData = () => {
    axios({
      method: 'GET',
      url: BASE_URL + 'rogue/report/wattsoflove/getwolPeriodsList'
    }).then(async (response) => {
      const dt = await response.data.Items
      this.setState({ wolPeriodData: dt });
    })
      .catch(function (error) {
        console.log(error);
      });
  }
  handleChange = async (e) => {

    //console.log("Period ",e.target.value);
    await this.setState({ selectedPeriod: e.target.value });
    await this.ReloadGridData()
  }
  pageChanged = async (e) => {
    await this.setState({ PageNumber: Number(e.target.text) });
    await this.ReloadGridData()
  }
  pageChange = async (e) => {

    let pgNo = this.state.PageNumber + e <= 0 ? 1 : this.state.PageNumber + e;
    await this.setState({ PageNumber: pgNo });
    await this.ReloadGridData()
  }
  paginationRecords = () => {
    const paging = [];
    let count = Math.ceil(this.state.TotalRecord / 10);
    for (var i = 1; i <= count; i++) {
      paging.push(<li className="page-item" key={i}><a className="page-link" key={i} onClick={(val) => this.pageChanged(val)}>{i}</a></li>)
    }
    return paging;
  }

  ReloadGridData = async () => {

    axios({
      method: 'POST',
      url: BASE_URL + 'rogue/report/wattsoflove/postwattsoflove',
      data: {
        CustomerId: 14113,
        PeriodId: this.state.selectedPeriod,
        PageSize: this.state.pageSize,
        PageNumber: this.state.PageNumber
      }
    }).then(async (response) => {
      const dt = await response.data.Items;
      console.log(dt[0]);
      if (dt[0] == undefined) {
        await this.ReloadSecondaryGridData();
      }
      else {
        await this.setState({ TotalRecord: dt[0] != undefined ? dt[0].TotalRecordCount : 0 });
        this.setState({ wolData: dt });
        let total = 0;
        dt.map((am, i) => {
          total = total + Number(am.TotalofDonations)
        });
        await this.setState({ TotalDonation: total });
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
  ReloadSecondaryGridData = async () => {

    axios({
      method: 'POST',
      url: BASE_URL + 'rogue/report/wattsoflove/postrecentwattsoflove',
      data: {
        CustomerId: 14113,
        PeriodId: this.state.selectedPeriod,
        PageSize: this.state.pageSize,
        PageNumber: this.state.PageNumber
      }
    }).then(async (response) => {
      const dt = await response.data.Items;
      console.log(dt[0]);
      await this.setState({ TotalRecord: dt[0] != undefined ? dt[0].TotalRecordCount : 0 });
      this.setState({ wolData: dt });
      let total = 0;
      dt.map((am, i) => {
        total = total + Number(am.TotalofDonations)
      });
      await this.setState({ TotalDonation: total });
    }).catch(function (error) {
      console.log(error);
    });
  }
  render() {

    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="content">
            <div className="">
              <div className="col-sm-12">
                <h2 className="h2hdr">Watts of Love Donations</h2>
                <div className="row pl10">
                <div className="col-md-2">
                    <ReportLeftmenuscreen />
                  </div>
                  <div className="col-md-10">
                    <div>
                      <div className="well well-sm">
                        <div className="row">
                          <div className="col-sm-5">
                            <div className="input-group">
                              <span className="input-group-btn">
                                <button className="btn btn-default" type="button"><i className="fa fa-chevron-left"></i></button>
                              </span>
                              <select id="periods" className="form-control" onChange={(val) => this.handleChange(val)}>
                                {this.state.wolPeriodData.map((dt, i) => {
                                  return (
                                    <option key={i} value={dt.PeriodID}>{dt.PeriodDescription}</option>
                                  )
                                })}
                              </select>
                              <span className="input-group-btn">
                                <button className="btn btn-default" type="button"><i className="fa fa-chevron-right"></i></button>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default panelmb50">
                      <div className="panel-body">
                        <h4>Total Monthly Donations</h4>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="metric metric-sm">
                              <span className="metric-body text-info"> ${
                                this.state.TotalDonation
                              }</span>
                              <span>USD</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <table className="table table-bordered tablemrb">
                          <thead>
                            <tr className="tdbg">
                              <th scope="col"></th>
                              <th scope="col">Order Date</th>
                              <th scope="col">Order Number</th>
                              <th scope="col">Dollar Amount</th>
                              <th scope="col">Customer Name</th>
                              <th scope="col">ID</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.wolData.map((dt, i) => {
                              return (
                                <tr className="tdbg" key={i}>
                                  <td><Link to="#" key={dt.CustomerID}><i className="far fa-address-book"></i></Link></td>
                                  <td>{new Date(dt.OrderDate).getMonth() + 1 + "/" + new Date(dt.OrderDate).getDate() + "/" + new Date(dt.OrderDate).getFullYear()}</td>
                                  <td>{dt.OrderID}</td>
                                  <td>{dt.CustomerName}</td>
                                  <td>{dt.CustomerID}</td>
                                  <td>{dt.TotalofDonations}</td>
                                </tr>)
                            })}
                          </tbody>
                        </table>
                        <div className="row">
                          <div className="col-sm-9">
                            <nav aria-label="Page navigation example">
                              <ul className="pagination">
                                <li className="page-item">
                                  <a className="page-link" href="javascript:void(0);" onClick={() => this.pageChange(-1)} aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                  </a>
                                </li>
                                {this.paginationRecords()}
                                <li className="page-item">
                                  <a className="page-link" href="javascript:void(0);" aria-label="Next" onClick={() => this.pageChange(1)}>
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                          <div className="col-sm-3 paddingt10">
                            <span className="k-pager-info k-label">{this.state.TotalRecord == 0 ? 0 : (this.state.PageNumber - 1) * 10 + 1} - {this.state.TotalRecord == 0 ? 0 : this.state.PageNumber * 10} of {this.state.TotalRecord} items</span>
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

export default WattsofLoveDonationsScreen;
