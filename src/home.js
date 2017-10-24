import React, {Component} from 'react';

import {View, TextInput, TouchableOpacity, StyleSheet, StatusBar, AsyncStorage,Dimensions,ScrollView, KeyboardAvoidingView, Alert } from 'react-native';

import {   Container,
  Header,
  Left,
  Button,
  Body,
  Title,
  Icon,
  Right,
  Content,
  ActionSheet,
  Text,Badge,Footer, FooterTab,Form, Item, Input  } from 'native-base';

const {width, height} = Dimensions.get('window');

import ListView from './components/listView.js';

import * as Animatable from 'react-native-animatable';

import {Expo,Font } from 'expo';


export default class Home extends Component{


static navigationOptions = {
    //header: null  
 };



   state ={
     currIndex: "",
     todo:"",
     password:"",
     todoState:[],
     currArray:[],
     deletedValue: "",
     isButtonVisible: true,
     fontLoaded: false ,
     clicked:"",
     behavior: 0,
  }

  async componentWillMount() {
       await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  this.setState({ fontLoaded: true });
}

componentDidMount(){
    try {

      var keysLocal = [];

      AsyncStorage.getAllKeys((error, keys) => {

        keysLocal = keys;

        if( keysLocal.indexOf("usersTodo") > -1){
          AsyncStorage.getItem('usersTodo', (err, result) => {
            //console.log("hi i am result",result);
            console.log("status in getting the second usersTodo AsyncStorage: ", err);
            this.setState( { currArray: JSON.parse(result) } );
            console.log( this.state.currArray );
          });
        }
        else{
          AsyncStorage.setItem('usersTodo', JSON.stringify([]),(error)=>{
            console.log("status in setting first usersTodo AsyncStorage: ", error);
          });
        }

      });//getAllKeys




    }//try
      catch (error) {
        // alert("Error see console for more info");
        console.log(error);
      }
 }


 submit(){
  try {

      this.state.currArray.push(this.state.todo);
      //console.log(this.state.currArray);

      AsyncStorage.setItem('usersTodo', JSON.stringify(this.state.currArray),(error)=>{
        console.log("Error in setting currArray from submit function: ",error);
        this.setState({todo:""});
      });


  }
  catch (error) {
    alert("Error - see console for more info");
    console.log(error);
  }
}



  render(){
  return(
    <KeyboardAvoidingView behavior="height">

            <View style={styles.container}>

                <TextInput
                placeholder='Make a todo'
                placeholderTextColor='black'
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
                value={this.state.todo}
                onChangeText={todo => this.setState({todo, behavior: 50})}
                ref= {(ref) => { this.todoInput=ref } }
                />

                { this.state.isButtonVisible ?

                  <TouchableOpacity style={ styles.buttonContainer} onPress={() => { this.submit()} }>
                    <Text style={styles.buttonText}> Make </Text>
                  </TouchableOpacity>
                      :
                  <TouchableOpacity style={ styles.buttonContainer} onPress={() => { this.editPusher()} }>
                    <Text style={styles.buttonText}> Edit </Text>
                  </TouchableOpacity>
                }

            </View>


            <View style={styles.listview} >
              <ListView  todoList={this.state.currArray} delete={ this.handleDelete.bind(this) } edit={ this.handleEdit.bind(this) }/>
            </View>

    </KeyboardAvoidingView>

    );//return

  }//render




handleDelete(index){

  // Works on both iOS and Android
  Alert.alert(
    'Warning',
    'You sure want to delete.',
    [
      {text: 'Cancel', onPress: () => {console.log('Cancel Pressed');}, style: 'cancel'},


        { text: 'OK', onPress: () => {

          this.setState({  deletedValue : this.state.currArray.splice(index, 1) });
          AsyncStorage.setItem('usersTodo', JSON.stringify(this.state.currArray),(error)=>{
            console.log("Error in setting currArray from handleDelete function: ", error);
          });

         console.log('OK Pressed')} 
        },
    ],{ cancelable: false }
  );


  }

  handleEdit(index){

    this.setState({ todo: this.state.currArray[index], currIndex: index, isButtonVisible: false, });

  }

  editPusher(){

        this.state.currArray[this.state.currIndex] = this.state.todo;
          AsyncStorage.setItem('usersTodo', JSON.stringify(this.state.currArray),(error)=>{
          console.log("Error in setting currArray from submit function: ",error);
          this.setState({ todo:"", currIndex: "" , isButtonVisible: true });
        });


  }
}//class

var styles=StyleSheet.create({

  container:{ height: "10%",backgroundColor:"lightblue", display:"flex", flexDirection:"row"},

  input: {height: "100%", paddingLeft: 10, width: "80%", borderColor : "grey", backgroundColor: "white", marginBottom:20, color: "#000"},

  buttonContainer: {height: "100%", width: "20%", backgroundColor: "#2980b9", paddingVertical: 0},

  buttonText: {textAlign: 'center', color: '#FFFFFF', fontWeight: "700",marginTop:13},

  listview: {height:"90%", paddingBottom: 0}

});
