import React from 'react';
import {Animated, Easing, StyleSheet, TouchableOpacity,  ToastAndroid, Button, Text, View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class ImageLoader extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      opacity: new Animated.Value(0),
    }
  }

  onLoad = () => {
    this.state.opacity.setValue(0.8)
    Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 500, 
        useNativeDriver: true,
    }).start(function onComplete() {
    });
  }

  render() {
  return (
    <Animated.Image 
      onLoad={this.onLoad}
      {...this.props}
      style={[
          {
              opacity: this.state.opacity,
              transform: [
                  {
                      translateX: this.state.opacity.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, 0],
                      })
                  }
              ]
          },
          this.props.style,
      ]}
      />
  )}
}

export default class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: new Animated.Value(0),
      test: 'test',
      dot1_uri: require('../assets/images/page_dot_c.png'),
      dot2_uri: require('../assets/images/page_dot.png'),
      dot3_uri: require('../assets/images/page_dot.png'),
      dot4_uri: require('../assets/images/page_dot.png'),
      landing_uri: require('../assets/images/landing1.png'),
      landing_text: 'Be On Schedule'
    }
    timer = null;
    counter = 1;
  }
  
  static navigationOptions = ({ navigation, navigationOptions }) => ({
    header: null,
  });

  tick=()=>{
    counter ++;
    if(counter > 4) {
      counter = 1;
    }
    this.setState({
      dot1_uri: require('../assets/images/page_dot.png'),
      dot2_uri: require('../assets/images/page_dot.png'),
      dot3_uri: require('../assets/images/page_dot.png'),
      dot4_uri: require('../assets/images/page_dot.png')
    });
    switch (counter) {
      case 1:
        this.setState({dot1_uri: require('../assets/images/page_dot_c.png'), landing_uri: require('../assets/images/landing1.png'), landing_text: 'Be On Schedule'});
        break;
      case 2:
        this.setState({dot2_uri: require('../assets/images/page_dot_c.png'), landing_uri: require('../assets/images/landing2.png'), landing_text: 'Be Located'});
        break;
      case 3:
        this.setState({dot3_uri: require('../assets/images/page_dot_c.png'), landing_uri: require('../assets/images/landing3.png'), landing_text: 'Be En Route'});
        break;
      case 4:
        this.setState({dot4_uri: require('../assets/images/page_dot_c.png'), landing_uri: require('../assets/images/landing4.png'), landing_text: 'Be Driven'});
    break;
      default:
    }
  }
  
  componentDidMount() {
    this.timer = setInterval(this.tick, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <View style={styles.container} >
        <ImageLoader style={{width: '100%', height: '100%', position: 'absolute'}} source={this.state.landing_uri} />
        <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute'}} >
          <Image style={{width: 150, height: 60, top: 50, resizeMode:'contain'}} source={require('../assets/images/logo_title.png')} />
          <Text style={{top: 70, color: 'white', fontSize: 22, fontFamily: 'Roboto-Light'}}>{this.state.landing_text}</Text>
        </View>
        <View style={{flex: 2, width:'100%',  flexDirection: 'row', position: "absolute", bottom: 0, height: 60}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{flex: 0.99, backgroundColor: '#18ab60', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color:'white', fontSize:16, fontFamily: 'Roboto-Light'}}>Log In</Text>
          </TouchableOpacity >
          <View style={{flex:0.02}} />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')} style={{flex: 0.99, backgroundColor: '#18ab60', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color:'white', fontSize:16, fontFamily: 'Roboto-Light'}}>I'm New</Text>
          </TouchableOpacity >
        </View>
        <View style={{position:'absolute', width:'100%', flexDirection: 'row', bottom:65, justifyContent: 'center', alignItems: 'center'}}>
          <Image style={{width: 7, height: 7}} source={this.state.dot1_uri} />
          <View style={{width:4}} />
          <Image style={{width: 7, height: 7}} source={this.state.dot2_uri} />
          <View style={{width:4}} />
          <Image style={{width: 7, height: 7}} source={this.state.dot3_uri} />
          <View style={{width:4}} />
          <Image style={{width: 7, height: 7}} source={this.state.dot4_uri} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
