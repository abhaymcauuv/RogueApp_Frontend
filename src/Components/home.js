import React, { Component } from 'react';
import HomeHeaderscreen from './homeheader';
import PageFooter from './footer';
import '../styles/styles.css';

class HomeScreen extends Component {
  onSignIn = () => {
    this.props.history.push('/dashboard');
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row content">
            <div className="container">
              <div className="row">
                <div className="col-sm-4"> </div>
                <div className="col-sm-4">
                  <div className="loginform">
                    <form>
                      <h2 className="text-center">
                      <img className="img-fluid logopdng1" src="../src/images/logo.png" alt="logo"></img>
                      </h2>
                      <div className="form-group">
                        <input type="text" className="form-control forminput" placeholder="Username" required="required"></input>
                      </div>
                      <div className="form-group">
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
