import React, { Component } from 'react';
import HomeHeaderscreen from '../homeheader';
import StoreLeftmenuscreen from '../storeleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';

class MyCartScreen extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="row content">
            <div className="container">   
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
          <PageFooter />
        </div>

      </div>
    )
  }
}

export default MyCartScreen;
