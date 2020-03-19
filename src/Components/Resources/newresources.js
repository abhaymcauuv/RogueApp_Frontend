import React, { Component } from 'react';
import HomeHeaderscreen from '../homeheader';
import YoofooLeftmenuscreen from '../yoofooleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';

class NewResourcesScreen extends Component {
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
                    <h2 className="h2hdr">New Resources</h2>
                  </div>
                  <div className="col-sm-9"></div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div>
                      <div className="row company_hdr">

                                        


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

export default NewResourcesScreen;
