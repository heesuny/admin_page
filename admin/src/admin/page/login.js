import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className='contain__wrap'>
        <div className="login_wrap">
          <div className="login_inner">
            <div className="login_text">
              <h2 className="title">Welcome back</h2>
              <p className="description">Login to your account</p>
            </div>
            <div className="login_form">
              <div className="form_item">
                <p className="title">Account ID*</p>
                <p className="login_input"><input type="text" placeholder="Account" /></p>
              </div>
              <div className="form_item">
                <p className="title">Password*</p>
                <p className="login_input"><input type="password" placeholder="Password" /></p>
              </div>
              <div className="form_item">
                <label>
                  <input type="checkbox" name="" id="" />
                  <span>Remember &amp; Auto Login</span>
                </label>
              </div>
              <div className="login_form">
                <div className="login_btn">Login</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;