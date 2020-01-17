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
                      <div className="well well-sm">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="input-group">
                              <span className="input-group-btn">
                                <button className="btn btn-default" type="button"><i className="fa fa-chevron-left"></i></button>
                              </span>
                              <select id="periods" className="form-control">
                                <option value="37">Monthly 37 January 2020</option>
                                <option value="36">Monthly 36 December 2019</option>
                                <option value="35">Monthly 35 November 2019</option>
                                <option value="34">Monthly 34 October 2019</option>
                                <option value="33">Monthly 33 September 2019</option>
                                <option value="32">Monthly 32 August 2019</option>
                                <option value="31">Monthly 31 July 2019</option>
                                <option value="30">Monthly 30 June 2019</option>
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
                        <input type="checkbox" />  Include Closed Accounts
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
                              <th scope="col">Level 1 Mentor</th>
                              <th scope="col">Advisor</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="tdbg">
                              <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                              <td>17050</td>
                              <td className="">Aleshia Lindhardt</td>
                              <td className="textalignr">3</td>
                              <td className="">Designer</td>
                              <td className="textalignr">0</td>
                              <td className="textalignr">0</td>
                              <td className="textalignr">0</td>
                              <td className="textalignr">0</td>
                              <td className="">Lindzi Fitzwater</td>
                            </tr>
                            <tr>
                              <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                              <td>19893</td>
                              <td className="">Carley Schaefer</td>
                              <td className="textalignr">3</td>
                              <td className="">Qualified Designer</td>
                              <td className="textalignr">231.26</td>
                              <td className="textalignr">231.26</td>
                              <td className="textalignr">0</td>
                              <td className="textalignr">0</td>
                              <td className="">Lindsay Setterfield</td>
                            </tr>
                            <tr className="tdbg">
                              <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                              <td>17050</td>
                              <td className="">Aleshia Lindhardt</td>
                              <td className="textalignr">3</td>
                              <td className="">Designer</td>
                              <td className="textalignr">0</td>
                              <td className="textalignr">0</td>
                              <td className="textalignr">0</td>
                              <td className="textalignr">0</td>
                              <td className="">Rebecca Zblewski</td>
                            </tr>
                            <tr>
                              <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                              <td>19893</td>
                              <td className="">Carley Schaefer</td>
                              <td className="textalignr">3</td>
                              <td className="">Qualified Designer</td>
                              <td className="textalignr">231.26</td>
                              <td className="textalignr">231.26</td>
                              <td className="textalignr">0</td>
                              <td className="textalignr">0</td>
                              <td className="">Lindzi Fitzwater</td>
                            </tr>

                          </tbody>
                        </table>
                        <div className="row">
                          <div className="col-sm-9">
                            <nav aria-label="Page navigation example">
                              <ul className="pagination">
                                <li className="page-item">
                                  <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                  </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                  <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                          <div className="col-sm-3 paddingt10">
                            <span className="k-pager-info k-label">1 - 23 of 23 items</span>
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
