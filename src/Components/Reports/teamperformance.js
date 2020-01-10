import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeHeaderscreen from '../homeheader';
import ReportLeftmenuscreen from '../reportleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';

class TeamPerformanceScreen extends Component {
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
                      <div class="well well-sm">
                        <div class="row">
                          <div class="col-sm-12">
                            <div class="input-group">
                              <span class="input-group-btn">
                                <button class="btn btn-default" type="button"><i class="fa fa-chevron-left"></i></button>
                              </span>
                              <select id="periods" class="form-control">
                                <option value="37">Monthly 37 January 2020</option>
                                <option value="36">Monthly 36 December 2019</option>
                                <option value="35">Monthly 35 November 2019</option>
                                <option value="34">Monthly 34 October 2019</option>
                                <option value="33">Monthly 33 September 2019</option>
                                <option value="32">Monthly 32 August 2019</option>
                                <option value="31">Monthly 31 July 2019</option>
                                <option value="30">Monthly 30 June 2019</option>
                              </select>
                              <span class="input-group-btn">
                                <button class="btn btn-default" type="button"><i class="fa fa-chevron-right"></i></button>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="checkbox cheboxpl">
                      <label>
                        <input type="checkbox" />  Include Closed Accounts
                          </label>
                    </div>
                    <div className="panel panel-default panelmb50">
                      <div>
                        <table className="table table-bordered tablemrb">
                          <thead>
                            <tr>
                              <th colSpan="8" className="textalignr tdbg">
                                <button type="button" class="k-grid-excel btn btn-primary hidden-print"><i class="fa fa-download"></i> Excel</button>
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
                            <tr className="tdbg">
                              <td><Link to="/"><i class="far fa-address-book"></i></Link></td>
                              <td>17050</td>
                              <td className="">Aleshia Lindhardt</td>
                              <td className="textalignr">3</td>
                              <td className="">Designer</td>
                              <td className="textalignr">0</td>
                              <td className="textalignr">0</td>
                              <td className="textalignr">0</td>
                            </tr>
                            <tr>
                              <td><Link to="/"><i class="far fa-address-book"></i></Link></td>
                              <td>19893</td>
                              <td className="">Carley Schaefer</td>
                              <td className="textalignr">3</td>
                              <td className="">Qualified Designer</td>
                              <td className="textalignr">231.26</td>
                              <td className="textalignr">231.26</td>
                              <td className="textalignr">0</td>
                            </tr>
                            <tr className="tdbg">
                              <td><Link to="/"><i class="far fa-address-book"></i></Link></td>
                              <td>17050</td>
                              <td className="">Aleshia Lindhardt</td>
                              <td className="textalignr">3</td>
                              <td className="">Designer</td>
                              <td className="textalignr">0</td>
                              <td className="textalignr">0</td>
                              <td className="textalignr">0</td>
                            </tr>
                            <tr>
                              <td><Link to="/"><i class="far fa-address-book"></i></Link></td>
                              <td>19893</td>
                              <td className="">Carley Schaefer</td>
                              <td className="textalignr">3</td>
                              <td className="">Qualified Designer</td>
                              <td className="textalignr">231.26</td>
                              <td className="textalignr">231.26</td>
                              <td className="textalignr">0</td>
                            </tr>

                          </tbody>
                        </table>
                        <div className="row">
                          <div className="col-sm-9">
                            <nav aria-label="Page navigation example">
                              <ul class="pagination">
                                <li class="page-item">
                                  <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span class="sr-only">Previous</span>
                                  </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                  <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span class="sr-only">Next</span>
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                          <div className="col-sm-3 paddingt10">
                            <span class="k-pager-info k-label">1 - 23 of 23 items</span>
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
