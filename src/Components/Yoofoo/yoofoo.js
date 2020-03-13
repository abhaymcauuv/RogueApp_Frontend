import React, { Component } from 'react';
import HomeHeaderscreen from '../homeheader';
import YoofooLeftmenuscreen from '../yoofooleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';

class YoofooScreen extends Component {
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
                    <h2 className="h2hdr">Yoofoo Technology</h2>
                  </div>
                  <div className="col-sm-9"></div>
                </div>
                <div className="row">
                  <div className="col-sm-2">
                    <YoofooLeftmenuscreen />
                  </div>
                  <div className="col-md-10">
                    <div className="gridlpdng">
                      <div className="col-sm-10 yoofoo_hdr">
                        Welcome to Yoofoo! <br></br>
                        <div className="yoofoo_hdr1"> This is the place to find inspiration, information, and motivation to build your Designership.</div>
                        <div className="yoofoo_hdr1">Look around and take some classes that speak to you.</div>
                        <div className="yoofoo_hdr1">Or, better yet, take them all. Education empowers.</div>
                        <div className="yoofoo_hdr1"> Here’s to your success!</div>
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

export default YoofooScreen;
