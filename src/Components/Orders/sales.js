import React, { Component } from 'react';
import HomeHeaderscreen from '../homeheader';
import PageFooter from '../footer';
import '../../styles/styles.css';

import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";


var products = [
  {
    date_field: "3/15/2020",
    order_number: "991398",
    customer_name: "Lisa Swantek",
    subtotal: "$104.97 USD",
    pv: "34.74PV",
    type: "Shopping Cart",
    status: "Shipped"
  },
  {
    date_field: "3/15/2020",
    order_number: "991398",
    customer_name: "Lisa Swantek",
    subtotal: "$104.97 USD",
    pv: "114.49PV",
    type: "Shopping Cart",
    status: "Shipped"
  },
  {
    date_field: "3/15/2020",
    order_number: "991398",
    customer_name: "Lisa Swantek",
    subtotal: "$104.97 USD",
    pv: "62.97PV",
    type: "Club Couture",
    status: "Shipped"
  },
  {
    date_field: "3/15/2020",
    order_number: "991398",
    customer_name: "Lisa Swantek",
    subtotal: "$104.97 USD",
    pv: "62.97PV",
    type: "Club Couture",
    status: "Shipped"
  },
];

function random() {
  return parseInt(Math.random() * 10, 10) + 1;
}

class SalesScreen extends Component {
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
                <h2 className="h2hdr">Sales</h2>
                <div className="row">
                  <div className="col-sm-2">
                    <nav className="view-navigation">
                      <div className="panel-group leftmenuwd">
                        <div className="panel panel-default no-border">
                          <div className="panel-heading">
                            <div className="panel-title">
                              <a href="/#/orders" >
                                <i className="fa fa-list-alt lmenuicon" aria-hidden="true"></i> Inventory Orders
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default no-border">
                          <div className="panel-heading">
                            <div className="panel-title">
                              <a href="/#/personaluseorders">
                                <i className="fa fa-list-ul lmenuicon" aria-hidden="true"></i> Personal Use Orders
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default no-border">
                          <div className="panel-heading active">
                            <div className="panel-title">
                              <a href="/#/sales" className="active">
                                <i className="fa fa-tags lmenuicon" aria-hidden="true"></i> Sales
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div className="col-md-10">
                    <div className="col-sm-12">
                      <div className="container mt-3">
                        <div className="tab-content">
                          <div id="InventoryOrders" className="container tab-pane active">
                            <div className="panel panel-default panelmb50 clear">
                              <div>
                                <div className="Inventorybg">
                                  <button type="button" className="btn btn-primary hidden-print"><i className="fa fa-file-excel"></i> Export Excel</button>
                                </div>
                                <BootstrapTable data={products} options={this.options} pagination>
                                  <TableHeaderColumn dataField='date_field' isKey dataSort>Order Date</TableHeaderColumn>
                                  <TableHeaderColumn dataField='order_number' dataSort>Order Number</TableHeaderColumn>
                                  <TableHeaderColumn dataField='customer_name' dataSort>Customer Name</TableHeaderColumn>
                                  <TableHeaderColumn dataField='subtotal' dataSort>Subtotal</TableHeaderColumn>
                                  <TableHeaderColumn dataField='pv' dataSort>PV</TableHeaderColumn>
                                  <TableHeaderColumn dataField='type' dataSort>Type</TableHeaderColumn>
                                  <TableHeaderColumn dataField='status' dataSort>Status</TableHeaderColumn>
                                </BootstrapTable>
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

export default SalesScreen;
