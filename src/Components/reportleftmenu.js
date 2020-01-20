import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rc-menu/assets/index.css';

export default class ReportLeftmenuscreen extends Component {

  render() {
    const BASE_URL = '#'
    return (
      <div>
        <div className="container">
          <nav className="view-navigation">
            <div className="panel-group">
              <div className="panel panel-default no-border">
                <div className="panel-heading active">
                  <div className="panel-title">
                    <a href="/#/customers" className="active"><i className="fa fa-address-card lmenuicon" aria-hidden="true"></i> Customer List</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/clubcouture" className="active"><i className="fa fa-address-book lmenuicon" aria-hidden="true"></i> Club Couture Customer</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading ">
                  <div className="panel-title">
                    <a href="/#/personallyenrolledteam"><i className="fa fa-users lmenuicon" aria-hidden="true"></i> Personally Enrolled Team</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/upcomingpromotions"><i className="fa fa-calendar-check lmenuicon" aria-hidden="true"></i> Upcoming Promotions</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/downlineorders"><i className="fa fa-sitemap lmenuicon" aria-hidden="true"></i> Downline's Orders</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/newdesigners"><i className="fa fa-list-alt lmenuicon" aria-hidden="true"></i> New Designers List</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/teamperformance"><i className="fas fa fa-user lmenuicon"></i> Team Performance</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/recentactivity"><i className="fa fa-id-card lmenuicon" aria-hidden="true"></i> Recent Activity List</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/wattsoflovedonations"><i className="fa fa-heart lmenuicon" aria-hidden="true"></i> Watts of Love Donations</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/treeviewer"><i className="fa fa-tree lmenuicon" aria-hidden="true"></i> Tree Viewer</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/titlepromotion"><i className="fa fa-tag lmenuicon" aria-hidden="true"></i> First Time Title Promotions</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/incentivetriptracker"><i className="fa fa-street-view lmenuicon" aria-hidden="true"></i> Incentive Trip Tracker</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/designerdebuttracker"><i className="fa fa-map-marker lmenuicon" aria-hidden="true"></i> Designer Debut Tracker</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>

        </div>
      </div>
    )
  }
}