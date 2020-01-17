import React, { Component } from 'react';
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import { Link } from "react-router-dom";
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rc-menu/assets/index.css';
import animate from 'css-animation';



function handleClick(info) {
  console.log(`clicked ${info.key}`);
  console.log(info);
}

const animation = {
  enter(node, done) {
    let height;
    return animate(node, 'rc-menu-collapse', {
      start() {
        height = node.offsetHeight;
        node.style.height = 0;
      },
      active() {
        node.style.height = `${height}px`;
      },
      end() {
        node.style.height = '';
        done();
      },
    });
  },

  appear() {
    return this.enter.apply(this, arguments);
  },

  leave(node, done) {
    return animate(node, 'rc-menu-collapse', {
      start() {
        node.style.height = `${node.offsetHeight}px`;
      },
      active() {
        node.style.height = 0;
      },
      end() {
        node.style.height = '';
        done();
      },
    });
  },
};

const reactContainer = document.getElementById('__react-content');

const nestSubMenu = (

  <SubMenu
    title={
      <span className="submenu-title-wrapper">Reports</span>
    }
    key="0"
    popupOffset={[10, 7]}
  >
    <MenuItem key="Customer List"><Link to="/customers">Customer List</Link></MenuItem>
    <MenuItem key="Club Couture Customer"><Link to="/clubcouture">Club Couture Customer</Link></MenuItem>
    <MenuItem key="Personally Enrolled Team"><Link to="/personallyenrolledteam">Personally Enrolled Team</Link></MenuItem>
    <MenuItem key="Upcoming Promotions"><Link to="/upcomingpromotions">Upcoming Promotions</Link></MenuItem>
    <MenuItem key="Downline's Orders"><Link to="/downlineorders">Downline's Orders</Link></MenuItem>
    <MenuItem key="New Designers List"><Link to="/newdesigners">New Designers List</Link></MenuItem>
    <MenuItem key="Team Performance"><Link to="/teamperformance">Team Performance</Link></MenuItem>
    <MenuItem key="Recent Activity List"><Link to="/recentactivity">Recent Activity List</Link></MenuItem>
    <MenuItem key="Watts of Love Donations"><Link to="/wattsoflovedonations">Watts of Love Donations</Link></MenuItem>
    <MenuItem key="Tree Viewer"><Link to="/treeviewer">Tree Viewer</Link></MenuItem>
    <MenuItem key="First Time Title Promotions"><Link to="/titlepromotion">First Time Title Promotions</Link></MenuItem>
    <MenuItem key="Incentive Trip Tracker"><Link to="/incentivetriptracker">Incentive Trip Tracker</Link></MenuItem>
    <MenuItem key="Designer Debut Tracker"><Link to="/designerdebuttracker">Designer Debut Tracker</Link></MenuItem>
    <Divider />
  </SubMenu>
);

function onOpenChange(value) {
  console.log('onOpenChange', value);
}

const children1 = [
  <MenuItem key="Home"><Link to="/dashboard"><i className="fa fa-home" aria-hidden="true"></i></Link></MenuItem>,
  <SubMenu title={<span className="submenu-title-wrapper">Commissions</span>} key="1">
    <MenuItem key="Commissions"><Link to="/commissions">Commissions</Link></MenuItem>
    <MenuItem key="Rank Advancement"><Link to="/rank">Rank Advancement</Link></MenuItem>
    <MenuItem key="Volumes"><Link to="/volumes">Volumes</Link></MenuItem>
  </SubMenu>,
  nestSubMenu,
  <SubMenu title={<span className="submenu-title-wrapper">Events</span>} key="2">
    <MenuItem key="Calendar">Calendar</MenuItem>
    <MenuItem key="Subscriptions">Subscriptions</MenuItem>
  </SubMenu>,
  <SubMenu title={<span className="submenu-title-wrapper">Orders</span>} key="3">
    <MenuItem key="Inventory Orders">Inventory Orders</MenuItem>
    <MenuItem key="Personal Use Orders">Personal Use Orders</MenuItem>
    <MenuItem key="Sales">Sales</MenuItem>
  </SubMenu>,
  <SubMenu title={<span className="submenu-title-wrapper">Resources</span>} key="4">
    <MenuItem key="Resources Library">Resources Library</MenuItem>
  </SubMenu>,
  <SubMenu title={<span className="submenu-title-wrapper">Store</span>} key="5">
    <MenuItem key="Products">Products</MenuItem>
    <MenuItem key="MyCart"><Link to="/cart">My Cart</Link></MenuItem>
    <MenuItem key="Bulk Order">Bulk Order</MenuItem>
  </SubMenu>,
  <MenuItem key="6">Company News</MenuItem>,
  <MenuItem key="7">Yoofoo</MenuItem>,
];


