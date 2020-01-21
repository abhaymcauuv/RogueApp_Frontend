import React, { Component } from 'react';
import HomeHeaderscreen from '../homeheader';
import PageFooter from '../footer';
import axios from 'axios';
import '../../styles/styles.css';
import EndPoints from '../../Config/ApiEndpoints/endpoints';
import { Spinner } from 'react-bootstrap';
import ReactLoading from "react-loading";

class CommissionsScreen extends Component {
  constructor() {
    super()
    this.handleSelectedChange = this.handleSelectedChange.bind(this);
    this.state = {
      CommissionPeriodList: [],
      IsLoadingPeriodList: true,
      IsLoadingCommission: false,
      error: {},
      HistoricalSummaryCommission: {},
      HistoricalCommission: {},
      RealTimeCommission: [],
      RealTimeBonusDetails: {},
      HistoricalBonusDetails: {},
      TeamSum: 0,
      UsdSum: 0,
      CadSum: 0,
      SavvySum: 0,
      Total: 0
    }
  }

  componentDidMount() {
    this.bindCommissionPeriods();
  }

  bindCommissionPeriods = () => {
    let customerId = 967;
    let entPoint = EndPoints.CommissionPeriodList.Url.replace('{CustomerId}', customerId);
    axios({
      method: 'GET',
      url: EndPoints.BaseUrl + entPoint
    }).then(async (response) => {
      const result = await response.data.Items
      this.setState({
        CommissionPeriodList: result.CommissionPeriodList,
        IsLoadingPeriodList: false
      });
    })
      .catch(function (error) {
        this.setState({ error: error, IsLoadingPeriodList: false })
      });
  }


  handleSelectedChange = async (e) => {
    const val = e.target.value;
    if (!val) {
      return
    }

    this.setState({
      selectedPeriod: val,
      HistoricalSummaryCommission: {},
      HistoricalCommission: {},
      HistoricalBonusDetails: {},
      IsLoadingCommission: true
    });

    let customerId = 967;
    var runId = val.split('-')[0];
    var periodId = val.split('-')[1];

    if (runId > 0) {
      periodId = 0;
    }

    axios({
      method: 'POST',
      url: EndPoints.BaseUrl + EndPoints.Commission.Url,
      data: {
        CustomerID: customerId,
        CommissionRunID: runId,
        PeriodID: periodId,
        PageSize: 0,
        PageNo: 0
      }
    }).then(async (response) => {
      var result = await response.data.Items;
      if (result) {
        let historicalSummaryCommission = {};
        if (!(JSON.stringify(result.HistoricalSummaryCommission) === JSON.stringify({}))) {
          historicalSummaryCommission = result.HistoricalSummaryCommission;
        }

        let historicalCommission = {};
        let historicalBonusDetails = {};
        let total = 0, usdSum = 0, cadSum = 0, teamSum = 0, savvySum = 0;
        if (!(JSON.stringify(result.HistoricalCommission) === JSON.stringify({}))) {
          historicalCommission = result.HistoricalCommission.Commission;
          historicalBonusDetails = result.HistoricalCommission.HistoricalBonus.HistoricalBonusDetails;
          total = result.HistoricalCommission.HistoricalBonus.TeamSum;
          usdSum = result.HistoricalCommission.HistoricalBonus.UsdSum;
          cadSum = result.HistoricalCommission.HistoricalBonus.CadSum;
          teamSum = result.HistoricalCommission.HistoricalBonus.SavvySum;
          savvySum = result.HistoricalCommission.HistoricalBonus.Total;
        }

        await this.setState({
          IsLoadingCommission: false,
          HistoricalSummaryCommission: historicalSummaryCommission,
          HistoricalCommission: historicalCommission,
          HistoricalBonusDetails: historicalBonusDetails,
          TeamSum: teamSum,
          UsdSum: usdSum,
          CadSum: cadSum,
          SavvySum: savvySum,
          Total: total
        });
      }
      else {
        this.setState({
          IsLoadingCommission: false
        });
      }
    }).catch(function (error) {
      console.log(error);
    });
  }

  calculateSum(commission) {
    var total = commission.reduce(function (prev, cur) {
      return prev + Number(cur.CommissionAmount);
    }, 0);
    return total.toLocaleString(undefined, { maximumFractionDigits: 2 });
  }

