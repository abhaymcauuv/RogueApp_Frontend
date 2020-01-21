import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeHeaderscreen from '../homeheader';
import ReportLeftmenuscreen from '../reportleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';
const axios = require('axios');
const BASE_URL = `http://localhost:6003/`;

class TeamPerformanceScreen extends Component {

  state = {
    teamPeriodData: [],
    teamPerformanceData: [],
    selectedPeriod: 0,
    isInactive: false,
    pageSize: 10,
    PageNumber: 1,
    TotalRecord: 0
  }
  componentDidMount() {
    // Send a POST request
    this.loadTeamPeriodData();
  }
  loadTeamPeriodData = () => {
    axios({
      method: 'GET',
      url: BASE_URL + 'rogue/report/teamperformance/getranklist'
    }).then(async (response) => {
      //console.log(response.data.Items);
      const dt = await response.data.Items
      this.setState({ teamPeriodData: dt });
    })
      .catch(function (error) {
        console.log(error);
      });
  }
  handleChange = async (e) => {

    await this.setState({ selectedPeriod: e.target.value });
    await this.ReloadGridData()
  }
  toggleCheckbox = async (e) => {

    await this.setState({ isInactive: e.target.checked });
    await this.ReloadGridData()
  }
  pageChanged = async (e) => {
    await this.setState({ PageNumber: Number(e.target.text) });
    await this.ReloadGridData()
  }
  pageChange= async (e) => {

    let pgNo = this.state.PageNumber+e <=0?1:this.state.PageNumber+e;
    await this.setState({ PageNumber: pgNo });
    await this.ReloadGridData()
  }
  ReloadGridData = async () => {

    axios({
      method: 'POST',
      url: BASE_URL + 'rogue/report/teamperformance/postteamperformancelist',
      data: {
        CustomerId: 14113,
        PeriodId: this.state.selectedPeriod,
        ShowInactive: this.state.isInactive,
        PageSize: this.state.pageSize,
        PageNumber: this.state.PageNumber
      }
    }).then(async (response) => {
      const dt = await response.data.Items;
      await this.setState({ TotalRecord: dt[0].TotalRecordCount });
      //console.log("TotalRecordCount",dt[0].TotalRecordCount);
      this.setState({ teamPerformanceData: dt });
    }).catch(function (error) {
      console.log(error);
    });
  }

  paginationRecords = () => {
    const paging = [];
    let count=Math.ceil(this.state.TotalRecord/10);
    for (var i = 1; i <= count; i++) {
     paging.push(<li className="page-item" key={i}><a className="page-link" key={i} onClick={(val) => this.pageChanged(val)}>{i}</a></li>)
    }
    return paging;
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="row content">
            <div className="container">
              <div className="col-sm-12">
                <h2 className="h2hdr">Team Performance</h2>
                <div className="row">
                  <ReportLeftmenuscreen />
                  <div className="col-md-9">
                    <div>
                      <div className="well well-sm">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="input-group">
                              <span className="input-group-btn">
                                <button className="btn btn-default" type="button"><i className="fa fa-chevron-left"></i></button>
                              </span>
                              <select id="periods" className="form-control" onChange={(val) => this.handleChange(val)}>
                                {/* <option value={0}>No Rank</option> */}
                                {this.state.teamPeriodData.map((dt, i) => {
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
                    <div className="checkbox cheboxpl">
                      <label>
                        <input type="checkbox" checked={this.state.isInactive} onChange={(val) => this.toggleCheckbox(val)} />  Include Closed Accounts
                          </label>
                    </div>
                    <div className="panel panel-default panelmb50">
                      <div>
                        <table className="table table-bordered tablemrb">
                          <thead>
                            <tr>
                              <th colSpan="10" className="textalignr tdbg">
                                <button type="button" className="k-grid-excel btn btn-primary hidden-print"><i className="fa fa-download"></i> Excel</button>
                              </th>
                            </tr>
                            <tr className="tdbg">
                              <th scope="col"></th>
                              <th scope="col">ID</th>
                              <th scope="col">Full Name</th>
                              <th scope="col">Level</th>
                              <th scope="col">Paid as Title</th>
                              <th scope="col">PV</th>
                              <th scope="col">TV</th>
                              <th scope="col">PSQ</th>
                            </tr>
                          </thead>
                          <tbody>

                            {this.state.teamPerformanceData.map((dt, i) => {
                              return (
                                <tr className="tdbg" key={i}>
                                  <td><Link to="#" key={dt.CustomerID}><i className="far fa-address-book"></i></Link></td>
                                  <td>{dt.CustomerID}</td>
                                  <td className="">{dt.FullName}</td>
                                  <td className="textalignr">{dt.Level}</td>
                                  <td className="">{dt.PaidAsTitle}</td>
                                  <td className="textalignr">{dt.PV}</td>
                                  <td className="textalignr">{dt.TV}</td>
                                  <td className="textalignr">{dt.PSQ}</td>
                                </tr>)
                            })}

                          </tbody>
                        </table>
                        <div className="row">
                          <div className="col-sm-9">
                            <nav aria-label="Page navigation example">
                              <ul className="pagination">
                                <li className="page-item">
                                  <a className="page-link" href="javascript:void(0);"  onClick={() => this.pageChange(-1)} aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                  </a>
                                </li>

                                {this.paginationRecords()}
                                {/* <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li> */}

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
                            <span className="k-pager-info k-label">1 - 23 of {this.state.TotalRecord} items</span>
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

export default TeamPerformanceScreen;
