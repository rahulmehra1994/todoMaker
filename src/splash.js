import React from 'react';
import { Animated, Text, View, Dimensions, StyleSheet} from 'react-native';


//note : x direction in mobile is according to landscape view
const {width, height} = Dimensions.get('window');


class Splash extends React.Component {

  static navigationOptions = {
    header: null
 };


  state = {
    boxAnim: new Animated.Value(50),
    textAnim: new Animated.Value(5),
    borderAnim: new Animated.Value(0),
    opacity: new Animated.Value(0),
    moveInScreen: new Animated.ValueXY({x: 0, y:0}),
  }



  componentDidMount() {

    const { navigate } = this.props.navigation;
    Animated.timing(
     this.state.boxAnim,
      {
        toValue: 200,
        duration: 1000,
      }
    ).start();

      Animated.timing(
     this.state.textAnim,
      {
        toValue: 30,
        duration: 1000,
      }
    ).start();

      Animated.timing(
     this.state.borderAnim,
      {
        toValue: 30,
        duration: 1000,
      }
    ).start();

      Animated.timing(
     this.state.opacity,
      {
        toValue: 1,
        duration: 1000,
        delay:500,
      }
    ).start();

     Animated.timing(
     this.state.moveInScreen,
      {
        toValue: { x : height/2, y : 0 },
        duration: 1000,
      }
    ).start();




  }


  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "gray"}}>
         <Animated.View
          style={{
            backgroundColor: "gold",
            height:55,
            width: this.state.boxAnim,
            // height: this.state.boxAnim,
            borderRadius:this.state.borderAnim,
            opacity: this.state.opacity,
            position: "absolute",
            top: this.state.moveInScreen.x,
          }}
        >
        <Animated.Text style={{fontSize: this.state.textAnim, textAlign: 'center', margin: 10}}>TodoMaker</Animated.Text>
        </Animated.View>
      
      </View>
    );
  }
}


export default Splash;

const styles = StyleSheet.create({
box:{ backgroundColor: "gold", height:55}

});
