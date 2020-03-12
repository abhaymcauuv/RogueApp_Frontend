import React, { Component } from 'react';
import HomeHeaderscreen from '../homeheader';
import StoreLeftmenuscreen from '../storeleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';

class MyCartScreen extends Component {
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
                <div className="row padiingt10">
                  <div className="col-sm-12"><h2>Cart</h2></div>
                  <div className="col-sm-12">
                    <p>You don't have any items in your cart yet.</p>
                    <a className="btn btn-primary" href="/#/dashboard">Back to Products</a>
                    <div className="space-20"></div>
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

export default MyCartScreen;
