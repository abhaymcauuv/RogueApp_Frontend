import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rc-menu/assets/index.css';

export default class StoreLeftmenuscreen extends Component {

  render() {
    const BASE_URL = '#'
    return (
      <div>
        <div>
          <nav className="view-navigation">
            <div className="panel-group leftmenuwd">
              <div className="panel panel-default no-border">
                <div className="panel-heading active">
                  <div className="panel-title">
                    <a href="/#/WhatsNew" className="active"><i className="fa fa-star lmenuicon" aria-hidden="true"></i> What's New</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/roguetransfer" className="active"><i className="fa fa-handshake lmenuicon" aria-hidden="true"></i> Rogue Transfer™</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/roguepaste" className="active"><i className="fa fa-clipboard lmenuicon" aria-hidden="true"></i> Rogue Paste™</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/rogueink" className="active"><i className="fa fa-link lmenuicon" aria-hidden="true"></i> Rogue Ink™</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/surfaces" className="active"><i className="fa fa-clone lmenuicon" aria-hidden="true"></i> Surfaces </a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/accessories" className="active"><i className="fa fa-desktop lmenuicon" aria-hidden="true"></i> Accessories</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/businesssupplies" className="active"><i className="fa fa-cubes lmenuicon" aria-hidden="true"></i> Business Supplies</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/wattsoflove" className="active"><i className="fa fa-heart lmenuicon" aria-hidden="true"></i> Watts of Love</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/promotional" className="active"><i className="fa fa-user lmenuicon" aria-hidden="true"></i> Promotional</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/specials" className="active"><i className="fa fa-podcast lmenuicon" aria-hidden="true"></i> Specials and Deals</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/lastchance" className="active"><i className="fa fa-bullhorn lmenuicon" aria-hidden="true"></i> Last Chance</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/boxkit" className="active"><i className="fa fa-briefcase lmenuicon" aria-hidden="true"></i> Rogue Box™ Kit</a>
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