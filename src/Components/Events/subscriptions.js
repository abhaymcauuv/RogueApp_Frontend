import React, { Component } from 'react';
import HomeHeaderscreen from '../homeheader';
import YoofooLeftmenuscreen from '../yoofooleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';

class SubscriptionsScreen extends Component {
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
                    <h2 className="h2hdr">Subscriptions</h2>
                  </div>
                  <div className="col-sm-9"></div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="company_hdr">
                      <div className="row">
                        <div className="col-sm-3">
                          <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target=".bd-example-modal-lg">Add New Subscription</button>
                        </div>
                        <div className="col-sm-7">
                          <div className="subs_hdr">Corporate Calendar</div>
                          <p className="subs_p">You may not unsubscribe from the Corporate calendar.</p>
                        </div>
                        <div className="col-sm-2">
                          <button type="button" class="btn btn-lg btn-primary" disabled>Unsubscribe</button>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-3">
                          <button type="button" class="btn btn-primary btn-lg">Back to calendar</button>
                        </div>
                        <div className="col-sm-7">
                          <div className="subs_hdr">Vicky Whiteman ID: #1056</div>
                        </div>
                        <div className="col-sm-2">
                          <button type="button" class="btn btn-lg btn-primary">Unsubscribe</button>
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
        <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title hdrh5" id="exampleModalLabel">Add New Subscription</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" className="closeicon">&times;</span>
                </button>
              </div>
              <div className="modal-body addsub">
                <div className="subs_hdr1">Search for your a distributor by entering their customer ID, first name or last name.</div>
                <div>
                  <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                    <section class="input-group">
                      <input class="form-control" data-val-required="This field is required." placeholder="Search" type="text" value=""></input>
                      <span class="input-group-btn">
                        <button class="btn btn-default" type="submit"><i class="fa fa-search"></i></button>
                      </span>
                    </section>
                    <span class="field-validation-valid"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SubscriptionsScreen;
