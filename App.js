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
import { Header } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";


export default class App extends Component {

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
  }


  render() {
    return (
      <View >
        <Header headerText = "Authentication" />
        <LoginForm />
      </View>
    );
  }
}
