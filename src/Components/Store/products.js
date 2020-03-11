import React, { Component } from 'react';
import HomeHeaderscreen from '../homeheader';
import StoreLeftmenuscreen from '../storeleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';

class ProductsScreen extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="content">
            <div>
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-3">
                    <h2 className="h2hdr">Shopping</h2>
                  </div>
                  <div className="col-sm-6"></div>
                  <div className="col-sm-3">
                    <div className="input-group pt10 pr35">
                      <input type="text" className="form-control inputht" placeholder="Search.."></input>
                      <span className="input-group-btn"><button className="btn btn-primary inputht" type="submit"><i className="fa fa-search"></i></button></span>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-2">
                    <StoreLeftmenuscreen />
                  </div>
                  <div className="col-md-10">
                    <div>
                      <div className="feature-grids">
                        <div className="col-md-3 col-sm-12 feature-grid">
                          <a href="/#/details"><img src="../src/images/products/img1.jpg" alt="1"></img>
                            <div className="arrival-info">
                              <h4>Seasonal Deer</h4>
                              <p>$5.99 USD</p>
                            </div>
                            <div className="viw">
                              <a href="/#/details"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Details</a>
                            </div>
                            <div className="shrt">
                              <a href="/#/mycart"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Add to Cart</a>
                            </div></a>
                        </div>
                        <div className="col-md-3 col-sm-12 feature-grid">
                          <a href="/#/details"><img src="../src/images/products/img2.jpg" alt="2" />
                            <div className="arrival-info">
                              <h4>North Pole Postmark</h4>
                              <p>$5.99 USD</p>
                            </div>
                            <div className="viw">
                              <a href="/#/details"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Details</a>
                            </div>
                            <div className="shrt">
                              <a href="/#/mycart"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Add to Cart</a>
                            </div></a>
                        </div>
                        <div className="col-md-3 col-sm-12 feature-grid">
                          <a href="/#/details"><img src="../src/images/products/img3.jpg" alt="3" />
                            <div className="arrival-info">
                              <h4>TOo Cold</h4>
                              <p>$5.99 USD</p>
                            </div>
                            <div className="viw">
                              <a href="/#/details"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Details</a>
                            </div>
                            <div className="shrt">
                              <a href="/#/mycart"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Add to Cart</a>
                            </div></a>
                        </div>
                        <div className="col-md-3 col-sm-12 feature-grid">
                          <a href="/#/details"><img src="../src/images/products/img4.jpg" alt="4" />
                            <div className="arrival-info">
                              <h4>Ornaments Minis</h4>
                              <p>$5.99 USD</p>
                            </div>
                            <div className="viw">
                              <a href="/#/details"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Details</a>
                            </div>
                            <div className="shrt">
                              <a href="/#/mycart"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Add to Cart</a>
                            </div></a>
                        </div>
                        <div className="col-md-3 col-sm-12 feature-grid">
                          <a href="/#/details"><img src="../src/images/products/img5.jpg" alt="5" />
                            <div className="arrival-info">
                              <h4>Ornaments Minis</h4>
                              <p>$5.99 USD</p>
                            </div>
                            <div className="viw">
                              <a href="/#/details"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Details</a>
                            </div>
                            <div className="shrt">
                              <a href="/#/mycart"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Add to Cart</a>
                            </div></a>
                        </div>
                        <div className="col-md-3 col-sm-12 feature-grid">
                          <a href="/#/details"><img src="../src/images/products/img6.jpg" alt="6" />
                            <div className="arrival-info">
                              <h4>Ornaments Minis</h4>
                              <p>$5.99 USD</p>
                            </div>
                            <div className="viw">
                              <a href="/#/details"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Details</a>
                            </div>
                            <div className="shrt">
                              <a href="/#/mycart"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Add to Cart</a>
                            </div></a>
                        </div>
                        <div className="col-md-3 col-sm-12 feature-grid">
                          <a href="/#/details"><img src="../src/images/products/img7.jpg" alt="7" />
                            <div className="arrival-info">
                              <h4>Ornaments Minis</h4>
                              <p>$5.99 USD</p>
                            </div>
                            <div className="viw">
                              <a href="/#/details"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Details</a>
                            </div>
                            <div className="shrt">
                              <a href="/#/mycart"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Add to Cart</a>
                            </div></a>
                        </div>
                        <div className="col-md-3 col-sm-12 feature-grid">
                          <a href="/#/details"><img src="../src/images/products/img8.jpg" alt="8" />
                            <div className="arrival-info">
                              <h4>Ornaments Minis</h4>
                              <p>$5.99 USD</p>
                            </div>
                            <div className="viw">
                              <a href="/#/details"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Details</a>
                            </div>
                            <div className="shrt">
                              <a href="/#/mycart"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Add to Cart</a>
                            </div></a>
                        </div>
                        <div className="col-md-3 col-sm-12 feature-grid">
                          <a href="/#/details"><img src="../src/images/products/img9.jpg" alt="9" />
                            <div className="arrival-info">
                              <h4>Ornaments Minis</h4>
                              <p>$5.99 USD</p>
                            </div>
                            <div className="viw">
                              <a href="/#/details"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Details</a>
                            </div>
                            <div className="shrt">
                              <a href="/#/mycart"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Add to Cart</a>
                            </div></a>
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

export default ProductsScreen;
