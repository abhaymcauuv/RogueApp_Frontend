import React, { Component } from 'react';
import HomeHeaderscreen from '../homeheader';
import PageFooter from '../footer';
import '../../styles/styles.css';
const axios = require('axios');

class VolumesScreen extends Component {
  state = {
    volumeData: []
  }
  componentDidMount() {
    // Send a POST request
    this.loadVolumeData();
  }
  loadVolumeData = () => {
    axios({
      method: 'post',
      url: 'http://localhost:6002/rogue/commission/volumes/postvolumes',
      data: {
        CustomerId: 14113,
        PageSize: "",
        PageNumber: "1"
      }
    }).then(async (response) => {
      //console.log(response.data.Items);
      const dt = await response.data.Items
      this.setState({ volumeData: dt });
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    //console.log('---load-', this.state.volumeData)
    const { volumeData } = this.state;
    return (
      <div>
        <div className="col-sm-12">
          <HomeHeaderscreen />
        </div>
        <div className="container-fluid page_container">
          <div className="content">
            <div>
              <div className="col-sm-12">
                <h2 className="h2hdr">Volumes</h2>
                <div className="row">
                  <div className="col-sm-2">
                    <nav className="view-navigation">
                      <div className="panel-group leftmenuwd">
                        <div className="panel panel-default no-border">
                          <div className="panel-heading">
                            <div className="panel-title">
                              <a href="/#/commissions">
                                <i className="fa fa-podcast lmenuicon" aria-hidden="true"></i> Commissions
                                </a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default no-border">
                          <div className="panel-heading ">
                            <div className="panel-title">
                              <a href="/#/rank">
                                <i className="fa fa-star lmenuicon" aria-hidden="true"></i> Rank Advancement
                                </a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default no-border">
                          <div className="panel-heading active">
                            <div className="panel-title">
                              <a href="/#/volumes" className="active">
                                <i className="fa fa-file lmenuicon"></i> Volumes
                                </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div className="col-md-10">
                    <div className="gridlpdng">
                      <div className="panel panel-default panelmb50">
                        <div>
                          <table className="table table-bordered tablemrb">
                            <thead>
                              <tr>
                                <th colSpan="6" className="textalignr tdbg">
                                  <button type="button" className="k-grid-excel btn btn-primary hidden-print"><i className="fa fa-download"></i> Excel</button>
                                </th>
                              </tr>
                              <tr className="tdbg">
                                <th scope="col">Period</th>
                                <th scope="col">Paid as Title</th>
                                <th scope="col">PV</th>
                                <th scope="col">TV</th>
                                <th scope="col">Level 1 Mentor</th>
                                <th scope="col">PSQ</th>
                              </tr>
                            </thead>
                            <tbody>
                              {volumeData.map((dt, i) => {
                                return (<tr className="tdbg" key={i} >
                                  <td>{dt.PeriodDescription}</td>
                                  <td>{dt.PaidRankDescription}</td>
                                  <td>{dt.PV}</td>
                                  <td className="textalignr">{dt.TV}</td>
                                  <td className="textalignr">{dt.L1M}	</td>
                                  <td className="textalignr">{dt.PSQ}</td>
                                </tr>)

                              })}

                            </tbody>
                          </table>
                          <div className="row">
                            <div className="col-sm-9">
                              <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                  <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                      <span aria-hidden="true">&laquo;</span>
                                      <span className="sr-only">Previous</span>
                                    </a>
                                  </li>
                                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                                  <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                      <span aria-hidden="true">&raquo;</span>
                                      <span className="sr-only">Next</span>
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                            <div className="col-sm-3 paddingt10">
                              <span className="k-pager-info k-label">1 - 23 of 23 items</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="col-sm-12">
            <PageFooter />
          </div>
        </div>

      </div >
    )
  }
}

export default VolumesScreen;
