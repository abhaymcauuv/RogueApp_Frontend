import React, { Component } from 'react';
import HomeHeaderscreen from './homeheader';
import PageFooter from './footer';
import '../styles/styles.css';

class DashboardScreen extends Component {
  render() {    
    return (
      <div>
        <div className="container-fluid">
        <HomeHeaderscreen />   
          <div className="row content">
            <div className="container">
              <div className="col-sm-12">
                
              
              </div>
            </div>
          </div>
          <PageFooter />
        </div>

      </div>
    )
  }
}

export default DashboardScreen;
