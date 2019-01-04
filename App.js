/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from "firebase";
import { Header, Button, Spinner } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";


export default class App extends Component {

  constructor(props){
    super(props);

    this.state = { loggedIn: null}
  }

  componentWillMount(){

    firebase.initializeApp(
      {
        apiKey: 'AIzaSyDo2BT6kwNCWEHn1Ik4Pq6PDQ6Lj5z0Ko0',
        authDomain: 'auth-udemy-6cf5c.firebaseapp.com',
        databaseURL: 'https://auth-udemy-6cf5c.firebaseio.com',
        projectId: 'auth-udemy-6cf5c',
        storageBucket: 'auth-udemy-6cf5c.appspot.com',
        messagingSenderId: '884312596049'
      }
    );
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({loggedIn: true});
      }else{
        this.setState({loggedIn: false});
      }
    });
    
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
        return (<Button onPress={()=>firebase.auth().signOut()} > Log Out </Button>);        
      case false:
        return <LoginForm />
      default:
        return(<Spinner size="large" />)
    }
  }

  render() {
    return (
      <View >
        <Header headerText = "Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
