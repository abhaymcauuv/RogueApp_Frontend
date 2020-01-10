import React, { Component } from 'react';
import HomeHeaderscreen from './homeheader';
import PageFooter from './footer';
import '../styles/styles.css';

class DashboardScreen extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="row content">
            <div className="container">
              <div className="col-sm-12">

                <div className="row padiingt10">
                  <div class="col-sm-6 col-md-4">
                    <div class="card card-default">
                      <div class="card-heading">
                        <h3 class="card-title">
                          Your Commissions
                    </h3>
                      </div>
                      <div class="card-body text-center-mobile">
                        <table class="table">
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
                      <a href="/#/commissions" class="card-footer block text-right">
                        View current earnings <i class="fa fa-chevron-right" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-4">
                    <div class="card card-default">
                      <div class="card-heading">
                        <h3 class="card-title borderbtm">
                          Your Inventory Orders
                    </h3>
                      </div>
                      <div class="card-body noborder no-padding">
                        <ul class="list-group">
                          <li class="list-group-item">
                            <a class="media block" href="/">
                              <div class="pull-left">
                                <i class="fa fa-shopping-cart carticon" aria-hidden="true"></i>
                              </div>
                              <div class="media-body">
                                <div class="row">
                                  <div class="col-xs-10">
                                    <h4 class="media-heading">Shipped</h4>
                                    <span class="text-muted">#876074</span>
                                  </div>
                                  <div class="col-xs-2">
                                    <div class="text-right">
                                      <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li class="list-group-item">
                            <a class="media block" href="/">
                              <div class="pull-left">
                                <i class="fa fa-shopping-cart carticon" aria-hidden="true"></i>
                              </div>
                              <div class="media-body">
                                <div class="row">
                                  <div class="col-xs-10">
                                    <h4 class="media-heading">Shipped</h4>
                                    <span class="text-muted">#874130</span>
                                  </div>
                                  <div class="col-xs-2">
                                    <div class="text-right">
                                      <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li class="list-group-item">
                            <a class="media block" href="/">
                              <div class="pull-left">
                                <i class="fa fa-shopping-cart carticon" aria-hidden="true"></i>
                              </div>
                              <div class="media-body">
                                <div class="row">
                                  <div class="col-xs-10">
                                    <h4 class="media-heading">Shipped</h4>
                                    <span class="text-muted">#873049</span>
                                  </div>
                                  <div class="col-xs-2">
                                    <div class="text-right">
                                      <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li class="list-group-item">
                            <a class="media block" href="/">
                              <div class="pull-left">
                                <i class="fa fa-shopping-cart carticon" aria-hidden="true"></i>
                              </div>
                              <div class="media-body">
                                <div class="row">
                                  <div class="col-xs-10">
                                    <h4 class="media-heading">Shipped</h4>
                                    <span class="text-muted">#873035</span>
                                  </div>
                                  <div class="col-xs-2">
                                    <div class="text-right">
                                      <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a href="/orders" class="card-footer block text-right">
                        View all orders <i class="fa fa-chevron-right" aria-hidden="true"></i>
                      </a>
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

export default DashboardScreen;
