import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeHeaderscreen from '../homeheader';
import PluginsLeftmenuscreen from '../pluginsleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';
import header from '../../data/headerconfig.json';
import axios from 'axios';

class UninstallScreen extends Component {
  constructor(props) {
    super(props);
  }
  onDelete = (e) => {
    //console.log(e.target.value);
    const r = window.confirm("Do you really want to Uninstall ?");
    if (r == true) {
      console.log("Del Id", e.target.value)
      const formData = new FormData();
      formData.append("pluginId", e.target.value);
      const config = {
        headers: {
          "content-type": "multipart/form-data"
        },
        timeout: 1000,
        maxContentLength: 200000
      };

      axios.post("http://localhost:6006/rouge/plugin/uninstall", formData, config)
        .then(response => {
          alert("The file is successfully uploaded");
        })
        .catch(error => { });

    }
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="content">
            <div className="">
              <div className="col-sm-12">
                <h2 className="h2hdr">Plugin Uninstall</h2>
                <div className="row">
                  <div className="col-md-2">
                    <PluginsLeftmenuscreen />
                  </div>
                  <div className="col-md-10">
                    {/* <form className="form-horizontal">
                      <div className="form-group">
                        <label className="control-label col-sm-2 formtext">Plugin Name :</label>
                        <div className="col-sm-4">
                          <input type="Install" className="form-control" placeholder="Plugin Name"></input>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-4 tabletopm30">
                          <button type="button" className="btn btn-primary btn-lg btn-block">Uninstall</button>
                        </div>
                      </div>
                    </form> */}
                    <div className="panel panel-default panelmb50" >
                      <div>
                        <table className="table table-bordered tablemrb" style={{ "text-align": "center" }}>
                          <thead>
                            <tr className="tdbg">
                              <th scope="col">ID</th>
                              <th scope="col">Plugin Name</th>
                              <th scope="col">Uninstall</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              header.map((item, index) => {
                                return <tr className="tdbg">
                                  {/* <td><Link to="/"><i className="far fa-address-book"></i></Link></td> */}
                                  <td>{item.id}</td>
                                  <td>{item.name}</td>
                                  <button type="button" className="btn btn-default btn-sm">
                                    <li key={item.id} value={item.id} onClick={(e) => this.onDelete(e)} className="glyphicon glyphicon-trash"></li>
                                  </button>
                                </tr>
                              })
                            }
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
          <PageFooter />
        </div>

      </div>
    )
  }
}

export default UninstallScreen;
