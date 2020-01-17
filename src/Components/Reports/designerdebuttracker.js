import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeHeaderscreen from '../homeheader';
import ReportLeftmenuscreen from '../reportleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';

class DesignerDebutTrackerScreen extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="row content">
            <div className="container">
              <div className="col-sm-12">
                <h2 className="h2hdr">Designer Debut Team Tracker</h2>
                <div className="row">
                  <ReportLeftmenuscreen />
                  <div className="col-md-9">
                  <div class="well-sm">
                      <button type="button" id="btnActive" class="btn btn-primary hidden-print">PARTICIPATING</button>
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
                              <th scope="col">Name</th>
                              <th scope="col">Status</th>
                              <th scope="col">Join Date</th>
                              <th scope="col">Level</th>
                              <th scope="col">Current Phase</th>
                              <th scope="col">Current PV</th>
                              <th scope="col">Bonus Reward</th>
                              <th scope="col">Current Phase % Complete</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="tdbg">
                              <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                              <td>99133</td>
                              <td>Kimberly Vanneste</td>
                              <td>Active</td>
                              <td>10/12/2019</td>
                              <td>3</td>
                              <td>3</td>
                              <td>0 PV	</td>
                              <td>476.82 PV	</td>
                              <td>0 %</td>
                            </tr>
                            <tr>
                              <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                              <td>99072</td>
                              <td>Robyn Hansen</td>
                              <td>Active</td>
                              <td>10/12/2019</td>
                              <td>3</td>
                              <td>3</td>
                              <td>213.4 PV	</td>
                              <td>1321.32 PV</td>
                              <td>21 %</td>
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

export default DesignerDebutTrackerScreen;
