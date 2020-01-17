import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeHeaderscreen from '../homeheader';
import ReportLeftmenuscreen from '../reportleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';

class TitlePromotionsScreen extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="row content">
            <div className="container">
              <div className="col-sm-12">
                <h2 className="h2hdr">First Time Title Promotions</h2>
                <div className="row">
                  <ReportLeftmenuscreen />
                  <div className="col-md-9">
                    <div className="panel panel-default panelmb50">
                      <div>
                        <table className="table table-bordered tablemrb">
                          <thead>
                            <tr>
                              <th colSpan="10" className="textalignr tdbg">
                                <button type="button" class="k-grid-excel btn btn-primary hidden-print"><i class="fa fa-download"></i> Excel</button>
                              </th>
                            </tr>
                            <tr className="tdbg">
                              <th scope="col"></th>
                              <th scope="col">ID</th>
                              <th scope="col">First Name</th>
                              <th scope="col">Last Name</th>
                              <th scope="col">First Time Title Promotion</th>
                              <th scope="col">Period</th>
                              <th scope="col">Advisor Name</th>
                              <th scope="col">Advisor ID</th>
                              <th scope="col">Level</th>
                              <th scope="col">Join Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="tdbg">
                              <td><Link to="/"><i class="far fa-address-book"></i></Link></td>
                              <td>14113</td>
                              <td className="textalignr">Lindzi</td>
                              <td className="textalignr">Fitzwater</td>
                              <td className="textalignr">Couturier</td>
                              <td className="textalignr">Nov 2019</td>
                              <td className="textalignr">Christie Millett</td>
                              <td className="textalignr">240</td>
                              <td className="textalignr">0</td>
                              <td className="textalignr">3/16/2018</td>
                            </tr>
                            <tr>
                              <td><Link to="/"><i class="far fa-address-book"></i></Link></td>
                              <td>14113</td>
                              <td className="textalignr">Lindzi</td>
                              <td className="textalignr">Fitzwater</td>
                              <td className="textalignr">Master Mentor</td>
                              <td className="textalignr">Oct 2018</td>
                              <td className="textalignr">Christie Millett</td>
                              <td className="textalignr">240</td>
                              <td className="textalignr">0</td>
                              <td className="textalignr">3/16/2018</td>
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

export default TitlePromotionsScreen;
