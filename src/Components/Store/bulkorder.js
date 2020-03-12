import React, { Component } from 'react';
import HomeHeaderscreen from '../homeheader';
import StoreLeftmenuscreen from '../storeleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';


import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";


var products = [
  {
    id: 1,
    total: "1234",
    pv: "What's New",
    type: "8.99",
    status: "1",
    date_field: ""
  },
  {
    id: 2,
    total: "1234",
    pv: "What's New",
    type: "18.99",
    status: "2",
    date_field: ""

  },
  {
    id: 3,
    total: "1234",
    pv: "What's New",
    type: "20.99",
    status: "1",
    date_field: ""

  },
  {
    id: 4,
    total: "1234",
    pv: "What's New",
    type: "17.99",
    status: "4",
    date_field: ""

  },


];

function random() {
  return parseInt(Math.random() * 10, 10) + 1;
}

class BulkorderScreen extends Component {
  render() {
    return (
      <div>
        <div className="col-sm-12">
          <HomeHeaderscreen />
        </div>
        <div className="container-fluid page_container">
          <div className="content">
            <div>
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-3">
                    <h2 className="h2hdr">Bulk Orders</h2>
                  </div>
                  <div className="col-sm-6"></div>
                  <div className="col-sm-3">
                    <div className="input-group pt10 pr8">
                      <input type="text" className="form-control inputht" placeholder="Search.."></input>
                      <span className="input-group-btn"><button className="btn btn-primary inputht" type="submit"><i className="fa fa-search"></i></button></span>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-2">
                    <StoreLeftmenuscreen />
                  </div>
                  <div className="col-md-10">
                    <div className="gridlpdng">
                      <BootstrapTable data={products} options={this.options} pagination>
                        <TableHeaderColumn dataField='id' isKey dataSort>Item</TableHeaderColumn>
                        <TableHeaderColumn dataField='total' dataSort>SKU</TableHeaderColumn>
                        <TableHeaderColumn dataField='pv' dataSort>Category</TableHeaderColumn>
                        <TableHeaderColumn dataField='type' dataSort>Price</TableHeaderColumn>
                        <TableHeaderColumn dataField='status' dataSort>Quantity</TableHeaderColumn>
                        <TableHeaderColumn dataField='date_field'>

                        </TableHeaderColumn>
                      </BootstrapTable>
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
      </div>
    )
  }
}

export default BulkorderScreen;
