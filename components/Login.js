import React from 'react';
import {StyleSheet, TouchableOpacity,KeyboardAvoidingView, StatusBar,  ToastAndroid, TextInput, Text, View, Image } from 'react-native';
import { Constants } from 'expo';
import CountryPicker, {getAllCountries} from 'react-native-country-picker-modal'

export default class Login extends React.Component {
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
    login=(val)=> {
      // ToastAndroid.show(this.countryPicker.cca2, ToastAndroid.SHORT);
    }
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header} >
          <Image style={{width: 130, height: 30, top: 10, resizeMode:'contain'}} source={require('../assets/images/app_logo_green.png')} />
        </View>
        <KeyboardAvoidingView behavior="padding" style={{flex:1, justifyContent:'flex-end'}} enabled>
          <Text style={{fontSize:30, fontWeight:'400', left: 20, color:'#777777', fontFamily: 'Roboto-Light'}}>Login</Text>
          <View style={{justifyContent:'center', height:30, marginTop:100, width:'100%'}} >
              <Text style={{fontSize:20, fontFamily: 'Roboto-Light', left:20, position:'absolute'}}>Country</Text>
              <View style={{flexDirection: 'row',justifyContent:'flex-end', alignItems:'center', right:30, position:'absolute'}}>
                <CountryPicker
                  style={{}}
                  onChange={value => {
                    this.setState({ cca2: value.cca2, callingCode: value.callingCode, countryName: value.name})
                  }}
                  cca2={this.state.cca2}
                  translation="eng" >
                  <Text style={{fontSize:15, color:'#777777', fontFamily: 'Roboto-Light'}}>{this.state.countryName}  ></Text>
                </CountryPicker>
              </View>
          </View>
          <View style={{width: '100%', marginTop:20}}>
            <View style={{height:1, backgroundColor:'#dddddd', marginLeft:5, marginRight:5}} />
            <View style={{height:1, backgroundColor:'#dddddd', marginLeft:5, marginRight:5, marginTop:60}} />
            <View style={{backgroundColor:'#dddddd', marginLeft:100, width:1, marginTop:5, height:55, position:'absolute'}} />
            <View style={{height:'100%', width:'100%', position:'absolute', flexDirection:'row'}} >
                <View style={{width: 100, height:'100%', position:'absolute', alignItems: 'center', justifyContent: 'center'}} >
                  <CountryPicker
                    style={{}}
                    onChange={value => {
                      this.setState({ cca2: value.cca2, callingCode: value.callingCode, countryName: value.name})
                    }}
                    cca2={this.state.cca2}
                    translation="eng" >
                    <Text style={{fontSize:20, fontFamily: 'Roboto-Light', color: '#18ab60'}}>+{this.state.callingCode}</Text>
                  </CountryPicker>
                </View>
                <View style={{left: 101, right:0, height:'100%', position:'absolute', alignItems: 'center', justifyContent: 'center'}} >
                  <TextInput style={{height: '100%',borderColor: 'gray', width: '80%', fontSize:20, fontFamily: 'Roboto-Light', borderBottomColor: 'transparent',}}
                    keyboardType='numeric'
                    placeholder='phone number'
                    underlineColorAndroid='rgba(0,0,0,0)'
                  />
                </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')} style={{alignItems:'center', marginLeft:20, justifyContent:'center', height:50, width:100, marginTop:40, backgroundColor:'#18ab60'}} >
              <Text style={{color:'white', fontSize:15, fontFamily: 'Roboto-Light'}}>Login</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row', alignItems: 'center', marginBottom:30, marginLeft:20, marginTop:30}}>
            <Text style={{fontSize:15, fontFamily: 'Roboto-Light'}}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')} style={{backgroundColor:'transparent', marginLeft: 10}} >
              <Text style={{color: '#18ab60', fontSize:15, fontFamily: 'Roboto-Light'}}>Sign Up</Text>
            </TouchableOpacity>
          </View>          
        </KeyboardAvoidingView>
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
    paddingTop: 15 + Constants.statusBarHeight,
    padding: 15,
    // backgroundColor: '#336699',
    alignItems:'center',
  },
});
