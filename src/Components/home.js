import React, { Component } from 'react';
import HomeHeaderscreen from './homeheader';
import PageFooter from './footer';
import '../styles/styles.css';
import { useHistory } from 'react-router-dom';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  onSignIn = () => {
    //console.log("click prop- ",this.props.history);
    //this.props.history.push('/dashboard');
    window.location.href="#/dashboard"
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="content">
            <div className="">
              <div className="row">
                <div className="col-sm-4"> </div>
                <div className="col-sm-4">
                  <div className="loginform">
                    <form>
                      <div className="text-center">
                      <img className="logopdng1 pl0 pr0" src="../src/images/rogue_logo.png" alt="logo"></img>
                      </div>
                      <div className="form-group">
                      <i class="fa fa-user usericon" aria-hidden="true"></i>
                        <input type="text" className="form-control forminput" placeholder="Username" required="required"></input>
                      </div>
                      <div className="form-group">
                      <i class="fa fa-lock usericon" aria-hidden="true"></i>
                        <input type="password" className="form-control forminput" placeholder="Password" required="required"></input>
                      </div>
                      <div className="form-group btnmgn">
                        <button type="submit" className="btn btn-primary btn-sm btnpdng" onClick={this.onSignIn}>Sign in</button>
                        <a href="#" className="pull-right">Forgot Password?</a>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-sm-2"> </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default HomeScreen;
