import React, { Component } from 'react';
import HomeHeaderscreen from '../homeheader';
import PageFooter from '../footer';
import axios from 'axios';
import '../../styles/styles.css';
import EndPoints from '../../Config/ApiEndpoints/endpoints';
import ReactLoading from "react-loading";
import 'rc-collapse/assets/index.css';
import Collapse, { Panel } from 'rc-collapse';
import constants from '../../Config/Constants/constants';

class CommissionsScreen extends Component {
  constructor() {
    super();
    this.handleSelectedChange = this.handleSelectedChange.bind(this);
    this.onExpandCommission = this.onExpandCommission.bind(this);
    this.state = {
      activeKey: [],
      CommissionPeriodList: [],
      IsLoadingPeriodList: true,
      IsLoadingCommission: false,
      IsHideBonusGrid: true,
      error: {},
      HistoricalSummaryCommission: {},
      HistoricalCommission: {},
      RealTimeCommission: {
        IsLoaded: false,
        Commission: []
      },

      DeferredCommission: {
        IsLoaded: false,
        Commission: []
      },

      SavvySeller: {
        IsLoaded: false,
        Commission: []
      },

      SponsorBonus: {
        IsLoaded: false,
        Commission: []
      },

      CoachingBonus: {
        IsLoaded: false,
        Commission: []
      },

      CouturierBonus: {
        IsLoaded: false,
        Commission: []
      },

      CommissionType: '',

      TeamSum: 0,
      UsdSum: 0,
      CadSum: 0,
      SavvySum: 0,
      Total: 0,

      PeriodID: 0,
      RunID: 0,
      PeriodTypeID: 1
    }
  }

  componentDidMount() {
    this.bindCommissionPeriods();
  }

  bindCommissionPeriods = async () => {
    let customerId = 967;
    let entPoint = EndPoints.CommissionPeriodList.Url.replace('{CustomerId}', customerId);
    axios({
      method: 'GET',
      url: EndPoints.BaseUrl + entPoint
    }).then(async (response) => {
      const result = await response.data.Items;
      await this.setState({
        CommissionPeriodList: result.CommissionPeriodList,
        IsLoadingPeriodList: false
      });
      if (result.CommissionPeriodList.length > 0) {
        let value = result.CommissionPeriodList[0].RunID + "-" + result.CommissionPeriodList[0].Period.PeriodID + "-" + result.CommissionPeriodList[0].Period.PeriodTypeID + "-" + result.CommissionPeriodList[0].CommissionType;
        this.handleSelectedChange(value);
      }
    }).catch(function (error) {
      this.setState({ error: error, IsLoadingPeriodList: false })
    });
  }

