import React, { Component } from 'react';
import HomeHeaderscreen from '../homeheader';
import { Link } from "react-router-dom";
import StoreLeftmenuscreen from '../storeleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';

class MyCartScreen extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="col-sm-12 content">
            <div className="col-sm-12 carthdr">Cart</div>
            <div className="row">
              <div className="col-sm-9">
                <div className="view-paneledcart">
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <div className="view-cart">
                        <div className="row margin-10 text-uppercase text-muted text-xs">
                          <div className="col-xs-8 text14">Items</div>
                          <div className="col-xs-2 text-right text14">Price</div>
                          <div className="col-xs-2 text-center text14">Quantity</div>
                        </div>
                        <div className="space-10"></div>
                        <div className="row margin-10">
                          <div className="col-xs-8">
                            <div className="row">
                              <div className="col-sm-2">
                                <div className="image">
                                  <a href="#"><img src="../src/images/products/img1.jpg" className="img-responsive"></img></a>
                                </div>
                              </div>
                              <div className="col-sm-10">
                                <div className="itemdescription">
                                  <a href="/#/">2020 Seasonal Deer (6 Pack - Paquet De 6)</a>
                                </div>
                                <small className="text14">SKU: W201103</small>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-2 text-right">
                            $12.00
                           </div>
                          <div className="col-xs-2 text-center">
                            <input type="text" name="name" value="1" className="inputtext" />
                            <div>
                              <small className="remove"><a href="#" className="text14"> Remove</a></small>
                            </div>
                          </div>

                        </div>
                        <div className="space-10"></div>
                      </div>
                    </div>
                    <div className="panel-footer">
                      <div className="text-right subt">
                        Subtotal (<span>1</span> items): <strong><span className="fbold">$24.00 USD</span></strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <div className="text-center">
                      <div className="subt1">Subtotal (<span data-text="orderquantity">1</span> items):</div>
                      <div className="textb">$24.00 USD</div>
                    </div>
                    <div className="text-center checkoutp">
                      <a href="/#/" id="checkout" className="btn btn-primary btn-block">Checkout</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-sm-2 backtp">
              <Link to="/products"><button type="button" className="btn btn-primary btn-block">
                <i className="fa fa-chevron-left"></i> Back to Products</button></Link>
            </div>



          </div>
          <PageFooter />
        </div>

      </div>
    )
  }
}

export default MyCartScreen;
