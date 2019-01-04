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
        <apiKEY>
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
