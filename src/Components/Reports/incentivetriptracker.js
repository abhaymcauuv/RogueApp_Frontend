import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeHeaderscreen from '../homeheader';
import ReportLeftmenuscreen from '../reportleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';

class IncentiveTripTrackerScreen extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="row content">
            <div className="container">
              <div className="col-sm-12">
                <h2 className="h2hdr">Incentive Trip Tracker</h2>
                <div className="row">
                  <ReportLeftmenuscreen />
                  <div className="col-md-9">
                    <div>
                      <div class="well well-sm">
                        <div class="row">
                          <div class="col-sm-12">
                            <div class="input-group">
                              <span class="input-group-btn">
                                <button class="btn btn-default" type="button"><i class="fa fa-chevron-left"></i></button>
                              </span>
                              <select id="periods" class="form-control">
                                <option value="37">FIJI INCENTIVE TRIP 2020</option>
                                <option value="36">ENCORE CRUISE INCENTIVE TRIP 2019</option>
                              </select>
                              <span class="input-group-btn">
                                <button class="btn btn-default" type="button"><i class="fa fa-chevron-right"></i></button>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default panelmb25">
                      <div class="panel-body">
                        <h3>Summary</h3>
                        <div class="row">
                          <div class="col-sm-4">
                            <div class="metric metric-sm">
                              <div class="metric-body1 text-info">7327 / 30000</div>
                              <div class="metric-title">
                                <strong>Total Points</strong>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-8">
                            <div class="row">
                              <div class="col-sm-6">
                                <dl class="dl-metric">
                                  <dt>PV Points</dt>
                                  <dd>3427</dd>
                                  <dt>Sponsored Pending Points</dt>
                                  <dd>900</dd>
                                  <dt>Title Points</dt>
                                  <dd>3000</dd>
                                </dl>
                              </div>
                              <div class="col-sm-6">
                                <dl class="dl-metric">
                                  <dt>PSV Qualification</dt>
                                  <dd>2683 / 8000</dd>
                                  <dt>Airfare Earned</dt>
                                  <dd>0</dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <table className="table table-bordered tablemrb">
                          <thead>
                            <tr className="tdbg">
                              <th colSpan="7">Personal Points</th>
                            </tr>
                            <tr className="tdbg">
                              <th scope="col"></th>
                              <th scope="col">Period</th>
                              <th scope="col">PV Points</th>
                              <th scope="col">Paid as Title</th>
                              <th scope="col">Paid as Points</th>
                              <th scope="col">First-Time Title Promotion Points</th>
                              <th scope="col">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="tdbg">
                              <td><Link to="/"><i class="far fa-address-book"></i></Link></td>
                              <td>October 2019</td>
                              <td>1,230</td>
                              <td>Master Mentor</td>
                              <td>1,000</td>
                              <td>0</td>
                              <td>2,230</td>
                            </tr>
                            <tr>
                              <td><Link to="/"><i class="far fa-address-book"></i></Link></td>
                              <td>November 2019</td>
                              <td>1,549</td>
                              <td>Couturier</td>
                              <td>0</td>
                              <td>2,000</td>
                              <td>3,549</td>
                            </tr>
                            <tr className="tdbg">
                              <td><Link to="/"><i class="far fa-address-book"></i></Link></td>
                              <td>October 2019</td>
                              <td>1,230</td>
                              <td>Master Mentor</td>
                              <td>1,000</td>
                              <td>0</td>
                              <td>2,230</td>
                            </tr>
                            <tr>
                              <td><Link to="/"><i class="far fa-address-book"></i></Link></td>
                              <td>November 2019</td>
                              <td>1,549</td>
                              <td>Couturier</td>
                              <td>0</td>
                              <td>2,000</td>
                              <td>3,549</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <table className="table table-bordered tablemrb">
                      <thead>
                        <tr className="tdbg">
                          <th colSpan="7">Promotional Points</th>
                        </tr>
                        <tr className="tdbg">
                          <th scope="col"></th>
                          <th scope="col">Period</th>
                          <th scope="col">Description</th>
                          <th scope="col">PV</th>
                          <th scope="col">Required PV</th>
                          <th scope="col">Bonus Points</th>
                          <th scope="col">Points Earned</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="tdbg">
                          <td><Link to="/"><i class="far fa-address-book"></i></Link></td>
                          <td>October 2019</td>
                          <td>1,230</td>
                          <td>Master Mentor</td>
                          <td>1,000</td>
                          <td>0</td>
                          <td>2,230</td>
                        </tr>
                        <tr>
                          <td><Link to="/"><i class="far fa-address-book"></i></Link></td>
                          <td>November 2019</td>
                          <td>1,549</td>
                          <td>Couturier</td>
                          <td>0</td>
                          <td>2,000</td>
                          <td>3,549</td>
                        </tr>
                      </tbody>
                    </table>
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

export default IncentiveTripTrackerScreen;
