import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';

export default class PageFooter extends Component {
  handler = () => {
    console.log('sadasdasads')
  }
  render() {   
    return (
      <div>
         <div className="row">         
            <div className="col-md-12 Footer" onClick = {this.props.handler}>Copyright © {new Date().getFullYear()} Rogue All Rights Reserved</div>
          </div>
      </div>
    )
  }
}