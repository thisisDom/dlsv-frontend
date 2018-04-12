import React, { Component } from 'react';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import googleButton from '../../assets/images/google_signin_buttons/web/vector/btn_google_light_normal_ios.svg';
import './Login.css';


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: false
    }
    this.loginResponse = this.loginResponse.bind(this)
    this.loginError = this.loginError.bind(this)
  }

  loginResponse(googleUser){
    axios({
      url: 'https://dlsv-api.herokuapp.com/login',
      method: 'POST',
      data: {
        user: googleUser.getAuthResponse().id_token
      },
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      responseType: "json"
    })
    .then(response => {
      this.props.setUser(googleUser);
    })
    .catch(error =>{

    })
  }
  loginError(){
    this.setState({
      error: true
    })
  }
  render(){
    return (
      <div className="login-container">
        <div className="login-paper-container">
          <div className="login-paper-title">Must Login with Google Account to Continue</div>
          <GoogleLogin
            className="login-button"
            clientId="921339387377-4d7ia61mucajgl5u2icoetmcbti7rchc.apps.googleusercontent.com"
            buttonText=""
            onFailure={() => this.loginError}
            onSuccess={(e) => this.loginResponse(e)}
            discoveryDocs="https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"
            scope="https://www.googleapis.com/auth/youtube"
            >
            <img src={googleButton} alt=""/><span className="button-text"> Sign In with Google</span>
            </GoogleLogin>
            { this.state.error && <h4>Sorry, an error occured with your login. Please, try again later</h4>}
          </div>
      </div>
    )
  }
}

export default Login
