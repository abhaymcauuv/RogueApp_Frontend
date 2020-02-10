import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeHeaderscreen from '../homeheader';
import ReportLeftmenuscreen from '../reportleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";


var products = [
  {
    id: 2019,
    name: "$47.96",
    price: 29
  },
  {
    id: 2018,
    name: "$50.00",
    price: 11
  },
];

function random() {
  return parseInt(Math.random() * 10, 10) + 1;
}

class CustomersScreen extends Component {
  constructor(props) {
    super(props);

    this.options = {
      defaultSortName: 'name',  // default sort column name
      defaultSortOrder: 'desc'  // default sort order
    };
  }

  state = {
    time: random(),
    accordion: false,
    activeKey: ['4'],
  }

  onChange = (activeKey) => {
    this.setState({
      activeKey,
    });
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="row content">
            <div className="container">
              <div className="col-sm-12">
                <h2 className="h2hdr">Customer List</h2>
                <div className="row">
                  <ReportLeftmenuscreen />
                  <div className="col-md-9">
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
                              <th scope="col">Customer Name</th>
                              <th scope="col">Email</th>
                              <th scope="col">Phone</th>
                              <th scope="col">Address</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="tdbg">
                              <td><Link to="/" data-toggle="modal" data-target=".bd-example-modal-lg"><i className="far fa-address-book"></i></Link>

                                <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                  <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title hdrh5" id="exampleModalLabel">Customer Details</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true" className="closeicon">&times;</span>
                                        </button>
                                      </div>
                                      <div class="modal-body">
                                        <div class="row">
                                          <div class="col-sm-2">
                                            <img className="img-fluid logopdng1 avatar" src="../src/images/profiles/14113.png" alt="logo"></img>
                                            {/* <img src="" class="avatar"></img> */}
                                          </div>
                                          <div class="col-sm-10">
                                            <h3 className="Customerh3"><strong>Aleshia Lindhardt</strong> <small class="textmuted">#17050</small><br></br>
                                            </h3>
                                          </div>
                                        </div>
                                        <div>
                                          <div className="col-sm-12">
                                            <ul class="nav nav-tabs margintop30" id="myTab" role="tablist">
                                              <li class="nav-item">
                                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">General</a>
                                              </li>
                                              <li class="nav-item">
                                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Orders</a>
                                              </li>
                                              <li class="nav-item">
                                                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Auto Orders</a>
                                              </li>
                                            </ul>
                                            <div class="tab-content" id="myTabContent">
                                              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                                <div class="row">
                                                  <div class="col-sm-6 padiingt10">
                                                    <label>Contact Information</label>
                                                    <div class="well well-white no-border wellbg">
                                                      <div class="media">
                                                        <i class="media-object fa fa-phone fa_icon1"></i>
                                                        <div class="media-body">
                                                          <a href="tel:">+1-800-741-8264</a>
                                                        </div>
                                                      </div>
                                                      <div class="media">
                                                        <i class="media-object fa fa-envelope fa_icon1"></i>
                                                        <div class="media-body">
                                                          <a href="mailto:info@yoofoo.com">info@yoofoo.com</a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="row">
                                                  <div class="col-sm-6">
                                                    <label>Addresses</label>
                                                    <div class="well well-white no-border wellbg">
                                                      <div class="media">
                                                        <i class="media-object fa fa-home"></i>
                                                        <div class="media-body">
                                                          <p className="addresspara">YooFoo, LLC.</p>
                                                          <p className="addresspara"> 9192 South 300 West Suite 3 Sandy,</p>
                                                          <p className="addresspara">Utah 84070</p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>

                                                </div>

                                              </div>
                                              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                <BootstrapTable data={products} options={this.options} pagination>
                                                  <TableHeaderColumn dataField='id' isKey dataSort>Order Date</TableHeaderColumn>
                                                  <TableHeaderColumn dataField='name' dataSort>Total</TableHeaderColumn>                                                 
                                                  <TableHeaderColumn dataField='price'>PV</TableHeaderColumn>
                                                </BootstrapTable>

                                              </div>
                                              <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                                 <BootstrapTable data={products} options={this.options} pagination>
                                                  <TableHeaderColumn dataField='id' isKey dataSort>Order Date</TableHeaderColumn>
                                                  <TableHeaderColumn dataField='name' dataSort>Total</TableHeaderColumn>                                                 
                                                  <TableHeaderColumn dataField='price'>PV</TableHeaderColumn>
                                                </BootstrapTable>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                              </td>
                              <td>17050</td>
                              <td className="textalignr">Aleshia Lindhardt</td>
                              <td className="textalignr"><a href="/yoofoo@.com">yoofoo@.com</a></td>
                              <td className="textalignr">1234</td>
                              <td className="textalignr">123 Homewood Dr</td>
                            </tr>
                            <tr>
                              <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                              <td>19893</td>
                              <td className="textalignr">Carley Schaefer</td>
                              <td className="textalignr"><a href="/yoofoo@.com">yoofoo@.com</a></td>
                              <td className="textalignr">1234</td>
                              <td className="textalignr">123 Yoofoo</td>
                            </tr>
                            <tr className="tdbg">
                              <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                              <td>17050</td>
                              <td className="textalignr">Aleshia Lindhardt</td>
                              <td className="textalignr"><a href="/yoofoo@.com">yoofoo@.com</a></td>
                              <td className="textalignr">1234</td>
                              <td className="textalignr">123 Homewood Dr</td>
                            </tr>
                            <tr>
                              <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                              <td>19893</td>
                              <td className="textalignr">Carley Schaefer</td>
                              <td className="textalignr"><a href="/yoofoo@.com">yoofoo@.com</a></td>
                              <td className="textalignr">1234</td>
                              <td className="textalignr">123 Yoofoo</td>
                            </tr>
                            <tr className="tdbg">
                              <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                              <td>17050</td>
                              <td className="textalignr">Aleshia Lindhardt</td>
                              <td className="textalignr"><a href="/yoofoo@.com">yoofoo@.com</a></td>
                              <td className="textalignr">1234</td>
                              <td className="textalignr">123 Homewood Dr</td>
                            </tr>
                            <tr>
                              <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                              <td>19893</td>
                              <td className="textalignr">Carley Schaefer</td>
                              <td className="textalignr"><a href="/yoofoo@.com">yoofoo@.com</a></td>
                              <td className="textalignr">1234</td>
                              <td className="textalignr">123 Yoofoo</td>
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

export default CustomersScreen;
