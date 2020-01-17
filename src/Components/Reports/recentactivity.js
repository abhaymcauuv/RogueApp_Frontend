import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeHeaderscreen from '../homeheader';
import ReportLeftmenuscreen from '../reportleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';

class RecentActivityScreen extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="row content">
            <div className="container">
              <div className="col-sm-12">
                <h2 className="h2hdr">Your Team's Recent Activity</h2>
                <div className="row">
                  <ReportLeftmenuscreen />
                  <div className="col-md-9">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <div>Virginia Murphy has just placed an order [887099].</div>
                        <small>6 hours ago</small>
                      </li>
                      <li className="list-group-item">
                        <div>Robyn Hansen has just placed an order [887004].</div>
                        <small>7 hours ago</small>
                      </li>
                      <li className="list-group-item">
                        <div> Crystal Bybee has just placed an order [886907].</div>
                        <small>9 hours ago</small>
                      </li>
                      <li className="list-group-item">
                        <div>McKenzie Mitchell has just placed an order [886534].</div>
                        <small>13 hours ago</small>
                      </li>
                      <li className="list-group-item">
                        <div>Carrie Romans has just placed an order [886436].</div>
                        <small> 15 hours ago</small>
                      </li>
                    </ul>
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

export default RecentActivityScreen;
