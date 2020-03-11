import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeHeaderscreen from '../homeheader';
import StoreLeftmenuscreen from '../storeleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';

import ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";
import "react-image-gallery/styles/css/image-gallery.css";

import MyImageGallery from "./MyImageGallery";

class DetailsScreen extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="row content padiingt10">
            <div className="col-md-6 col-sm-12 sliderlp">
              <div className="">
                <Grid container spacing={5}>
                  <Grid item xs={6}>
                    <MyImageGallery />
                  </Grid>
                  <Grid container spacing={2} item xs={6} direction="column">
                    <Grid item>
                      <div id="myPortal" />
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              <div className="col-sm-3 backtp">
              <Link to="/products"><button type="button" className="btn btn-primary btn-block">
                <i className="fa fa-chevron-left"></i> Back to Products</button></Link>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="deatilshdr">Seasonal Deer</div>
              <div className="codehdr">SKU: A194154</div>
              <div className="price">$5.99 USD</div>

            </div>
            <div className="col-md-2 col-sm-12">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="options">
                    <label for="Quantity">Quantity</label>
                    <input className="form-control input-sm test" data-val="true" max="40" name="Quantity" type="number" value="1"></input>
                    <div className="space-20"></div>
                    <button type="button" className="btn btn-primary btn-block"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
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

export default DetailsScreen;