  render() {
    const { CommissionPeriodList, IsLoadingPeriodList, IsLoadingCommission, HistoricalSummaryCommission, HistoricalCommission, HistoricalBonusDetails, TeamSum,
      UsdSum, CadSum, SavvySum } = this.state
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
                          {!IsLoadingPeriodList ? (
                            <div className="input-group">
                              <span className="input-group-btn">
                                <button className="btn btn-default" type="button"><i className="fa fa-angle-left" aria-hidden="true"></i></button>
                              </span>

                              <select value={this.state.selectedPeriod} onChange={(e) => this.handleSelectedChange(e)} id="periodchoice" className="form-control">
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
                          ) : <center>
                              <ReactLoading type="bars" color="#000" height={30} width={30} />
                            </center>}
                        </div>
                      </div>
                    </div>


                    <div className="panel panel-default panelmb50">
                      {!IsLoadingCommission ? (
                        <div>
                          {!(JSON.stringify(HistoricalSummaryCommission) === JSON.stringify({})) ?
                            (
                              <div className="panel-body">
                                <h4>{HistoricalSummaryCommission.PeriodDescription} Commissions</h4>
                                <div className="row">
                                  <div className="col-sm-5">
                                    <div className="metric metric-sm">
                                      <div className="metric-body text-info">
                                        ${HistoricalSummaryCommission.Commission.toLocaleString(undefined, { maximumFractionDigits: 2 })} <span style={{ fontSize: "15px" }}>USD</span>
                                      </div>
                                      <div className="metric-title">
                                        QualifiedAs: <strong>{HistoricalSummaryCommission.PaidAsTitle}</strong>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="row padiingt10">
                                      <div className="col-sm-6">
                                        <dl className="dl-metric">
                                          <dt>PV</dt>
                                          <dd>{HistoricalSummaryCommission.PV.toLocaleString(undefined, { maximumFractionDigits: 2 })}</dd>
                                          <dt>TV</dt>
                                          <dd>{HistoricalSummaryCommission.TV.toLocaleString(undefined, { maximumFractionDigits: 2 })}</dd>
                                          <dt>EV</dt>
                                          <dd>{HistoricalSummaryCommission.EV.toLocaleString(undefined, { maximumFractionDigits: 2 })}</dd>
                                        </dl>
                                      </div>
                                      <div className="col-sm-6">
                                        <dl className="dl-metric">
                                          <dt>PSQ</dt>
                                          <dd>{HistoricalSummaryCommission.PSQ}</dd>
                                          <dt>Level 1 Mentors</dt>
                                          <dd>{HistoricalSummaryCommission.L1M}</dd>
                                          <dt>Master Mentor Legs</dt>
                                          <dd>{HistoricalSummaryCommission.MML}</dd>
                                        </dl>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div></div>
                            )}


                          {!(JSON.stringify(HistoricalCommission) === JSON.stringify({})) ?
                            (
                              <div>
                                <div className="panel-body">
                                  <h4>{HistoricalCommission.PeriodDescription} Commissions</h4>
                                  <div className="row">
                                    <div className="col-sm-5">
                                      <div className="metric metric-sm">
                                        <dl className="dl-metric">
                                          {TeamSum > 0 ? <div><dt id="teamLabel"><strong>Team Commissions</strong></dt>
                                            <dd id="teamID" >${TeamSum.toLocaleString(undefined, { maximumFractionDigits: 2 })} USD</dd></div> : null}
                                          {UsdSum > 0 ? <div>   <dt id="usdLabel" ><strong>USD Deferred Commissions</strong></dt>
                                            <dd id="usdID" >${UsdSum.toLocaleString(undefined, { maximumFractionDigits: 2 })} USD</dd></div> : null}
                                          {CadSum > 0 ? <div><dt id="cadLabel" ><strong>CAD Deferred Commissions</strong></dt>
                                            <dd id="cadID" >${CadSum.toLocaleString(undefined, { maximumFractionDigits: 2 })} CAD</dd></div> : null}
                                          {SavvySum > 0 ? <div> <dt id="savvyLabel" ><strong>Savvy Seller Bonus Total</strong></dt>
                                            <dd id="savvyID" >${SavvySum.toLocaleString(undefined, { maximumFractionDigits: 2 })} USD</dd></div> : null}
                                        </dl>
                                      </div>
                                    </div>
                                    <div className="col-sm-6">
                                      <div className="row padiingt10">
                                        <div className="col-sm-6">
                                          <dl className="dl-metric">
                                            <dt>PV</dt>
                                            <dd>{HistoricalCommission.Volume.Volume2.toLocaleString(undefined, { maximumFractionDigits: 2 })}</dd>
                                            <dt>TV</dt>
                                            <dd>{HistoricalCommission.Volume.Volume5.toLocaleString(undefined, { maximumFractionDigits: 2 })}</dd>
                                            <dt>EV</dt>
                                            <dd>{HistoricalCommission.Volume.Volume6.toLocaleString(undefined, { maximumFractionDigits: 2 })}</dd>
                                          </dl>
                                        </div>
                                        <div className="col-sm-6">
                                          <dl className="dl-metric">
                                            <dt>PSQ</dt>
                                            <dd>{HistoricalCommission.Volume.Volume7}</dd>
                                            <dt>Level 1 Mentors</dt>
                                            <dd>{HistoricalCommission.Volume.Volume8}</dd>
                                            <dt>Master Mentor Legs</dt>
                                            <dd>{HistoricalCommission.Volume.Volume9}</dd>
                                          </dl>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-sm-8 h20">
                                      <div className="metric metric-sm">
                                        <div className="metric-title">
                                          Qualifying as: <strong>{HistoricalCommission.RankDescription}</strong>
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
                                {!(JSON.stringify(HistoricalBonusDetails) === JSON.stringify({})) ? (
                                  <div>
                                    <table className="table table-bordered tablemrb" style={{ overflowY: "scroll", height: "500px", display: "block" }}>
                                      <thead>
                                        <tr className="tdbg">
                                          <th style={{ width: "20%" }} scope="col">From ID#</th>
                                          <th style={{ width: "20%" }} scope="col">From</th>
                                          <th style={{ width: "20%" }} scope="col">Paid Level</th>
                                          <th style={{ width: "15%" }} scope="col">Source</th>
                                          <th style={{ width: "10%" }} scope="col">%</th>
                                          <th style={{ width: "15%" }} scope="col">Earned</th>
                                        </tr>
                                      </thead>

                                      {(HistoricalBonusDetails.DeferredCommission.length > 0) ? (
                                        <tbody>
                                          <tr>
                                            <th colSpan="6">Bonus: Deferred Commission</th>
                                          </tr>
                                          {
                                            HistoricalBonusDetails.DeferredCommission.map(data => {
                                              return (
                                                <tr className="tdbg">
                                                  <td className="bluecolor">{data.FromCustomerID}</td>
                                                  <td>{data.FromCustomerName}</td>
                                                  <td>{data.PaidLevel}</td>
                                                  <td className="textalignr">${data.SourceAmount + ` ` + data.CurrencyCode}</td>
                                                  <td className="textalignr">{data.Percentage}%</td>
                                                  <td className="textalignr">${data.CommissionAmount + ` ` + data.CurrencyCode}</td>
                                                </tr>
                                              )
                                            })
                                          }
                                          <tr>
                                            <td colSpan="5"></td>
                                            <td><div className="totalb textalignr">Total:${this.calculateSum(HistoricalBonusDetails.DeferredCommission)}</div></td>
                                          </tr>
                                        </tbody>
                                      ) : null}

                                      {(HistoricalBonusDetails.SavvySeller.length > 0) ? (
                                        <tbody>
                                          <tr>
                                            <th colSpan="6">Bonus: Savvy Seller Bonus</th>
                                          </tr>
                                          {
                                            HistoricalBonusDetails.SavvySeller.map(data => {
                                              return (
                                                <tr className="tdbg">
                                                  <td className="bluecolor">{data.FromCustomerID}</td>
                                                  <td>{data.FromCustomerName}</td>
                                                  <td>{data.PaidLevel}</td>
                                                  <td className="textalignr">{data.SourceAmount}PV</td>
                                                  <td className="textalignr">{data.Percentage}%	</td>
                                                  <td className="textalignr">${data.CommissionAmount} USD</td>
                                                </tr>
                                              )
                                            })
                                          }
                                          <tr>
                                            <td colSpan="5"></td>
                                            <td><div className="totalb textalignr">Total:${this.calculateSum(HistoricalBonusDetails.SavvySeller)}</div></td>
                                          </tr>
                                        </tbody>
                                      ) : null}


                                      {(HistoricalBonusDetails.SponsorBonus.length > 0) ? (
                                        <tbody>
                                          <tr>
                                            <th colSpan="6">Bonus: Sponsoring Bonus</th>
                                          </tr>
                                          {
                                            HistoricalBonusDetails.SponsorBonus.map(data => {
                                              return (
                                                <tr className="tdbg">
                                                  <td className="bluecolor">{data.FromCustomerID}</td>
                                                  <td>{data.FromCustomerName}</td>
                                                  <td>{data.PaidLevel}</td>
                                                  <td className="textalignr">{data.SourceAmount}PV</td>
                                                  <td className="textalignr">{data.Percentage}%	</td>
                                                  <td className="textalignr">${data.CommissionAmount} USD</td>
                                                </tr>
                                              )
                                            })
                                          }
                                          <tr>
                                            <td colSpan="5"></td>
                                            <td><div className="totalb textalignr">Total:${this.calculateSum(HistoricalBonusDetails.SponsorBonus)}</div></td>
                                          </tr>
                                        </tbody>
                                      ) : null}


                                      {(HistoricalBonusDetails.CoachingBonus.length > 0) ? (
                                        <tbody>
                                          <tr>
                                            <th colSpan="6">Bonus: Coaching Bonus</th>
                                          </tr>
                                          {
                                            HistoricalBonusDetails.CoachingBonus.map(data => {
                                              return (
                                                <tr className="tdbg">
                                                  <td className="bluecolor">{data.FromCustomerID}</td>
                                                  <td>{data.FromCustomerName}</td>
                                                  <td>{data.PaidLevel}</td>
                                                  <td className="textalignr">{data.SourceAmount}PV</td>
                                                  <td className="textalignr">{data.Percentage}%	</td>
                                                  <td className="textalignr">${data.CommissionAmount} USD</td>
                                                </tr>
                                              )
                                            })
                                          }
                                          <tr>
                                            <td colSpan="5"></td>
                                            <td><div className="totalb textalignr">Total:${this.calculateSum(HistoricalBonusDetails.CoachingBonus)}</div></td>
                                          </tr>
                                        </tbody>
                                      ) : null}


                                      {(HistoricalBonusDetails.CouturierBonus.length > 0) ? (
                                        <tbody>
                                          <tr>
                                            <th colSpan="6">Bonus: Couturier Bonus</th>
                                          </tr>
                                          {
                                            HistoricalBonusDetails.CouturierBonus.map(data => {
                                              return (
                                                <tr className="tdbg">
                                                  <td className="bluecolor">{data.FromCustomerID}</td>
                                                  <td>{data.FromCustomerName}</td>
                                                  <td>{data.PaidLevel}</td>
                                                  <td className="textalignr">${data.SourceAmount} USD</td>
                                                  <td className="textalignr">{data.Percentage}%	</td>
                                                  <td className="textalignr">${data.CommissionAmount} USD</td>
                                                </tr>
                                              )
                                            })
                                          }
                                          <tr>
                                            <td colSpan="5"></td>
                                            <td><div className="totalb textalignr">Total:${this.calculateSum(HistoricalBonusDetails.CouturierBonus)}</div></td>
                                          </tr>
                                        </tbody>
                                      ) : null}
                                    </table>
                                  </div>
                                ) :
                                  (
                                    <div></div>
                                  )}
                              </div>
                            ) : (
                              <div>

                              </div>
                            )}
                        </div>
                      ) :
                        <div className="panel-body">
                          <center>
                            <ReactLoading type="bars" color="#000" height={50} width={50} />
                          </center>
                        </div>
                      }




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
                        <table className="table table-bordered tablemrb" style={{ overflowY: "scroll", height: "150px", display: "block" }}>
                          <thead >
                            <tr className="tdbg">
                              <th style={{ width: "20%" }} scope="col">From ID#</th>
                              <th style={{ width: "20%" }} scope="col">From</th>
                              <th style={{ width: "20%" }} scope="col">Paid Level</th>
                              <th style={{ width: "15%" }} scope="col">Source</th>
                              <th style={{ width: "10%" }} scope="col">%</th>
                              <th style={{ width: "15%" }} scope="col">Earned</th>
                            </tr>
                          </thead>
                          <tbody >
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
                    </div>
 */}

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
