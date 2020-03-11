import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rc-menu/assets/index.css';

export default class PluginsLeftmenuscreen extends Component {

  render() {
    const BASE_URL = '#'
    return (
      <div>
        <div className="">
          <nav className="view-navigation">
            <div className="panel-group">
              <div className="panel panel-default no-border leftmenuwd">
                <div className="panel-heading active">
                  <div className="panel-title">
                    <a href="/#/install" className="active"><i className="fa fa-download lmenuicon" aria-hidden="true"></i> Install</a>
                  </div>
                </div>
              </div>
              <div className="panel panel-default no-border leftmenuwd">
                <div className="panel-heading">
                  <div className="panel-title">
                    <a href="/#/uninstall" className="active"><i className="fa fa-times-circle lmenuicon" aria-hidden="true"></i> Uninstall</a>
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