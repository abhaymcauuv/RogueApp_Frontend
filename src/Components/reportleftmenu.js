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
                    <a href="/#/customers" className="active">Customer List</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/clubcouture" className="active">Club Couture Customer</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading ">
                  <div className="panel-title">
                    <a href="/#/personallyenrolledteam">Personally Enrolled Team</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/upcomingpromotions">Upcoming Promotions</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/downlineorders">Downline's Orders</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/newdesigners">New Designers List</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/teamperformance">Team Performance</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/recentactivity">Recent Activity List</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/wattsoflovedonations">Watts of Love Donations</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/treeviewer">Tree Viewer</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/titlepromotion">First Time Title Promotions</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/incentivetriptracker">Incentive Trip Tracker</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/designerdebuttracker">Designer Debut Tracker</a>
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