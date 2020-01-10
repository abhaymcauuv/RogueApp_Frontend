import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeHeaderscreen from '../homeheader';
import ReportLeftmenuscreen from '../reportleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';

class ClubCoutureScreen extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="row content">
            <div className="container">
              <div className="col-sm-12">
                <h2 className="h2hdr">Club Couture</h2>
                <div className="row">
                  <ReportLeftmenuscreen />
                  <div className="col-md-9">
                    <div class="checkbox cheboxpl">
                      <label>
                        <input type="checkbox" /> Include Cancelled/Paused Customers
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
                              <th scope="col">Customer Name</th>
                              <th scope="col">Email</th>
                              <th scope="col">Phone</th>
                              <th scope="col">Join Date</th>
                              <th scope="col">Status</th>
                              <th scope="col">Address</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="tdbg">
                              <td><Link to="/"><i class="far fa-address-book"></i></Link></td>
                              <td>17050</td>
                              <td className="textalignr">Aleshia Lindhardt</td>
                              <td className="textalignr"><a href="/yoofoo@.com">yoofoo@.com</a></td>
                              <td className="textalignr">1234</td>
                              <td className="textalignr">1/1/2020</td>
                              <td className="textalignr">Active</td>
                              <td className="textalignr">123 Homewood Dr</td>
                            </tr>
                            <tr>
                              <td><Link to="/"><i class="far fa-address-book"></i></Link></td>
                              <td>19893</td>
                              <td className="textalignr">Carley Schaefer</td>
                              <td className="textalignr"><a href="/yoofoo@.com">yoofoo@.com</a></td>
                              <td className="textalignr">1234</td>
                              <td className="textalignr">1/1/2020</td>
                              <td className="textalignr">Active</td>
                              <td className="textalignr">123 Yoofoo</td>
                            </tr>
                            <tr className="tdbg">
                              <td><Link to="/"><i class="far fa-address-book"></i></Link></td>
                              <td>17050</td>
                              <td className="textalignr">Aleshia Lindhardt</td>
                              <td className="textalignr"><a href="/yoofoo@.com">yoofoo@.com</a></td>
                              <td className="textalignr">1234</td>
                              <td className="textalignr">1/1/2020</td>
                              <td className="textalignr">Active</td>
                              <td className="textalignr">123 Homewood Dr</td>
                            </tr>
                            <tr>
                              <td><Link to="/"><i class="far fa-address-book"></i></Link></td>
                              <td>19893</td>
                              <td className="textalignr">Carley Schaefer</td>
                              <td className="textalignr"><a href="/yoofoo@.com">yoofoo@.com</a></td>
                              <td className="textalignr">1234</td>
                              <td className="textalignr">1/1/2020</td>
                              <td className="textalignr">Active</td>
                              <td className="textalignr">123 Yoofoo</td>
                            </tr>
                            <tr className="tdbg">
                              <td><Link to="/"><i class="far fa-address-book"></i></Link></td>
                              <td>17050</td>
                              <td className="textalignr">Aleshia Lindhardt</td>
                              <td className="textalignr"><a href="/yoofoo@.com">yoofoo@.com</a></td>
                              <td className="textalignr">1234</td>
                              <td className="textalignr">1/1/2020</td>
                              <td className="textalignr">Active</td>
                              <td className="textalignr">123 Homewood Dr</td>
                            </tr>
                            <tr>
                              <td><Link to="/"><i class="far fa-address-book"></i></Link></td>
                              <td>19893</td>
                              <td className="textalignr">Carley Schaefer</td>
                              <td className="textalignr"><a href="/yoofoo@.com">yoofoo@.com</a></td>
                              <td className="textalignr">1234</td>
                              <td className="textalignr">1/1/2020</td>
                              <td className="textalignr">Active</td>
                              <td className="textalignr">123 Yoofoo</td>
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

export default ClubCoutureScreen;