export default class HomeHeaderscreen extends Component {

  state = {
    children: children1,
    overflowedIndicator: undefined,
  }
  toggleChildren = () => {
    this.setState({
      children: this.state.children === children1 ? children2 : children1,
    });
  }
  toggleOverflowedIndicator = () => {
    this.setState({
      overflowedIndicator:
        this.state.overflowedIndicator === undefined ?
          customizeIndicator :
          undefined,
    });
  }

  render() {
    const BASE_URL = '#'
    const { triggerSubMenuAction } = this.props;
    const { children, overflowedIndicator } = this.state;
    return (
      <div>
        <div className="container">
          <div className="row Header">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3">
                  <div className="logo">
                    <a href={BASE_URL}><img className="img-fluid logopdng" src="../src/images/logo.png" alt="logo"></img></a>
                  </div>
                </div>
                <div className="col-md-6"></div>
                <div className="col-md-3">

                  <div className="dropdown margintop-5">
                    <a className="dropdown-toggle" data-toggle="dropdown">
                      <img src="../src/images/profiles/jeff.png" className="avatar avatar-xs"></img> Jeff Boonmee <b className="caret"></b>
                    </a>
                    <ul className="dropdown-menu col-2 dropdown-menu-unstyled">
                      <li>
                        <div className="panel panel-default">
                          <div className="panel-body">
                            <div className="row margin-15">
                              <div className="col-sm-4">
                                <div className="text-center">
                                  <a href="/account/avatar" title="Edit">
                                    <img src="../src/images/profiles/jeff.png" className="avatar"></img>
                                  </a>
                                </div>
                              </div>
                              <div className="col-sm-8">
                                <h5>Jeff Boonmee</h5>
                                <small className="text-muted">ID# 12345</small>
                                <div className="space-10"></div>
                                <a id="" href="/">View Profile</a>
                              </div>
                            </div>
                          </div>
                          <div className="panel-footer">
                            <div className="row">
                              <div className="col-sm-6">
                                <a href="/account/settings" className="btn btn-default btn-sm">Change settings</a>
                              </div>
                              <div className="col-sm-6">
                                <Link to="/">
                                  <a href="/#/home" className="btn btn-default btn-sm pull-right">Sign out</a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-10 pr0">
                  <div>
                    {this.props.updateChildrenAndOverflowedIndicator && <div>
                      <button onClick={this.toggleChildren}>toggle children</button>
                      <button onClick={this.toggleOverflowedIndicator}>toggle overflowedIndicator</button>
                    </div>}
                    <Menu
                      onClick={handleClick}
                      triggerSubMenuAction={triggerSubMenuAction}
                      onOpenChange={onOpenChange}
                      selectedKeys={['3']}
                      mode="horizontal"
                      openAnimation={this.props.openAnimation}
                      defaultOpenKeys={this.props.defaultOpenKeys}
                      overflowedIndicator={overflowedIndicator}
                    >
                      {children}
                    </Menu>
                  </div>
                </div>
                <div className="col-md-1 mycart pl0 aselect">
                  <Link to="/cart">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i> My Cart
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    )
  }
}