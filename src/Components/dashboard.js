import React, { Component } from 'react';
import HomeHeaderscreen from './homeheader';
import PageFooter from './footer';
import '../styles/styles.css';

class DashboardScreen extends Component {
  render() {
    return (
      <div>
        <div className="col-sm-12">
          <HomeHeaderscreen />
        </div>
        <div className="container-fluid page_container">
          <div className="content">
            <div>
              <div className="col-sm-12">
                <div className="row padiingt10">
                  <div className="col-sm-6 col-md-4">
                    <div className="card card-default">
                      <div className="card-heading">
                        <h3 className="card-title">
                          Your Commissions
                    </h3>
                      </div>
                      <div className="card-body text-center-mobile">
                        <table className="table">
                          <tbody>
                            <tr>
                              <th>Period</th>
                              <th>Paid as Title</th>
                            </tr>
                            <tr>
                              <td>November 2019</td>
                              <td>Couturier</td>
                            </tr>
                            <tr>
                              <td>October 2019</td>
                              <td>Master Mentor</td>
                            </tr>
                            <tr>
                              <td>September 2019</td>
                              <td>Master Mentor</td>
                            </tr>
                            <tr>
                              <td>August 2019</td>
                              <td>Leading Mentor</td>
                            </tr>
                            <tr>
                              <td>July 2019</td>
                              <td>Master Mentor</td>
                            </tr>
                          </tbody></table>
                      </div>
                      <a href="/#/commissions" className="card-footer block text-right">
                        View current earnings <i className="fa fa-chevron-right" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <div className="card card-default">
                      <div className="card-heading">
                        <h3 className="card-title">
                          Your Inventory Orders
                    </h3>
                      </div>
                      <div className="card-body noborder no-padding">
                        <ul className="list-group">
                          <li className="list-group-item">
                            <a className="media block" href="/">
                              <div className="pull-left">
                                <i className="fa fa-shopping-cart carticon" aria-hidden="true"></i>
                              </div>
                              <div className="media-body">
                                <div className="row">
                                  <div className="col-xs-10">
                                    <h4 className="media-heading">Shipped</h4>
                                    <span className="text-muted">#876074</span>
                                  </div>
                                  <div className="col-xs-2">
                                    <div className="text-right pdt10">
                                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li className="list-group-item">
                            <a className="media block" href="/">
                              <div className="pull-left">
                                <i className="fa fa-shopping-cart carticon" aria-hidden="true"></i>
                              </div>
                              <div className="media-body">
                                <div className="row">
                                  <div className="col-xs-10">
                                    <h4 className="media-heading">Shipped</h4>
                                    <span className="text-muted">#874130</span>
                                  </div>
                                  <div className="col-xs-2">
                                    <div className="text-right pdt10">
                                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li className="list-group-item">
                            <a className="media block" href="/">
                              <div className="pull-left">
                                <i className="fa fa-shopping-cart carticon" aria-hidden="true"></i>
                              </div>
                              <div className="media-body">
                                <div className="row">
                                  <div className="col-xs-10">
                                    <h4 className="media-heading">Shipped</h4>
                                    <span className="text-muted">#873049</span>
                                  </div>
                                  <div className="col-xs-2">
                                    <div className="text-right pdt10">
                                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li className="list-group-item">
                            <a className="media block" href="/">
                              <div className="pull-left">
                                <i className="fa fa-shopping-cart carticon" aria-hidden="true"></i>
                              </div>
                              <div className="media-body">
                                <div className="row">
                                  <div className="col-xs-10">
                                    <h4 className="media-heading">Shipped</h4>
                                    <span className="text-muted">#873035</span>
                                  </div>
                                  <div className="col-xs-2">
                                    <div className="text-right pdt10">
                                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a href="/" className="card-footer block text-right">
                        View all orders <i className="fa fa-chevron-right" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="col-sm-12">
            <PageFooter />
          </div>
        </div>

      </div>
    )
  }
}

export default DashboardScreen;
