import React, {Component} from 'react';

import {Text, View, StyleSheet, StatusBar, Dimensions, ScrollView, Button,TouchableOpacity,TouchableHighlight,} from 'react-native';

import {
  LinearGradient
} from 'expo';

import * as Animatable from 'react-native-animatable';

const {width, height} = Dimensions.get('window');


export default class ListView extends Component{

  golo(index){
    console.log("golo",index);
    //this.refs.rah.transitionTo({opacity: 0.2});
  }


Lister(){

             return  this.props.todoList.map((item, index) => (
              <Animatable.View animation="slideInDown" key = {index} ref="rah" >

              	<LinearGradient start={[0,1]} end={[1,1]} colors={['#eef2f3', '#8e9eab']} style={styles.gradient} onPress= { () => {this.golo(index)} }>

							<Text style={styles.todoText} >{item}</Text>

						    <View style = {styles.edit_cont}>
							   	<TouchableOpacity onPress = { () => { this.props.edit(index) } }>
							   		<Text style = {styles.edit_text_cont}>
							   			Edit
							   		</Text>
							   	</TouchableOpacity>
						   	</View>

							<View style = {styles.del_cont}>
								 <TouchableOpacity onPress = { () => { this.props.delete(index) } }>
								    <Text style = {styles.del_text_cont}>
								       X
								    </Text>
								 </TouchableOpacity>
							</View>


      			</LinearGradient>


						</Animatable.View>

          ));

}



	render(){
		return(
            <ScrollView>
              {  this.Lister() }
            </ScrollView>

			);
	}
}

const styles = StyleSheet.create({

gradient: {minHeight:80, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, borderColor: "gray",
      borderWidth: 1, marginBottom: 2},

   todoText:{
   	width: 100,
   	backgroundColor: 'transparent',
   	color: 'black',
   },
	edit_cont:{
		position: "absolute",
		right: 60,
	},
   del_cont: {
      position: "absolute",
      right: 14,
   },

  edit_text_cont:{
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    backgroundColor: '#f4bc42',
    color: 'white',
    fontSize: 12,
    fontWeight: "bold"
  },


 del_text_cont: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    backgroundColor: '#f44141',
    color: 'white',
    fontSize: 12,
    fontWeight: "bold"
 },

 button:{
 		borderColor: 'red'
 }

});
