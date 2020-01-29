import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeHeaderscreen from '../homeheader';
import ReportLeftmenuscreen from '../reportleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';
const axios = require('axios');
const BASE_URL = `http://localhost:6003/`;

class RecentActivityScreen extends Component {
  state = {
  ActivityData:[]
  }
  componentDidMount() {
    // Send a POST request
    this.loadActivity();
  }
  loadActivity = () => {
    axios({
      method: 'POST',
      url: BASE_URL + 'rogue/report/recentactivity/postrecentactivity',
      data: {
        CustomerId: 14113,
        CustomerTypeId: 3
      }
    }).then(async (response) => {
      const dt = await response.data.Items;
      let dtt=[];
      dtt.push({"data":"Virginia Murphy has just placed an order [887099].","time":"6 hours ago"});
      dtt.push({"data":"Robyn Hansen has just placed an order [887004].","time":"7 hours ago"});
      console.log(dtt);
      //await this.setState({ TotalRecord: dt[0].TotalRecordCount });
      //console.log("TotalRecordCount",dt[0].TotalRecordCount);
      this.setState({ ActivityData: dt.length<=0? dtt:dt});
    }).catch(function (error) {
      console.log(error);
    });
  }
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
                    {this.state.ActivityData.map((val, i)=>{
                        return( <li className="list-group-item">
                        <div>{val.data}</div>
                        <small>{val.time}</small>
                      </li>)})}
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
