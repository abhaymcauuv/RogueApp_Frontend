import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeHeaderscreen from '../homeheader';
import PluginsLeftmenuscreen from '../pluginsleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';
import axios from 'axios';
import header from '../../data/headerconfig.json';

class InstallScreen extends Component {
  constructor() {
    super();
    this.state = {
      //name: '',
      //selected: [],
      //description: '',
      file: undefined
    };
    this.submitForm = this.submitForm.bind(this)
  }
  validate() {
    // if (!this.state.name) {
    //    alert("Name can not be blank");
    //    return false;
    // }
    // if(!this.state.description){
    //     alert("Description can not be blank"); 
    //     return false;
    // }
    // if(this.state.selected.length == 0){
    //   alert("Please select packages"); 
    //   return false;
    // }
    if (!this.state.file || this.state.file.length == 0) {
      alert("Selct a file");
      return false;
    }
    return true;
  }
  submitForm(e) {
    e.preventDefault();
    const isValid = this.validate();
    if (!isValid) {
      return;
    }
    //debugger;
    const formData = new FormData();
    formData.append("plugin", this.state.file);
    formData.append("name", this.state.file.name);
    //formData.append("description",this.state.description);
    //formData.append("package",this.state.selected);
    //console.log("Form data ",JSON.stringify(formData));
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      },
      timeout: 1000,
      maxContentLength: 200000
    };

    axios.post("http://localhost:6006/rouge/plugin/install", formData, config)
      .then(response => {
        alert("The file is successfully uploaded");
      })
      .catch(error => { });
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="row content">
            <div className="container">
              <div className="col-sm-12">
                <h2 className="h2hdr">Plugin Install</h2>
                <div className="row">
                  <PluginsLeftmenuscreen />
                  <div className="col-md-9">
                    <form class="form-horizontal" onSubmit={this.submitForm} role="form">
                      {/* <div class="form-group">
                        <label class="control-label col-sm-2 formtext">Plugin Name :</label>
                        <div class="col-sm-4">
                          <input type="Install" class="form-control"  value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} placeholder="Plugin Name"></input>
                        </div>
                      </div> */}
                      <div class="form-group">
                        <label class="control-label col-sm-2 formtext">Upload File :</label>
                        <div class="col-sm-4">
                          <div class="custom-file">
                            <input type="file" onChange={(e) => this.setState({ file: e.target.files[0] })} class="custom-file-input" id="customFileLang" lang=""></input>
                            <label class="custom-file-label" for="customFileLang">Choose File</label>
                          </div>
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-4 tabletopm30">
                          <button type="submit" class="btn btn-primary btn-lg btn-block">Install</button>
                        </div>
                      </div>
                    </form>
                    <div className="panel panel-default panelmb50">
                      <div>
                        <table className="table table-bordered tablemrb">
                          <thead>
                            <tr className="tdbg">
                              {/* <th scope="col"></th> */}
                              <th scope="col">ID</th>
                              <th scope="col">Plugin Name</th>
                              {/* <th scope="col">Email</th>
                              <th scope="col">Phone</th>
                              <th scope="col">Address</th> */}
                            </tr>
                          </thead>
                          <tbody>
                            {
                              header.map((item, index) => {
                                return <tr className="tdbg">
                                  {/* <td><Link to="/"><i className="far fa-address-book"></i></Link></td> */}
                              <td>{item.id}</td>
                                  <td className="textalignr">{item.name}</td>
                                  {/* <td className="textalignr"><a href="/yoofoo@.com">yoofoo@.com</a></td>
                                  <td className="textalignr">1234</td>
                                  <td className="textalignr">123 Homewood Dr</td> */}
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

export default InstallScreen;
