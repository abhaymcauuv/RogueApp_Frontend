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
                    <a href="/#/customers" className="active"><i class="fa fa-address-card lmenuicon" aria-hidden="true"></i> Customer List</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/clubcouture" className="active"><i class="fa fa-address-book lmenuicon" aria-hidden="true"></i> Club Couture Customer</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading ">
                  <div className="panel-title">
                    <a href="/#/personallyenrolledteam"><i class="fa fa-users lmenuicon" aria-hidden="true"></i> Personally Enrolled Team</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/upcomingpromotions"><i class="fa fa-calendar-check lmenuicon" aria-hidden="true"></i> Upcoming Promotions</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/downlineorders"><i class="fa fa-sitemap lmenuicon" aria-hidden="true"></i> Downline's Orders</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/newdesigners"><i class="fa fa-list-alt lmenuicon" aria-hidden="true"></i> New Designers List</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/teamperformance"><i class="fas fa fa-user lmenuicon"></i> Team Performance</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/recentactivity"><i class="fa fa-id-card lmenuicon" aria-hidden="true"></i> Recent Activity List</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/wattsoflovedonations"><i class="fa fa-heart lmenuicon" aria-hidden="true"></i> Watts of Love Donations</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/treeviewer"><i class="fa fa-tree lmenuicon" aria-hidden="true"></i> Tree Viewer</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/titlepromotion"><i class="fa fa-first-order lmenuicon" aria-hidden="true"></i> First Time Title Promotions</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/incentivetriptracker"><i class="fa fa-street-view lmenuicon" aria-hidden="true"></i> Incentive Trip Tracker</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/designerdebuttracker"><i class="fa fa-bar-chart lmenuicon" aria-hidden="true"></i> Designer Debut Tracker</a>
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