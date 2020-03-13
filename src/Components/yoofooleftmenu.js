import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rc-menu/assets/index.css';

export default class YoofooLeftmenuscreen extends Component {

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
                    <a href="/#/" className="active"><i className="fa fa-star lmenuicon" aria-hidden="true"></i> Business Basics</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/" className="active"><i className="fa fa-handshake lmenuicon" aria-hidden="true"></i> Artwork Products Techniques</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/" className="active"><i className="fa fa-clipboard lmenuicon" aria-hidden="true"></i> Strong Selling</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/" className="active"><i className="fa fa-link lmenuicon" aria-hidden="true"></i> Sponsoring Team Development</a>
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