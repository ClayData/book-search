import React from 'react';
import GoogleBtn from './GoogleBtn'

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
      this.auth.signIn().then(res => {
        sessionStorage.setItem("currentUser", this.auth.currentUser.le.Tt.Bd)
        this.props.updateUser()
      })
      
    }

    onSignOutClick = () => {
      this.auth.signOut().then(res => {
      sessionStorage.clear();
      this.props.updateUser()
        }
      )
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return null;
        }else if(this.state.isSignedIn){
            return <GoogleBtn onClick={this.onSignOutClick} >Google Sign Out</GoogleBtn>
        }
        else{
            return <GoogleBtn onClick={this.onSignInClick} >Google Sign In</GoogleBtn>
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