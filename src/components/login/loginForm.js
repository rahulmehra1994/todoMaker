import React, {Component} from 'react';

import {Text, View, TextInput, TouchableOpacity, StyleSheet, StatusBar, AsyncStorage } from 'react-native';

export default class LoginForm extends Component{
  state ={
    username:"",
    password:"",
 }

 submit(){
 	try {
  		 AsyncStorage.setItem('username', this.state.username);
	} 
	catch (error) {
	 	alert("Error see console for more info");
	 	console.log(error);
	}
}

seeUsername(){
	try {
  	const value = AsyncStorage.getItem('username');
	  if (value !== null){
		alert(value);	 
	    console.log(value);
	  }
	} 
	catch (error) {
	 	alert("Error see console for more info");
	 	console.log(error);
	}
}

render(){
return(
<View style={styles.container}>
<StatusBar>
</StatusBar>
	<TextInput 
	placeholder='username'
	placeholderTextColor='black'
	returnKeyType='next'
	onSubmitEditing={()=>  this.passwordInput.focus()}
	keyboardType="email-address"
	autoCapitalize="none"
	style={styles.input}
	          autoFocus={true}
          value={this.state.username}
    onChangeText={username => this.setState({username})}
/>


<TextInput 
	ref={(ref) =>  this.passwordInput = ref}
	placeholder="password"
	placeholderTextColor='black'
	returnKeyType='go'
	secureTextEntry 
	autoCapitalize='none'
	style={styles.input}
	          value={this.state.password}
          onChangeText={password => this.setState({password})}
         

/>



<TouchableOpacity style={ styles.buttonContainer} onPress={() => { this.submit()} }>
	<Text style={styles.buttonText}> Login </Text>
</TouchableOpacity>

<TouchableOpacity style={ styles.buttonContainer} onPress={() => { this.seeUsername()} }>
	<Text style={styles.buttonText}> see username </Text>
</TouchableOpacity>

</View>

	);

}
}

var styles=StyleSheet.create({

container:{paddingBottom:100},

input: {height:40, borderColor : "grey", backgroundColor: "white", marginBottom:200, color: "#000", paddingHorizontal: 10}, 

buttonContainer: {backgroundColor: "#2980b9", paddingVertical: 15},

buttonText: {textAlign: 'center', color: '#FFFFFF', fontWeight: "700"}
	
});