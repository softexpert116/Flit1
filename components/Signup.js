import React from 'react';
import {StyleSheet, TouchableOpacity, StatusBar, Text, View, Image } from 'react-native';
import { Constants } from 'expo';

export default class Signup extends React.Component {
  constructor(props) {
    super(props)
  }
  
  static navigationOptions = ({ navigation, navigationOptions }) => ({
    header: null,
  });

  componentDidMount() {
  }

  componentWillUnmount() {
  }
  render() {
    signup=(val)=> {
      // ToastAndroid.show(this.countryPicker.cca2, ToastAndroid.SHORT);
    }
    const { goBack } = this.props.navigation;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header} >
          <Image style={{width: 130, height: 30, resizeMode:'contain'}} source={require('../assets/images/app_logo_green.png')} />
        </View>
        <Text style={{fontSize:30, fontWeight:'400', left: 20, color:'#777777', fontFamily: 'Roboto-Light'}}>Sign Up</Text>
        <View style={{alignItems:'center', flex:1, padding:10}}>
          <TouchableOpacity onPress={() => signup('0')} style={{backgroundColor:'#3b5998', width:'100%', marginTop:20, alignItems:'center', justifyContent:'center', height:45, marginTop:40}} >
              <Text style={{fontSize:14, color: 'white', fontFamily: 'Roboto-Light'}}>Login with Facebook</Text>
          </TouchableOpacity>
          <View style={{width:'100%', height:1, backgroundColor:'#dddddd', marginTop:20}} />
          <TouchableOpacity 
              onPress={() => this.props.navigation.navigate('SignupPhone')} 
              style={{width:'100%', marginTop:20, alignItems:'center', justifyContent:'center', height:45, backgroundColor:'#18ab60'}} >
              <Text style={{fontSize:14, color: 'white', fontFamily: 'Roboto-Light'}}>Create an Account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goBack(null)} style={{backgroundColor:'transparent', marginTop: 100}} >
            <Image style={{width: 30, height: 30}} source={require('../assets/images/round_back.png')} />
          </TouchableOpacity>
          <View style={{alignItems: 'center', width:'100%', bottom: 0, position:'absolute'}}>
            <View style={{width:'100%', height:1, backgroundColor:'#dddddd'}} />
            <View style={{flexDirection:'row', alignItems: 'center', height:60}}>
              <Text style={{fontSize:15, fontFamily: 'Roboto-Light'}}>Already have an account?</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{backgroundColor:'transparent', marginLeft: 10}} >
                <Text style={{color: '#18ab60', fontSize:15, fontFamily: 'Roboto-Light'}}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>          
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
  header: {
    paddingTop: 50 + Constants.statusBarHeight,
    padding: 50,
    // backgroundColor: '#336699',
    alignItems:'center',
  },
});
