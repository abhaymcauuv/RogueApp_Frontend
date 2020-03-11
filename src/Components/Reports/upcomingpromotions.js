import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeHeaderscreen from '../homeheader';
import ReportLeftmenuscreen from '../reportleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';

class UpcomingPromotionsScreen extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="content">
            <div className="">
              <div className="col-sm-12">
                <h2 className="h2hdr">Upcoming Promotions</h2>
                <div className="row pl10">
                <div className="col-md-2">
                    <ReportLeftmenuscreen />
                  </div>
                  <div className="col-md-10">
                    <div className="panel panel-default panelmb50">
                      <div>
                        <table className="table table-bordered tablemrb">
                          <thead>
                            <tr>
                              <th colSpan="6" className="textalignr tdbg">
                                <button type="button" className="k-grid-excel btn btn-primary hidden-print"><i className="fa fa-download"></i> Excel</button>
                              </th>
                            </tr>
                            <tr className="tdbg">
                              <th scope="col"></th>
                              <th scope="col">ID</th>
                              <th scope="col">First Name</th>
                              <th scope="col">Last Name</th>
                              <th scope="col">Next Title</th>
                              <th scope="col">% Complete</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="tdbg">
                              <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                              <td>17050</td>
                              <td className="textalignr">Lindzi</td>
                              <td className="textalignr">Fitzwater</td>
                              <td className="textalignr">Leading Designer</td>
                              <td className="textalignr">90%</td>
                            </tr>
                            <tr>
                              <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                              <td>19893</td>
                              <td className="textalignr">McKenzie</td>
                              <td className="textalignr">Mitchell</td>
                              <td className="textalignr">Leading Designer</td>
                              <td className="textalignr">99%</td>
                            </tr>
                            <tr className="tdbg">
                              <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                              <td>17050</td>
                              <td className="textalignr">Lindzi</td>
                              <td className="textalignr">Fitzwater</td>
                              <td className="textalignr">Leading Designer</td>
                              <td className="textalignr">90%</td>
                            </tr>
                            <tr>
                              <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                              <td>19893</td>
                              <td className="textalignr">McKenzie</td>
                              <td className="textalignr">Mitchell</td>
                              <td className="textalignr">Leading Designer</td>
                              <td className="textalignr">99%</td>
                            </tr>
                            <tr className="tdbg">
                              <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                              <td>17050</td>
                              <td className="textalignr">Lindzi</td>
                              <td className="textalignr">Fitzwater</td>
                              <td className="textalignr">Leading Designer</td>
                              <td className="textalignr">90%</td>
                            </tr>
                            <tr>
                              <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                              <td>19893</td>
                              <td className="textalignr">McKenzie</td>
                              <td className="textalignr">Mitchell</td>
                              <td className="textalignr">Leading Designer</td>
                              <td className="textalignr">99%</td>
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

export default UpcomingPromotionsScreen;
