import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';
import './Header.css';

class Header extends Component {

  constructor(props){
    super(props);
    this.logoutResponse = this.logoutResponse.bind(this)
  }

  logoutResponse(){
    this.props.signOut();
  }
  viewLiveStreams(event){
    event.preventDefault();
    this.props.viewLiveStreams();
  }

  render(){
    return (
      <div className="header-wrapper">
        <header className="header-container">
          <div className="header-left-container">
            <button onClick={(e) => this.viewLiveStreams(e)} className="logo-text">LiveStreamViewer</button>
            <div className="yt-logo"/>
          </div>
          <div className="header-right-container">
            <GoogleLogout
              className="signout-button"
              buttonText="Sign Out"
              onLogoutSuccess={() => this.logoutResponse()}
              onLogoutFailure={() => this.logoutResponse()}
            />
          </div>
        </header>
      </div>
    )
  }
}
export default Header
