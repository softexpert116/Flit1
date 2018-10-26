import React from 'react';
import {StyleSheet, TouchableOpacity,KeyboardAvoidingView, StatusBar,  ToastAndroid, TextInput, Text, View, Image } from 'react-native';
import { Constants } from 'expo';
import CountryPicker, {getAllCountries} from 'react-native-country-picker-modal'

export default class SignupPhoneVerify extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cca2: 'US',
      callingCode: 1,
      countryName: 'United States'
    }
  }
  
  static navigationOptions = ({ navigation, navigationOptions }) => ({
    header: null,
  });

  componentDidMount() {
  }

  componentWillUnmount() {
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header} >
          <Image style={{width: 130, height: 30, resizeMode:'contain'}} source={require('../assets/images/app_logo_green.png')} />
          <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Main')} 
                style={{marginTop:80, position:'absolute', right:50}} >
                <Image style={{width: 30, height: 30}} source={require('../assets/images/arrow.png')} />
            </TouchableOpacity>
        </View>
        {/* <KeyboardAvoidingView behavior="padding" style={{flex:1, justifyContent:'flex-end'}} enabled> */}
          <View style={{width:'100%', alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize:15, fontWeight:'300', color:'#aaaaaa', fontFamily: 'Roboto-Light'}}>Your Phone number</Text>
            <Text style={{marginTop:20, fontSize:30, color:'#777777', fontFamily: 'Roboto-Light'}}>+13012345678</Text>
            <TextInput 
              style={{marginTop:60, padding:15, width:150, fontSize:20, fontFamily: 'Roboto-Light', color:'#777777'}} 
              underlineColorAndroid='rgba(0,0,0,0.3)'
              placeholder='Code'
              keyboardType='numeric'
              />
            <Text style={{marginTop:50, fontSize:15, color:'#aaaaaa', fontFamily: 'Roboto-Light'}}>We sent the code via SMS</Text>
            <TouchableOpacity 
              // onPress={() => this.props.navigation.navigate('Login')} 
              style={{backgroundColor:'transparent', marginLeft: 10, marginTop:60}} 
              >
              <Text style={{color: '#18ab60', fontSize:16, fontFamily: 'Roboto-Light'}}>Haven't received the code?</Text>
            </TouchableOpacity>
            <View style={{width:190, backgroundColor:'#18ab60', height:0.5}} />
          </View>
        {/* </KeyboardAvoidingView> */}
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
