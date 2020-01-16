import React, { Component } from 'react';
import HomeHeaderscreen from '../homeheader';
import PageFooter from '../footer';
import axios from 'axios';
import '../../styles/styles.css';
const BASE_URL = `http://localhost:6002/`;

class CommissionsScreen extends Component {
  constructor() {
    super()
    this.handleSelectedChange = this.handleSelectedChange.bind(this);
    this.state = {
      CommissionPeriodList: [],
      error: {},
      HistoricalSummaryCommissions: {},
      HistoricalCommission: {},
      RealTimeCommissions: []
    }
  }

  componentDidMount() {
    this.bindCommissionPeriods();
  }

  bindCommissionPeriods() {
    let customerId = 967
    axios
      .get(BASE_URL + "rogue/commission/getcommissionperiodlist/" + customerId)
      .then((response) => {
        this.setState({
          CommissionPeriodList: response.data.Items.CommissionPeriodList
        });
      })
      .catch(error => this.setState({ error }));
  }

  handleSelectedChange(e) {
    const val = e.target.value;
    if (!val) {
      return
    }
    let customerId = 967
    const runId = val.split('-')[0];
    const periodId = val.split('-')[1];
    let url = Number(runId) > 0 ? BASE_URL + `rogue/commission/getcommissiondetails/${customerId}/${runId}/0` : BASE_URL + `rogue/commission/getcommissiondetails/${customerId}/0/${periodId}`
    this.setState({ selectedPeriod: val });

    axios
      .get(url)
      .then((response) => {
        if (response.data.Items) {
          this.setState({
            HistoricalSummaryCommissions: response.data.Items.HistoricalSummaryCommissions,
            HistoricalCommission: response.data.Items.HistoricalCommission,
            RealTimeCommissions: response.data.Items.RealTimeCommissions
          });
        }
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { CommissionPeriodList, HistoricalSummaryCommissions } = this.state
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="row content">
            <div className="container">
              <div className="col-sm-12">
                <h2 className="h2hdr">Commissions</h2>
                <div className="row">
                  <div className="col-sm-3">

                    <nav className="view-navigation">
                      <div className="panel-group">
                        <div className="panel panel-default no-border">
                          <div className="panel-heading active">
                            <div className="panel-title">
                              <a href="/#/commissions" className="active">
                                Commissions
                                </a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default no-border">
                          <div className="panel-heading ">
                            <div className="panel-title">
                              <a href="/#/rank" className="">
                                Rank Advancement
                                </a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default no-border">
                          <div className="panel-heading ">
                            <div className="panel-title">
                              <a href="/#/volumes" className="">
                                Volumes
                                </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div className="col-md-9">
                    <div className="well well-sm">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="input-group">
                            <span className="input-group-btn">
                              <button className="btn btn-default" type="button"><i className="fa fa-angle-left" aria-hidden="true"></i></button>
                            </span>
                            <select value={this.state.selectedPeriod} onChange={this.handleSelectedChange} id="periodchoice" className="form-control">
                              {CommissionPeriodList.length > 0 ? (
                                CommissionPeriodList.map((data, index) => {
                                  return (
                                    <option key={index} value={data.RunID + "-" + data.Period.PeriodID}> {"Current Commissions - " + data.Period.PeriodDescription} {"(" + data.Period.StartDate.split('T')[0] + " - " + data.Period.EndDate.split('T')[0] + ")"}</option>
                                  )
                                })
                              ) : (
                                  <option value=""></option>
                                )}
                            </select>
                            <span className="input-group-btn">
                              <button className="btn btn-default" type="button"><i className="fa fa-angle-right" aria-hidden="true"></i></button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="panel panel-default panelmb50">
                      {!(JSON.stringify(HistoricalSummaryCommissions) === JSON.stringify({})) ?
                        (
                          <div className="panel-body">
                            <h4>{HistoricalSummaryCommissions.PeriodDescription} Commissions</h4>
                            <div className="row">
                              <div className="col-sm-5">
                                <div className="metric metric-sm">
                                  <div className="metric-body text-info">
                                    ${HistoricalSummaryCommissions.Commission.toLocaleString(undefined, { maximumFractionDigits: 2 })} <span style={{ fontSize: "15px" }}>USD</span>
                                  </div>
                                  <div className="metric-title">
                                    QualifiedAs: <strong>{HistoricalSummaryCommissions.PaidAsTitle}</strong>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="row padiingt10">
                                  <div className="col-sm-6">
                                    <dl className="dl-metric">
                                      <dt>PV</dt>
                                      <dd>{HistoricalSummaryCommissions.PV.toLocaleString(undefined, { maximumFractionDigits: 2 })}</dd>
                                      <dt>TV</dt>
                                      <dd>{HistoricalSummaryCommissions.TV.toLocaleString(undefined, { maximumFractionDigits: 2 })}</dd>
                                      <dt>EV</dt>
                                      <dd>{HistoricalSummaryCommissions.EV.toLocaleString(undefined, { maximumFractionDigits: 2 })}</dd>
                                    </dl>
                                  </div>
                                  <div className="col-sm-6">
                                    <dl className="dl-metric">
                                      <dt>PSQ</dt>
                                      <dd>{HistoricalSummaryCommissions.PSQ}</dd>
                                      <dt>Level 1 Mentors</dt>
                                      <dd>{HistoricalSummaryCommissions.L1M}</dd>
                                      <dt>Master Mentor Legs</dt>
                                      <dd>{HistoricalSummaryCommissions.MML}</dd>
                                    </dl>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div></div>
                        )}
                    </div>


                    {/* <div className="panel panel-default panelmb50">
                      <div className="panel-body">
                        <h4>Monthly 37 January 2020 Commissions</h4>
                        <div className="row">
                          <div className="col-sm-5">
                            <div className="metric metric-sm">
                              <dl className="dl-metric">
                                <dt><strong>Team Commissions</strong></dt>
                                <dd>$0.00&nbsp;USD</dd>
                                <dt><strong>USD Deferred Commissions</strong></dt>
                                <dd>$5.00&nbsp;USD</dd>
                                <dt><strong>CAD Deferred Commissions</strong></dt>
                                <dd>$53.36&nbsp;CAD</dd>

                              </dl>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="row padiingt10">
                              <div className="col-sm-6">
                                <dl className="dl-metric">
                                  <dt>PV</dt>
                                  <dd>107.92</dd>
                                  <dt>TV</dt>
                                  <dd>2,521.71</dd>
                                  <dt>EV</dt>
                                  <dd>3,786.12</dd>
                                </dl>
                              </div>
                              <div className="col-sm-6">
                                <dl className="dl-metric">
                                  <dt>PSQ</dt>
                                  <dd>3</dd>
                                  <dt>Level 1 Mentors</dt>
                                  <dd>0</dd>
                                  <dt>Master Mentor Legs</dt>
                                  <dd>0</dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-8 h20">
                            <div className="metric metric-sm">
                              <div className="metric-title">
                                Qualifying as: <strong>Qualified Designer</strong>
                              </div>
                            </div>
                          </div>
                          <div className="teamh">
                            <div className="metric metric-sm">
                              <div className="metric-title textalignr">*Team Commissions are displayed in USD</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <table className="table table-bordered tablemrb">
                          <thead>
                            <tr className="tdbg">
                              <th scope="col">From ID#</th>
                              <th scope="col">From</th>
                              <th scope="col">Paid Level</th>
                              <th scope="col">Source</th>
                              <th scope="col">%</th>
                              <th scope="col">Earned</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th colSpan="6">Bonus: Deferred Commission</th>
                            </tr>
                            <tr className="tdbg">
                              <td className="bluecolor">872805</td>
                              <td>Lainey Miller</td>
                              <td>1</td>
                              <td className="textalignr">$19.99 USD</td>
                              <td className="textalignr">25%	</td>
                              <td className="textalignr">$5.00 USD</td>
                            </tr>
                            <tr>
                              <td className="bluecolor">872805</td>
                              <td>Lainey Miller</td>
                              <td>1</td>
                              <td className="textalignr">$19.99 USD</td>
                              <td className="textalignr">25%	</td>
                              <td className="textalignr">$5.00 USD</td>
                            </tr>
                            <tr className="tdbg">
                              <td className="bluecolor">872805</td>
                              <td>Lainey Miller</td>
                              <td>1</td>
                              <td className="textalignr">$19.99 USD</td>
                              <td className="textalignr">25%	</td>
                              <td className="textalignr">$5.00 USD</td>
                            </tr>
                            <tr>
                              <td className="bluecolor">872805</td>
                              <td>Lainey Miller</td>
                              <td>1</td>
                              <td className="textalignr">$19.99 USD</td>
                              <td className="textalignr">25%	</td>
                              <td className="textalignr">$5.00 USD</td>
                            </tr>
                            <tr>
                              <td colSpan="5"></td>
                              <td><div className="totalb textalignr">Total: $53.36&nbsp;CAD<br></br> $5.00&nbsp;USD</div></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div> */}


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

export default CommissionsScreen;
