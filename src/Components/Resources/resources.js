import React, { Component } from 'react';
import HomeHeaderscreen from '../homeheader';
import YoofooLeftmenuscreen from '../yoofooleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';

class ResourcesScreen extends Component {
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
                <div className="row">
                  <div className="col-sm-3">
                    <h2 className="h2hdr">Resources</h2>
                  </div>
                  <div className="col-sm-9"></div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div>
                      <div className="row company_hdr">

                        <div className="col-sm-2 viewbox">

                          <div className="subhdr_res">View Resources For:</div>
                          <div>
                            <select class="form-control" name="Country"><option selected="selected" value="US">United States</option>
                              <option value="CA">Canada</option>
                            </select>
                          </div>
                          <div className="subhdr_res gridmrtop">Language:</div>
                          <div>
                            <select class="form-control" name="Language"><option value="">All</option>
                              <option value="English">English</option>
                            </select>
                          </div>

                          <div className="subhdr_res gridmrtop">Find By Keyword</div>
                          <div className="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                              <section class="input-group">
                                <input class="form-control" placeholder="Search" type="text" value=""></input>
                                <span class="input-group-btn">
                                  <button class="btn btn-default" type="submit"><i class="fa fa-search"></i></button>
                                </span>
                              </section>                             
                            </div>
                          </div>

                        </div>
                        <div className="col-sm-10">
                          <div className="panel panel-default">
                            <div className="panel-heading gridhdrbg"><h3 className="panel-title">Product List</h3></div>
                            <div className="table-responsive">
                              <table className="table table-hover table-bordered">
                                <thead>
                                  <tr className="active">
                                    <th className="thumb-nail">Thumbnail</th>
                                    <th className="typeHeader">Type</th>
                                    <th className="descriptionHeader">Description</th>
                                    <th className="languageHeader">Language</th>
                                    <th className="dateHeader">
                                      Date
                                    <span className="carret-up"></span>
                                      <span className="carret-down"></span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="thumb-nail pop-over">
                                      <div className="pop-over-content"><i className="fa fa-file-pdf pdficon" aria-hidden="true"></i></div>
                                    </td>
                                    <td className="black-font">PDF</td>
                                    <td width="50%" className="black-font"> Current Product List | August 29, 2019 <span className="badge"></span></td>
                                    <td>English</td>
                                    <td className="black-font">8/29/2019</td>
                                  </tr>
                                  <tr>
                                    <td className="thumb-nail pop-over">
                                      <div className="pop-over-content"><i className="fa fa-file-pdf pdficon" aria-hidden="true"></i></div>
                                    </td>
                                    <td className="black-font">PDF</td>
                                    <td width="50%" className="black-font">Retired | Product List <span className="badge"></span></td>
                                    <td>English</td>
                                    <td className="black-font">8/29/2019</td>
                                  </tr>
                                </tbody>

                              </table>
                            </div>
                          </div>
                          <div className="panel panel-default gridmrtop">
                            <div className="panel-heading gridhdrbg"><h3 className="panel-title">Marketing Materials</h3></div>
                            <div className="table-responsive">
                              <table className="table table-hover table-bordered">
                                <thead>
                                  <tr className="active">
                                    <th className="thumb-nail">Thumbnail</th>
                                    <th className="typeHeader">Type</th>
                                    <th className="descriptionHeader">Description</th>
                                    <th className="languageHeader">Language</th>
                                    <th className="dateHeader">
                                      Date
                                    <span className="carret-up"></span>
                                      <span className="carret-down"></span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="thumb-nail pop-over">
                                      <div className="pop-over-content"><i className="fa fa-file-pdf pdficon" aria-hidden="true"></i></div>
                                    </td>
                                    <td className="black-font">PDF</td>
                                    <td width="50%" className="black-font"> Current Product List | August 29, 2019 <span className="badge"></span></td>
                                    <td>English</td>
                                    <td className="black-font">8/29/2019</td>
                                  </tr>
                                  <tr>
                                    <td className="thumb-nail pop-over">
                                      <div className="pop-over-content"><i className="fa fa-video pdficon" aria-hidden="true"></i></div>
                                    </td>
                                    <td className="black-font">Video</td>
                                    <td width="50%" className="black-font">2019 Autumn/Winter Collection - BTS Video<span className="badge"></span></td>
                                    <td>English</td>
                                    <td className="black-font">8/29/2019</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="panel panel-default gridmrtop">
                            <div className="panel-heading gridhdrbg"><h3 className="panel-title">Designer Logos</h3></div>
                            <div className="table-responsive">
                              <table className="table table-hover table-bordered">
                                <thead>
                                  <tr className="active">
                                    <th className="thumb-nail">Thumbnail</th>
                                    <th className="typeHeader">Type</th>
                                    <th className="descriptionHeader">Description</th>
                                    <th className="languageHeader">Language</th>
                                    <th className="dateHeader">
                                      Date
                                    <span className="carret-up"></span>
                                      <span className="carret-down"></span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="thumb-nail pop-over">
                                      <div className="pop-over-content">
                                        <img src="../src/images/logo.png" className="thumb-nail w-50"></img>
                                      </div>
                                    </td>
                                    <td className="black-font">png</td>
                                    <td width="50%" className="black-font"> Circle Logo <span className="badge"></span></td>
                                    <td>English</td>
                                    <td className="black-font">8/29/2019</td>
                                  </tr>
                                  <tr>
                                    <td className="thumb-nail pop-over">
                                      <div className="pop-over-content">
                                        <img src="../src/images/yoofoologo.png" className="thumb-nail w-50"></img>
                                      </div>
                                    </td>
                                    <td className="black-font">png</td>
                                    <td width="50%" className="black-font">Side-by-Side Logo<span className="badge"></span></td>
                                    <td>English</td>
                                    <td className="black-font">8/29/2019</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                      </div>
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

export default ResourcesScreen;
