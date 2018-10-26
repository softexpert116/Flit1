import React from 'react';
import {Animated, Easing, StyleSheet, ActivityIndicator, Loading, TouchableOpacity,  ToastAndroid, Button, Text, View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Loader from '../widgets/Loader';

export default class Splash extends React.Component {
  constructor() {
    super()
    this.state={
        animating: false,
    }
    timer = null;
    counter = 1;
  }
  static navigationOptions = ({ navigation, navigationOptions }) => ({
    header: null,
  });

  tick=()=>{
    // ToastAndroid.show(counter.toString(), ToastAndroid.SHORT);
    counter ++;
    if(counter > 4) {
        this.setState({animating: false})
        clearInterval(this.timer);
        this.props.navigation.navigate('Landing')
    } else if(counter > 2) {
        this.setState({animating: true})
    }

  }
  
  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <View style={styles.container} >
        <Image style={{width: '100%', height: '100%', position: 'absolute'}} source={require('../assets/images/landing1.png')} />
        <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute'}} >
          <Image style={{width: 150, height: 60, top: 50, resizeMode:'contain'}} source={require('../assets/images/logo_title.png')} />
          <Text style={{top: 70, color: 'white', fontSize: 25, fontWeight:'300'}}>A Surge Free Ride</Text>
          {/* <ActivityIndicator
               animating = {this.state.animating}
               color = '#bc2b78'
               size = "large"
               style = {styles.activityIndicator}/> */}
               <Loader hide={this.state.animating} loading={this.state.animating}/>
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
  activityIndicator: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    height: 80
 }
});
