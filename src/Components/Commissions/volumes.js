import React, { Component } from 'react';
import HomeHeaderscreen from '../homeheader';
import PageFooter from '../footer';
import '../../styles/styles.css';

class VolumesScreen extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="row content">
            <div className="container">
              <div className="col-sm-12">
                <h2 className="h2hdr">Volumes</h2>
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
                          <div className="panel-heading ">
                            <div className="panel-title">
                              <a href="/#/rank">
                                Rank Advancement
                                </a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default no-border">
                          <div className="panel-heading active">
                            <div className="panel-title">
                              <a href="/#/volumes" className="active">
                                Volumes
                                </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div className="col-md-9">
                    <div className="panel panel-default panelmb50">
                      <div>
                        <table className="table table-bordered tablemrb">
                          <thead>
                            <tr>
                              <th colSpan="6" className="textalignr tdbg">
                                <button type="button" class="k-grid-excel btn btn-primary hidden-print"><i class="fa fa-download"></i> Excel</button>
                              </th>
                            </tr>
                            <tr className="tdbg">
                              <th scope="col">Period</th>
                              <th scope="col">Paid as Title</th>
                              <th scope="col">PV</th>
                              <th scope="col">TV</th>
                              <th scope="col">Level 1 Mentor</th>
                              <th scope="col">PSQ</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="tdbg">
                              <td>January 2020</td>
                              <td>Master Mentor</td>
                              <td className="textalignr">523.85</td>
                              <td className="textalignr">10,586.36</td>
                              <td className="textalignr">2</td>
                              <td className="textalignr">8</td>
                            </tr>
                            <tr>
                              <td>November 2019</td>
                              <td>Couturier</td>
                              <td className="textalignr">1,549.63</td>
                              <td className="textalignr">22,690.73</td>
                              <td className="textalignr">2</td>
                              <td className="textalignr">10</td>
                            </tr>
                            <tr className="tdbg">
                              <td>January 2020</td>
                              <td>Master Mentor</td>
                              <td className="textalignr">523.85</td>
                              <td className="textalignr">10,586.36</td>
                              <td className="textalignr">2</td>
                              <td className="textalignr">8</td>
                            </tr>
                            <tr>
                              <td>November 2019</td>
                              <td>Couturier</td>
                              <td className="textalignr">1,549.63</td>
                              <td className="textalignr">22,690.73</td>
                              <td className="textalignr">2</td>
                              <td className="textalignr">10</td>
                            </tr>
                            <tr className="tdbg">
                              <td>January 2020</td>
                              <td>Master Mentor</td>
                              <td className="textalignr">523.85</td>
                              <td className="textalignr">10,586.36</td>
                              <td className="textalignr">2</td>
                              <td className="textalignr">8</td>
                            </tr>
                            <tr>
                              <td>November 2019</td>
                              <td>Couturier</td>
                              <td className="textalignr">1,549.63</td>
                              <td className="textalignr">22,690.73</td>
                              <td className="textalignr">2</td>
                              <td className="textalignr">10</td>
                            </tr>
                            <tr className="tdbg">
                              <td>January 2020</td>
                              <td>Master Mentor</td>
                              <td className="textalignr">523.85</td>
                              <td className="textalignr">10,586.36</td>
                              <td className="textalignr">2</td>
                              <td className="textalignr">8</td>
                            </tr>
                            <tr>
                              <td>November 2019</td>
                              <td>Couturier</td>
                              <td className="textalignr">1,549.63</td>
                              <td className="textalignr">22,690.73</td>
                              <td className="textalignr">2</td>
                              <td className="textalignr">10</td>
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

export default VolumesScreen;
