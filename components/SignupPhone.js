import React from 'react';
import {StyleSheet, TouchableOpacity,KeyboardAvoidingView, StatusBar,  ToastAndroid, TextInput, Text, View, Image } from 'react-native';
import { Constants } from 'expo';
import CountryPicker, {getAllCountries} from 'react-native-country-picker-modal'

export default class SignupPhone extends React.Component {
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
    linkTermsURL=()=>{
      Linking.canOpenURL(item.url).then(supported => {
        if (supported) {
          Linking.openURL(item.url);
        } else {
          console.log("Don't know how to open URI: " + this.props.url);
        }
      });
    }
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header} >
          <Image style={{width: 130, height: 30, resizeMode:'contain'}} source={require('../assets/images/app_logo_green.png')} />
        </View>
        <KeyboardAvoidingView behavior="padding" style={{flex:1, justifyContent:'flex-end',marginTop:-15, backgroundColor:'transparent'}} enabled>
          <View style={{width:'100%', alignItems:'center', justifyContent:'center',}}>
            <Text style={{fontSize:30, fontWeight:'400', color:'#000', fontFamily: 'Roboto-Light'}}>Your Phone</Text>
            <Text style={{marginTop:20, fontSize:13, color:'#aaaaaa', fontFamily: 'Roboto-Light'}}>Please confirm your country code and</Text>
            <Text style={{marginTop:10, fontSize:13, color:'#aaaaaa', fontFamily: 'Roboto-Light'}}>enter your phone number</Text>
          </View>
          <View style={{justifyContent:'center', height:30, marginTop:50, width:'100%'}} >
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
          <View style={{justifyContent:'center', alignItems:'center', width:'100%'}}>
            <View style={{justifyContent:'center', flexDirection:'row', marginTop:30}}>
                <Text style={{color:'#aaaaaa', fontSize:13, fontFamily: 'Roboto-Light'}}>By signing up you agree to our </Text>
                <TouchableOpacity
                  onPress={() => linkTermsURL() }
                  ><Text style={{color:'#18ab60', fontSize:13, fontFamily: 'Roboto-Light'}}>Terms of Service</Text></TouchableOpacity>
            </View>
            <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('SignupPhoneVerify')} 
                style={{marginTop:20}} >
                <Image style={{width: 30, height: 30}} source={require('../assets/images/arrow.png')} />
            </TouchableOpacity>
          </View>
          <View style={{height:'25%'}}></View>
        </KeyboardAvoidingView>
        <View style={{justifyContent:'center',alignItems:'center', width:'100%', bottom:0, height:66, position:'absolute'}}>
            <View style={{backgroundColor:'#dddddd', height:1, width:'95%'}} />
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', height:65, width:'100%'}}>
              <Text style={{fontSize:15, fontFamily: 'Roboto-Light'}}>Already have an account?</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{backgroundColor:'transparent', marginLeft: 10}} >
                <Text style={{color: '#18ab60', fontSize:15, fontFamily: 'Roboto-Light'}}>Sign In</Text>
              </TouchableOpacity>
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
    paddingTop: 10 + Constants.statusBarHeight,
    padding: 10,
    // backgroundColor: '#336699',
    alignItems:'center',
    backgroundColor:'transparent'
  },
});
