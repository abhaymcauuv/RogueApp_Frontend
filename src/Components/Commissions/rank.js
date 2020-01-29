import React, { Component } from 'react';
import HomeHeaderscreen from '../homeheader';
import PageFooter from '../footer';
import '../../styles/styles.css';
const axios = require('axios');
const BASE_URL = `http://localhost:6002/`;

class RankScreen extends Component {
  state = {
    rankPeriodData: [],
    Score: 0,
    rankId: 0
  }
  componentDidMount = () => {
    // Send a POST request
    this.loadRankData();
  }
  handleChange = async (e) => {
    await this.setState({ rankId: e.target.value });
    await this.reloadData();
  }
  reloadData = async () => {
    console.log("Rank Id", this.state.rankId);
    axios({
      method: 'POST',
      url: BASE_URL + 'rogue/commission/rankadvancement/postcustomerrankqualification',
      data: {
        customerId: 14113,
        rankId: this.state.rankId,
      }
    }).then(async (response) => {
      //console.log(response.data.Items);
      const dt = await response.data.Items
      await this.setState({ Score: Math.round(dt[0].Score) });
      await this.setState({ rankData: dt });
      //console.log("Score "+this.state.rankData);
    })
      .catch(function (error) {
        console.log(error);
      });
    // }
  }
  loadRankData = () => {
    axios({
      method: 'GET',
      url: BASE_URL + 'rogue/commission/rankadvancement/getrank'
    }).then(async (response) => {
      //console.log(response.data.Items);
      const dt = await response.data.Items
      this.setState({ rankPeriodData: dt });
    })
      .catch(function (error) {
        console.log(error);
      });
  }
  row1 = () => {
    if (this.state.rankData != undefined && this.state.rankData[0].PayeeQualificationLegs[1] != undefined) {
      let result = this.state.rankData[0].PayeeQualificationLegs[1].RequirementDescription;
      //console.log("Result- ", this.state.rankData[0].PayeeQualificationLegs);
      return( <div className="list-group-item">
      <div className="media">
        <div className="media-object pull-left fa fa-check fafonts15 text-success"></div>
        <div className="media-body">
          {result}
        </div>
      </div>
    </div>)
    }
  }
  row2 = () => {
    if (this.state.rankData != undefined && this.state.rankData[0].PayeeQualificationLegs[0] != undefined) {
      let result = this.state.rankData[0].PayeeQualificationLegs[0].RequirementDescription;
      //console.log("Result- ", result.RequirementDescription);
      return(
        <div className="list-group-item">
        <div className="media">
          <div className="media-object pull-left fa fa-check fafonts15 text-success"></div>
          <div className="media-body">
            {result}
          </div>
        </div>
      </div>
      )
    }
  }
  row3 = () => {
    if (this.state.rankData != undefined && this.state.rankData[0].PayeeQualificationLegs[2] != undefined) {
      let result = this.state.rankData[0].PayeeQualificationLegs[2].RequirementDescription;
      //console.log("Result- ", result.RequirementDescription);
      return(
        <div className="list-group-item">
        <div className="media">
          <div className="media-object pull-left fa fa-times fafonts15 text-danger"></div>
          <div className="media-body">
            {result}
            <div className="space-10"></div>
            <div className="progress progress-sm no-margin">
              <div className="progress-bar progress-bar-info barwd" role="progressbar" aria-valuenow="53.9600" aria-valuemin="0" aria-valuemax="100">
                <span className="sr-only">53.9600% Complete</span>
              </div>
            </div>
            <small className="text-muted">{parseInt(this.state.rankData[0].PayeeQualificationLegs[2].Actual)} of {parseInt(this.state.rankData[0].PayeeQualificationLegs[2].Required)} </small>
          </div>
        </div>
      </div>
      )
    }
  }
  row4 = () => {
    if (this.state.rankData != undefined && this.state.rankData[0].PayeeQualificationLegs[3] != undefined) {
      let result = this.state.rankData[0].PayeeQualificationLegs[3].RequirementDescription;
      //console.log("Result- ", result.RequirementDescription);
      return(
        <div className="list-group-item">
        <div className="media">
          <div className="media-object pull-left fa fa-check fafonts15 text-success"></div>
          <div className="media-body">
            {result}
          </div>
        </div>
      </div>
      )
    }
  }
  row5 = () => {
    if (this.state.rankData != undefined && this.state.rankData[0].PayeeQualificationLegs[4] != undefined) {
      let result = this.state.rankData[0].PayeeQualificationLegs[4].RequirementDescription;
      //console.log("Result- ", result.RequirementDescription);
      return result;
    }
  }
  seactionOne = () => {
    if (this.state.rankData != undefined) {
      return (
        <div className="panel panel-default panelmb25">
          <div className="panel panel-default">
            <div className="panel-body">
              <h3>Leading Designer</h3>
              <div className="row">
                <div className="col-sm-12">
                  <div className="metric metric-sm">
                    <div className="metric-body text-info">{this.state.Score}%</div>
                    <div className="metric-title">
                      Complete
         </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      )
    }
    else {
      return ""
    }
  }

  seactionTwo = () => {
    if (this.state.rankData != undefined) {
      return (
        <div>
          <div className="panel panel-default">
            <div className="panel-heading panelhdr">
              <h4 className="panel-title">Qualification Requirements</h4>
            </div>
            <div className="list-group">

                    {this.row1()}

                    {this.row2()}

                    {this.row3()}

                    {this.row4()}

            </div>
          </div>
        </div>
      )
    }
    else {
      return ""
    }
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="row content">
            <div className="container">
              <div className="col-sm-12">
                <h2 className="h2hdr">Rank Advancement</h2>
                <div className="row">
                  <div className="col-sm-3">

                    <nav className="view-navigation">
                      <div className="panel-group">
                        <div className="panel panel-default no-border">
                          <div className="panel-heading">
                            <div className="panel-title">
                              <a href="/#/commissions">
                              <i class="fa fa-podcast lmenuicon" aria-hidden="true"></i> Commissions
                                </a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default no-border">
                          <div className="panel-heading active">
                            <div className="panel-title">
                              <a href="/#/rank" className="active">
                              <i class="fa fa-star lmenuicon" aria-hidden="true"></i> Rank Advancement
                                </a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default no-border">
                          <div className="panel-heading ">
                            <div className="panel-title">
                              <a href="/#/volumes">
                              <i class="fa fa-file lmenuicon"></i> Volumes
                                </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div className="col-md-9">
                    <div className="well well-sm">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="input-group">
                            <span className="input-group-btn">
                              <button className="btn btn-default" type="button"><i className="fa fa-angle-left" aria-hidden="true"></i></button>
                            </span>
                            <select id="periodchoice" className="form-control" onChange={this.handleChange} >
                              <option value={0}>No Rank</option>
                              {this.state.rankPeriodData.map((dt, i) => {
                                return (
                                  <option key={i} value={dt.RankID}>{dt.RankDescription}</option>
                                )
                              })}
                            </select>
                            <span className="input-group-btn">
                              <button className="btn btn-default" type="button"><i className="fa fa-angle-right" aria-hidden="true"></i></button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {this.seactionOne()}

                    {this.seactionTwo()}
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

export default RankScreen;
