import React, { Component, PropTypes } from 'react';
import {Text, TouchableHighlight, View, StyleSheet, Button } from 'react-native';

export default class MyScene2 extends Component {


  // static navigationOptions = ({ navigation }) => ({
  //   title: `Hello ${navigation.state.params.user}`,
  // });



static navigationOptions = {  headerLeft: <Button title="Info" />,

 };

  render() {
   // const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Two</Text>

      </View>
    )
  }
}

