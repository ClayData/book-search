import React, { useState ,useEffect } from 'react';


class GoogleAuth extends React.Component {
    state = { isSignedIn: null }

    componentDidMount() {
      window.gapi.load('client:auth2', () => {
        window.gapi.client.init({
          clientId: "638408205491-7hkejfdaqiuc2dq8m0kb2bn1jn4q4vs1.apps.googleusercontent.com",
          scope: 'email'
      }).then(() => {
          this.auth = window.gapi.auth2.getAuthInstance()
          this.setState({ isSignedIn: this.auth.isSignedIn.get() })
          this.auth.isSignedIn.listen(this.onAuthChange)
      });
      })
    }

    onAuthChange = () => {
      this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    }

    onSignInClick = () => {
      this.auth.signIn()
    }

    onSignOutClick = () => {
      this.auth.signOut()
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return null;
        }else if(this.state.isSignedIn){
            return <button onClick={this.onSignOutClick}>Sign Out</button>
        }
        else{
            return <button onClick={this.onSignInClick}>Sign In</button>
        }
    }

    render(){
      return(
        <div>
          <div>{this.renderAuthButton()}</div>
          
        </div>
      )
    }
}

export default GoogleAuth;