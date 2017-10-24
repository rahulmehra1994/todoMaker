import React, {Component} from 'react';
import { StyleSheet, View, TextInput, Text,  Image} from 'react-native';

import LoginForm from './components/login/loginForm';


export default class Login extends Component{
  static navigationOptions = { 
    header: null
 };

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('./images/1.png')}/>

        </View>

        <View >
            <LoginForm />
        </View>
      </View>

      );
  }
}


var styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor: '#3498db'
  },
  logoContainer : {
    flex:1,
    alignItems : "center",
    justifyContent: "center"

  },
  logo : {
    width: 100,
    height :100
  }
});