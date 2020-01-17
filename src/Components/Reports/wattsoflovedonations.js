import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeHeaderscreen from '../homeheader';
import ReportLeftmenuscreen from '../reportleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';

class WattsofLoveDonationsScreen extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="row content">
            <div className="container">
              <div className="col-sm-12">
                <h2 className="h2hdr">Watts of Love Donations</h2>
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
                    <div className="panel panel-default panelmb50">
                      <div className="panel-body">
                        <h4>Total Monthly Donations</h4>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="metric metric-sm">
                              <span className="metric-body text-info">$3.30</span>
                              <span>USD</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <table className="table table-bordered tablemrb">
                          <thead>
                            <tr className="tdbg">
                              <th scope="col"></th>
                              <th scope="col">Order Date</th>
                              <th scope="col">Order Number</th>
                              <th scope="col">Dollar Amount</th>
                              <th scope="col">Customer Name</th>
                              <th scope="col">ID</th>                             
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="tdbg">
                              <td><Link to="/"><i className="far fa-address-book"></i></Link></td>                             
                              <td>1/14/2020</td>
                              <td>884804</td>
                              <td>0.84 USD</td>
                              <td>Linda Picker</td> 
                              <td>89712</td>                             
                            </tr>
                            <tr>
                              <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                              <td>1/16/2020</td>
                              <td>887686</td>
                              <td>0.13 USD</td>
                              <td>Lindzi Fitzwater</td>
                              <td>14113</td>                              
                            </tr>
                            <tr className="tdbg">
                              <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                              <td>1/1/2020</td>
                              <td>863695</td>
                              <td>0.76 USD</td>
                              <td>Lindzi Fitzwater</td>
                              <td>14113</td>                             
                            </tr>
                            <tr>
                              <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                              <td>1/7/2020</td>
                              <td>876074</td>
                              <td>0.72 USD</td>
                              <td>Lindzi Fitzwater</td>
                              <td>14113</td>                              
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

export default WattsofLoveDonationsScreen;
