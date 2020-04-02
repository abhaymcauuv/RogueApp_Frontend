import React, { Component } from 'react';
import HomeHeaderscreen from '../homeheader';
import YoofooLeftmenuscreen from '../yoofooleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';

class CompanyNewsScreen extends Component {
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
                    <h2 className="h2hdr">Company News</h2>
                  </div>
                  <div className="col-sm-9"></div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div>
                      <div className="row company_newsalign">

                      <div className="col-lg-3 col-md-4 col-sm-5 col-5 g-mb-30">
                          <a href="#" className="u-link-v5 d-block u-shadow-v1-5 u-shadow-v21--hover g-transition-0_3 g-font-weight-600 g-py-20">
                            <i className="fa fa-handshake iconcolor"></i>
                            <p className="text-uppercase g-font-size-13 g-mb-5">Welcome! <br></br> <small className="g-color-black">6/28/2018</small></p>
                          </a>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-5 col-5 g-mb-30">
                          <a href="#" className="u-link-v5 d-block u-shadow-v1-5 u-shadow-v21--hover g-transition-0_3 g-font-weight-600 g-py-20">
                            <i className="fa fa-newspaper iconcolor"></i>
                            <p className="text-uppercase g-font-size-13 g-mb-5">Weekly Designer Update <br></br> <small className="g-color-black">3/12/2020</small></p>
                          </a>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-5 col-5 g-mb-30">
                          <a href="#" className="u-link-v5 d-block u-shadow-v1-5 u-shadow-v21--hover g-transition-0_3 g-font-weight-600 g-py-20">
                            <i className="fa fa-list-alt iconcolor"></i>
                            <p className="text-uppercase g-font-size-13 g-mb-5">Product List <br></br> <small className="g-color-black">3/12/2020</small></p>
                          </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-5 col-5 g-mb-30">
                          <a href="#" className="u-link-v5 d-block u-shadow-v1-5 u-shadow-v21--hover g-transition-0_3 g-font-weight-600 g-py-20">
                            <i className="fa fa-envelope iconcolor"></i>
                            <p className="text-uppercase g-font-size-13 g-mb-5">Fab First Email <br></br> <small className="g-color-black">3/12/2020</small></p>
                          </a>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-5 col-5 g-mb-30">
                          <a href="#" className="u-link-v5 d-block u-shadow-v1-5 u-shadow-v21--hover g-transition-0_3 g-font-weight-600 g-py-20">
                            <i className="fa fa-phone-square iconcolor" aria-hidden="true"></i>
                            <p className="text-uppercase g-font-size-13 g-mb-5">Yoofoo Talk <br></br> <small className="g-color-black">3/12/2020</small></p>
                          </a>
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

export default CompanyNewsScreen;