  handleSelectedChange = async (val) => {
    if (!val) {
      return;
    }
    let customerId = 967;
    var runId = Number(val.split('-')[0]);
    var periodId = Number(val.split('-')[1]);
    var periodTypeId = Number(val.split('-')[2]);
    var commissionType = val.split('-')[3];
    let isHideBonusGrid = true;
    if (commissionType == '1' || commissionType == '0') {
      isHideBonusGrid = false;
    }
    this.setState({
      selectedPeriod: val,
      HistoricalSummaryCommission: {},
      HistoricalCommission: {},
      IsLoadingCommission: true,
      PeriodID: periodId,
      PeriodTypeID: periodTypeId,
      RunID: runId,
      IsHideBonusGrid: isHideBonusGrid,
      DeferredCommission: { IsLoaded: false, Commission: [] },
      SavvySeller: { IsLoaded: false, Commission: [] },
      SponsorBonus: { IsLoaded: false, Commission: [] },
      CoachingBonus: { IsLoaded: false, Commission: [] },
      CouturierBonus: { IsLoaded: false, Commission: [] },
      activeKey: [],
      CommissionType: commissionType,
      RealTimeCommission: { IsLoaded: false, Commission: [] }
    });

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
        await this.setState({
          IsLoadingCommission: false,
          HistoricalSummaryCommission: result.HistoricalSummaryCommission,
          HistoricalCommission: result.HistoricalCommission,
          RealTimeCommission: { IsLoaded: (commissionType == '0' ? true : false), Commission: result.RealTimeCommission },
          UsdSum: !(JSON.stringify(result.HistoricalCommission.UsdSum) === JSON.stringify({})) ? result.HistoricalCommission.UsdSum : 0,
          CadSum: !(JSON.stringify(result.HistoricalCommission.CadSum) === JSON.stringify({})) ? result.HistoricalCommission.CadSum : 0,
          SavvySum: !(JSON.stringify(result.HistoricalCommission.SavvySum) === JSON.stringify({})) ? result.HistoricalCommission.SavvySum : 0,
          TeamSum: !(JSON.stringify(result.HistoricalCommission.TeamSum) === JSON.stringify({})) ? result.HistoricalCommission.TeamSum : 0,
        });
      }
      else {
        this.setState({ IsLoadingCommission: false });
      }
    }).catch(function (error) {
      console.log(error);
    });
  }

  onExpandCommission = async (activeKey) => {
    this.setState({ activeKey });
    const keys = this.state.activeKey;
    const openedKey = activeKey.filter(x => !keys.includes(x));
    if (openedKey.length == 0) {
      return;
    }
    let customerId = 967;
    let bonusId = Number(openedKey[0]);
    const { DeferredCommission, SavvySeller, SponsorBonus, CoachingBonus, CouturierBonus, CommissionType } = this.state;

    if (bonusId == constants.BonusTypes.DeferredCommission && DeferredCommission.IsLoaded) {
      return;
    }
    else if (bonusId == constants.BonusTypes.SavvySeller && SavvySeller.IsLoaded) {
      return;
    }
    else if (bonusId == constants.BonusTypes.SponsorBonus && SponsorBonus.IsLoaded) {
      return;
    }
    else if (bonusId == constants.BonusTypes.CoachingBonus && CoachingBonus.IsLoaded) {
      return;
    }
    else if (bonusId == constants.BonusTypes.CouturierBonus && CouturierBonus.IsLoaded) {
      return;
    }

    if (CommissionType == constants.CommissionTypes.HistoricalCommission) {
      const runId = this.state.RunID;
      axios({
        method: 'POST',
        url: EndPoints.BaseUrl + EndPoints.HistoricalBonus.Url,
        data: {
          CustomerID: customerId,
          CommissionRunID: runId,
          BonusID: bonusId,
          PageSize: 0,
          PageNo: 0
        }
      }).then(async (response) => {
        var result = await response.data.Items;
        switch (bonusId) {
          case 1:
            this.setState({ DeferredCommission: { IsLoaded: true, Commission: result.HistoricalBonusDetails } });
            break;
          case 4:
            this.setState({ SavvySeller: { IsLoaded: true, Commission: result.HistoricalBonusDetails } });
            break;
          case 5:
            this.setState({ SponsorBonus: { IsLoaded: true, Commission: result.HistoricalBonusDetails } });
            break;
          case 6:
            this.setState({ CoachingBonus: { IsLoaded: true, Commission: result.HistoricalBonusDetails } });
            break;
          case 7:
            this.setState({ CouturierBonus: { IsLoaded: true, Commission: result.HistoricalBonusDetails } });
            break;
        }
      }).catch(function (error) {
        console.log(error);
      });
    }
    else if (CommissionType == constants.CommissionTypes.CurrentCommission) {
      const periodId = this.state.PeriodID;
      const periodTypeId = this.state.PeriodTypeID;
      axios({
        method: 'POST',
        url: EndPoints.BaseUrl + EndPoints.RealTimeBonus.Url,
        data: {
          CustomerID: customerId,
          PeriodID: periodId,
          BonusID: bonusId,
          PeriodTypeID: periodTypeId
        }
      }).then(async (response) => {
        var result = await response.data.Items;
        switch (bonusId) {
          case 1:
            this.setState({ DeferredCommission: { IsLoaded: true, Commission: result.RealTimeBonusDetails } });
            break;
          case 4:
            this.setState({ SavvySeller: { IsLoaded: true, Commission: result.RealTimeBonusDetails } });
            break;
          case 5:
            this.setState({ SponsorBonus: { IsLoaded: true, Commission: result.RealTimeBonusDetails } });
            break;
          case 6:
            this.setState({ CoachingBonus: { IsLoaded: true, Commission: result.RealTimeBonusDetails } });
            break;
          case 7:
            this.setState({ CouturierBonus: { IsLoaded: true, Commission: result.RealTimeBonusDetails } });
            break;
        }
      }).catch(function (error) {
        console.log(error);
      });
    }
  }

  calculateSum(commission) {
    var total = commission.reduce(function (prev, cur) {
      return prev + Number(cur.CommissionAmount);
    }, 0);
    return total.toLocaleString(undefined, { maximumFractionDigits: 2 });
  }

  render() {
    const activeKey = this.state.activeKey;
    const { CommissionPeriodList, IsLoadingPeriodList,
      IsLoadingCommission,
      HistoricalSummaryCommission,
      HistoricalCommission,
      RealTimeCommission,
      TeamSum, UsdSum, CadSum, SavvySum,
      DeferredCommission,
      SavvySeller,
      SponsorBonus,
      CoachingBonus,
      CouturierBonus,
      IsHideBonusGrid
    } = this.state;

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

                              <select value={this.state.selectedPeriod} onChange={(e) => this.handleSelectedChange(e.target.value)} id="periodchoice" className="form-control">
                                {CommissionPeriodList.length > 0 ? (
                                  CommissionPeriodList.map((data, index) => {
                                    return (
                                      <option key={index} value={data.RunID + "-" + data.Period.PeriodID + "-" + data.Period.PeriodTypeID + "-" + data.CommissionType}> {"Current Commissions - " + data.Period.PeriodDescription} {"(" + data.Period.StartDate.split('T')[0] + " - " + data.Period.EndDate.split('T')[0] + ")"}</option>
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
                          ) :
                            <center>
                              <ReactLoading type="bars" color="#000" height={30} width={30} />
                            </center>
                          }
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
                              null
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
                                            <dd>{!HistoricalCommission.Volume ? 0 : HistoricalCommission.Volume.Volume2.toLocaleString(undefined, { maximumFractionDigits: 2 })}</dd>
                                            <dt>TV</dt>
                                            <dd>{!HistoricalCommission.Volume ? 0 : HistoricalCommission.Volume.Volume5.toLocaleString(undefined, { maximumFractionDigits: 2 })}</dd>
                                            <dt>EV</dt>
                                            <dd>{!HistoricalCommission.Volume ? 0 : HistoricalCommission.Volume.Volume6.toLocaleString(undefined, { maximumFractionDigits: 2 })}</dd>
                                          </dl>
                                        </div>
                                        <div className="col-sm-6">
                                          <dl className="dl-metric">
                                            <dt>PSQ</dt>
                                            <dd>{!HistoricalCommission.Volume ? 0 : HistoricalCommission.Volume.Volume7}</dd>
                                            <dt>Level 1 Mentors</dt>
                                            <dd>{!HistoricalCommission.Volume ? 0 : HistoricalCommission.Volume.Volume8}</dd>
                                            <dt>Master Mentor Legs</dt>
                                            <dd>{!HistoricalCommission.Volume ? 0 : HistoricalCommission.Volume.Volume9}</dd>
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
                              </div>
                            ) : (
                              null
                            )}

                          {(RealTimeCommission.Commission.length > 0) ? (
                            RealTimeCommission.Commission.map((data, index) => {
                              return (<div key={index}>
                                <div className="panel-body">
                                  <h4>{data.Period.PeriodDescription} Commissions</h4>
                                  <div className="row">
                                    <div className="col-sm-5">
                                      <div className="metric metric-sm">
                                        <dl className="dl-metric">
                                          {data.TeamSum > 0 ? <div><dt id="teamLabel"><strong>Team Commissions</strong></dt>
                                            <dd id="teamID" >${data.TeamSum.toLocaleString(undefined, { maximumFractionDigits: 2 })} USD</dd></div> : null}
                                          {data.UsdSum > 0 ? <div>   <dt id="usdLabel" ><strong>USD Deferred Commissions</strong></dt>
                                            <dd id="usdID" >${data.UsdSum.toLocaleString(undefined, { maximumFractionDigits: 2 })} USD</dd></div> : null}
                                          {data.CadSum > 0 ? <div><dt id="cadLabel" ><strong>CAD Deferred Commissions</strong></dt>
                                            <dd id="cadID" >${data.CadSum.toLocaleString(undefined, { maximumFractionDigits: 2 })} CAD</dd></div> : null}
                                          {data.SavvySum > 0 ? <div> <dt id="savvyLabel" ><strong>Savvy Seller Bonus Total</strong></dt>
                                            <dd id="savvyID" >${data.SavvySum.toLocaleString(undefined, { maximumFractionDigits: 2 })} USD</dd></div> : null}
                                        </dl>
                                      </div>
                                    </div>
                                    <div className="col-sm-6">
                                      <div className="row padiingt10">
                                        <div className="col-sm-6">
                                          <dl className="dl-metric">
                                            <dt>PV</dt>
                                            <dd>{!data.Volume ? 0 : data.Volume.Volume2.toLocaleString(undefined, { maximumFractionDigits: 2 })}</dd>
                                            <dt>TV</dt>
                                            <dd>{!data.Volume ? 0 : data.Volume.Volume5.toLocaleString(undefined, { maximumFractionDigits: 2 })}</dd>
                                            <dt>EV</dt>
                                            <dd>{!data.Volume ? 0 : data.Volume.Volume6.toLocaleString(undefined, { maximumFractionDigits: 2 })}</dd>
                                          </dl>
                                        </div>
                                        <div className="col-sm-6">
                                          <dl className="dl-metric">
                                            <dt>PSQ</dt>
                                            <dd>{!data.Volume ? 0 : data.Volume.Volume7}</dd>
                                            <dt>Level 1 Mentors</dt>
                                            <dd>{!data.Volume ? 0 : data.Volume.Volume8}</dd>
                                            <dt>Master Mentor Legs</dt>
                                            <dd>{!data.Volume ? 0 : data.Volume.Volume9}</dd>
                                          </dl>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-sm-8 h20">
                                      <div className="metric metric-sm">
                                        <div className="metric-title">
                                          Qualifying as: <strong>{!data.Volume ? ` ` : data.Volume.RankDescription[0]}</strong>
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
                              </div>)
                            })
                          ) : (RealTimeCommission.IsLoaded ?
                            <div className="panel-body">
                              <center>
                                You have not earned any commissions yet - check back soon!
                              </center>
                            </div>
                            : null)
                          }
                        </div>
                      ) :
                        <div className="panel-body">
                          <center>
                            <ReactLoading type="bars" color="#000" height={50} width={50} />
                          </center>
                        </div>
                      }

                      {!IsHideBonusGrid ? (
                        <div>
                          <Collapse
                            //accordion={true}
                            onChange={this.onExpandCommission}
                            activeKey={activeKey}
                          >
                            <Panel header={`Bonus: Deferred Commission`} key="1">
                              <Collapse defaultActiveKey="1">
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
                                  {DeferredCommission.Commission.length > 0 ? (
                                    <tbody>
                                      {
                                        DeferredCommission.Commission.map((data, index) => {
                                          return (
                                            <tr className="tdbg" key={index}>
                                              <td className="bluecolor">{data.FromCustomerID}</td>
                                              <td>{data.FromCustomerName}</td>
                                              <td>{data.PaidLevel}</td>
                                              <td className="textalignr">${Number(data.SourceAmount) + ` ` + data.CurrencyCode}</td>
                                              <td className="textalignr">{data.Percentage}%</td>
                                              <td className="textalignr">${Number(data.CommissionAmount) + ` ` + data.CurrencyCode}</td>
                                            </tr>
                                          )
                                        })
                                      }
                                      <tr>
                                        <td colSpan="5"></td>
                                        <td><div className="totalb textalignr">Total:${this.calculateSum(DeferredCommission.Commission)}</div></td>
                                      </tr>
                                    </tbody>
                                  ) :
                                    (!DeferredCommission.IsLoaded) ? (
                                      <tbody>
                                        <tr>
                                          <td colSpan="6">
                                            <center>
                                              <ReactLoading type="bars" color="#000" height={50} width={50} />
                                            </center>
                                          </td>
                                        </tr>
                                      </tbody>
                                    ) : (
                                        <tbody>
                                          <tr>
                                            <td colSpan="6">
                                              No records Found
                                        </td>
                                          </tr>
                                        </tbody>
                                      )
                                  }
                                </table>
                              </Collapse>
                            </Panel>

                            <Panel header={`Bonus: Savvy Seller Bonus`} key="4">
                              <Collapse defaultActiveKey="1">
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
                                  {SavvySeller.Commission.length > 0 ? (
                                    <tbody>
                                      {SavvySeller.Commission.map((data, index) => {
                                        return (
                                          <tr className="tdbg" key={index}>
                                            <td className="bluecolor">{data.FromCustomerID}</td>
                                            <td>{data.FromCustomerName}</td>
                                            <td>{data.PaidLevel}</td>
                                            <td className="textalignr">{Number(data.SourceAmount)}PV</td>
                                            <td className="textalignr">{data.Percentage}%	</td>
                                            <td className="textalignr">${Number(data.CommissionAmount)} USD</td>
                                          </tr>
                                        )
                                      })}
                                      <tr>
                                        <td colSpan="5"></td>
                                        <td><div className="totalb textalignr">Total:${this.calculateSum(SavvySeller.Commission)}</div></td>
                                      </tr>
                                    </tbody>
                                  ) :
                                    (!SavvySeller.IsLoaded) ? (
                                      <tbody>
                                        <tr>
                                          <td colSpan="6">
                                            <center>
                                              <ReactLoading type="bars" color="#000" height={50} width={50} />
                                            </center>
                                          </td>
                                        </tr>
                                      </tbody>
                                    ) : (
                                        <tbody>
                                          <tr>
                                            <td colSpan="6">
                                              No records Found
                                            </td>
                                          </tr>
                                        </tbody>)
                                  }
                                </table>
                              </Collapse>
                            </Panel>

                            <Panel header={`Bonus: Sponsoring Bonus`} key="5">
                              <Collapse defaultActiveKey="1">
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
                                  {SponsorBonus.Commission.length > 0 ? (
                                    <tbody>
                                      {
                                        SponsorBonus.Commission.map((data, index) => {
                                          return (
                                            <tr className="tdbg" key={index}>
                                              <td className="bluecolor">{data.FromCustomerID}</td>
                                              <td>{data.FromCustomerName}</td>
                                              <td>{data.PaidLevel}</td>
                                              <td className="textalignr">{Number(data.SourceAmount)}PV</td>
                                              <td className="textalignr">{data.Percentage}%	</td>
                                              <td className="textalignr">${Number(data.CommissionAmount)} USD</td>
                                            </tr>
                                          )
                                        })
                                      }
                                      <tr>
                                        <td colSpan="5"></td>
                                        <td><div className="totalb textalignr">Total:${this.calculateSum(SponsorBonus.Commission)}</div></td>
                                      </tr>
                                    </tbody>
                                  ) :
                                    (!SponsorBonus.IsLoaded) ? (
                                      <tbody>
                                        <tr>
                                          <td colSpan="6">
                                            <center>
                                              <ReactLoading type="bars" color="#000" height={50} width={50} />
                                            </center>
                                          </td>
                                        </tr>
                                      </tbody>
                                    ) : (
                                        <tbody>
                                          <tr>
                                            <td colSpan="6">
                                              No records Found
                                         </td>
                                          </tr>
                                        </tbody>
                                      )
                                  }
                                </table>
                              </Collapse>
                            </Panel>

                            <Panel header={`Bonus: Coaching Bonus`} key="6">
                              <Collapse defaultActiveKey="1">
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
                                  {CoachingBonus.Commission.length > 0 ? (
                                    <tbody>
                                      {
                                        CoachingBonus.Commission.map((data, index) => {
                                          return (
                                            <tr className="tdbg" key={index}>
                                              <td className="bluecolor">{data.FromCustomerID}</td>
                                              <td>{data.FromCustomerName}</td>
                                              <td>{data.PaidLevel}</td>
                                              <td className="textalignr">{Number(data.SourceAmount)}PV</td>
                                              <td className="textalignr">{data.Percentage}%	</td>
                                              <td className="textalignr">${Number(data.CommissionAmount)} USD</td>
                                            </tr>
                                          )
                                        })
                                      }
                                      <tr>
                                        <td colSpan="5"></td>
                                        <td><div className="totalb textalignr">Total:${this.calculateSum(CoachingBonus.Commission)}</div></td>
                                      </tr>
                                    </tbody>
                                  ) :
                                    (!CoachingBonus.IsLoaded) ? (
                                      <tbody>
                                        <tr>
                                          <td colSpan="6">
                                            <center>
                                              <ReactLoading type="bars" color="#000" height={50} width={50} />
                                            </center>
                                          </td>
                                        </tr>
                                      </tbody>
                                    ) : (
                                        <tbody>
                                          <tr>
                                            <td colSpan="6">
                                              No records Found
                                            </td>
                                          </tr>
                                        </tbody>
                                      )
                                  }
                                </table>
                              </Collapse>
                            </Panel>

                            <Panel header={`Bonus: Couturier Bonus`} key="7">
                              <Collapse defaultActiveKey="1">
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
                                  {CouturierBonus.Commission.length > 0 ? (
                                    <tbody>
                                      {
                                        CouturierBonus.Commission.map((data, index) => {
                                          return (
                                            <tr className="tdbg" key={index}>
                                              <td className="bluecolor">{data.FromCustomerID}</td>
                                              <td>{data.FromCustomerName}</td>
                                              <td>{data.PaidLevel}</td>
                                              <td className="textalignr">${Number(data.SourceAmount)} USD</td>
                                              <td className="textalignr">{data.Percentage}%	</td>
                                              <td className="textalignr">${Number(data.CommissionAmount)} USD</td>
                                            </tr>
                                          )
                                        })
                                      }
                                      <tr>
                                        <td colSpan="5"></td>
                                        <td><div className="totalb textalignr">Total:${this.calculateSum(CouturierBonus.Commission)}</div></td>
                                      </tr>
                                    </tbody>
                                  ) :
                                    (!CouturierBonus.IsLoaded) ? (
                                      <tbody>
                                        <tr>
                                          <td colSpan="6">
                                            <center>
                                              <ReactLoading type="bars" color="#000" height={50} width={50} />
                                            </center>
                                          </td>
                                        </tr>
                                      </tbody>
                                    ) : (
                                        <tbody>
                                          <tr>
                                            <td colSpan="6">
                                              No records Found
                                            </td>
                                          </tr>
                                        </tbody>
                                      )
                                  }
                                </table>
                              </Collapse>
                            </Panel>

                          </Collapse>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <PageFooter />
        </div >

      </div >
    )
  }
}

export default CommissionsScreen;
