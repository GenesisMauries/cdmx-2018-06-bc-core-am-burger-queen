import React, { Component } from 'react';
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth' // Da directamente los botenes y el acceso a la utenticacion y StyledFirebaseAuth redireccina al inicio de sesion y se liga directamente con css
import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './css/Login.css'


firebase.initializeApp({
  apiKey: "AIzaSyBCu6E1u8eLveoO4RNeXkBdEbKVQfy8KXw",
  authDomain: "ejerciciocrud.firebaseapp.com",
  databaseURL: "https://ejerciciocrud.firebaseio.com",
  projectId: "ejerciciocrud",
  storageBucket: "ejerciciocrud.appspot.com",
  messagingSenderId: "430144992013"
});


class Login extends Component {
  state = { isSingedIn: false }
  uiConfig = {
    signInFlow: 'redirect',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
      //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebase.auth.EmailAuthProvider.PROVIDER_ID
      //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
      //   firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSucess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSingedIn: !!user })
    })
  }

  render() {
    return (
      <div className="App" >
        {this.state.isSingedIn ? (
          <div>
            <Nav userName={firebase.auth().currentUser.displayName} userPhoto={firebase.auth().currentUser.photoURL} out={() => firebase.auth().signOut()} />
          </div>
        ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
      </div>
    )
  }
}

export default Login;
