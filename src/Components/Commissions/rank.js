import React, { Component } from 'react';
import HomeHeaderscreen from '../homeheader';
import PageFooter from '../footer';
import '../../styles/styles.css';

class RankScreen extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="row content">
            <div className="container">
              <div className="col-sm-12">
                <h2 className="h2hdr">Rank</h2>
                <div className="row">
                  <div className="col-sm-3">

                    <nav className="view-navigation">
                      <div className="panel-group">
                        <div className="panel panel-default no-border">
                          <div className="panel-heading">
                            <div className="panel-title">
                              <a href="/#/commissions">
                                Commissions
                                </a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default no-border">
                          <div className="panel-heading active">
                            <div className="panel-title">
                              <a href="/#/rank" className="active">
                                Rank Advancement
                                </a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default no-border">
                          <div className="panel-heading ">
                            <div className="panel-title">
                              <a href="/#/volumes">
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
                        <div className="col-sm-6">
                          <div className="input-group">
                            <span className="input-group-btn">
                              <button className="btn btn-default" type="button"><i className="fa fa-angle-left" aria-hidden="true"></i></button>
                            </span>
                            <select id="rankchoice" class="form-control">
                              <option value="0">No Rank</option>
                              <option value="1">Designer</option>
                              <option value="10" selected="">Qualified Designer</option>
                              <option value="20">Leading Designer</option>
                              <option value="30">Master Designer</option>
                              <option value="40">Mentor</option>
                              <option value="50">Leading Mentor</option>
                              <option value="60">Master Mentor</option>
                              <option value="70">Couturier</option>
                              <option value="80">Executive Couturier</option>
                              <option value="90">Master Couturier</option>
                            </select>
                            <span className="input-group-btn">
                              <button className="btn btn-default" type="button"><i className="fa fa-angle-right" aria-hidden="true"></i></button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default panelmb25">
                      <div class="panel panel-default">
                        <div class="panel-body">
                          <h3>Leading Designer</h3>
                          <div class="row">
                            <div class="col-sm-12">
                              <div class="metric metric-sm">
                                <div class="metric-body text-info">90%</div>
                                <div class="metric-title">
                                  Complete
                             </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                      </div>
                    </div>
                    <div>
                      <div class="panel panel-default">
                        <div class="panel-heading panelhdr">
                          <h4 class="panel-title">Qualification Requirements</h4>
                        </div>
                        <div class="list-group">
                          <div class="list-group-item">
                            <div class="media">
                              <div class="media-object pull-left fa fa-check fafonts15 text-success"></div>
                              <div class="media-body">
                                You must be a Designer.
                             </div>
                            </div>
                          </div>
                          <div class="list-group-item">
                            <div class="media">
                              <div class="media-object pull-left fa fa-check fafonts15 text-success"></div>
                              <div class="media-body">
                                Your account must be in good standing.
                            </div>
                            </div>
                          </div>
                          <div class="list-group-item">
                            <div class="media">
                              <div class="media-object pull-left fa fa-times fafonts15 text-danger"></div>
                              <div class="media-body">
                                You need at least 200 Personal Volume (PV).

                            <div class="space-10"></div>
                                <div class="progress progress-sm no-margin">
                                  <div class="progress-bar progress-bar-info barwd" role="progressbar" aria-valuenow="53.9600" aria-valuemin="0" aria-valuemax="100">
                                    <span class="sr-only">53.9600% Complete</span>
                                  </div>
                                </div>
                                <small class="text-muted">108 of 200</small>
                              </div>
                            </div>
                          </div>
                          <div class="list-group-item">
                            <div class="media">
                              <div class="media-object pull-left fa fa-check fafonts15 text-success"></div>
                              <div class="media-body">
                                You need at least 1 Personally Sponsored Qualifieds (PSQ).
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

export default RankScreen;
