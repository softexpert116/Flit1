import React, {Component} from 'react';
import {TouchableOpacity,KeyboardAvoidingView, TouchableWithoutFeedback,TextInput, StyleSheet, Image, Text, View } from 'react-native';
import {DrawerActions} from 'react-navigation';
import {Header} from 'react-native-elements'
import CountryPicker, {getAllCountries} from 'react-native-country-picker-modal'

  export default class EditProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          cca2: 'US',
          callingCode: 1,
          countryName: 'United States'
        }
      }
    render() {
        const { goBack } = this.props.navigation;

      return (
        <View style={styles.container}>
            <Header
                backgroundColor='#fff'
                marginTop={10}
                leftComponent={
                    <TouchableOpacity 
                        style={{backgroundColor:'transparent',height:'100%', justifyContent:'center', alignItems: 'center'}} 
                        onPress={() => goBack()}>
                        <Image style={{width: 15, height: 15, marginTop:12, resizeMode:'contain'}} source={require('../assets/images/ic_back.png')} />
                    </TouchableOpacity>
                }
                rightComponent={
                    <TouchableOpacity 
                        style={{backgroundColor:'transparent',height:'100%', justifyContent:'center', alignItems: 'center'}} 
                        onPress={() => goBack()}>
                        <Text style={{marginTop:12, color:'#18ab60', fontFamily:15, fontFamily: 'Roboto-Light'}} >Done</Text>
                    </TouchableOpacity>
                    }
                centerComponent={
                    <Text style={{fontSize: 23,marginLeft:10, marginTop:10, fontFamily: 'Roboto-Light',}}>Edit Profile</Text>  
                }
                />
            <Image style={{width: '100%', height: 8, top:-2}} source={require('../assets/images/boarder.png')} />
            <View style={[styles.container, { backgroundColor:'transparent', marginTop:-8 , alignItems:'center'}]} >
                <View style={{width:'100%', height:40, marginTop:0, justifyContent:'center', backgroundColor:'#efefef'}}>
                    <Text style={{fontSize:15, marginLeft:20, fontFamily: 'Roboto-Light'}} >General</Text>
                </View>
                
                
                <View style={{width:'100%', }}>
                    <TouchableOpacity 
                        style={{flexDirection:'row', alignItems:'center', width:'100%', height:60}}>
                        <Image style={{marginLeft:20, width: 30, height: 30, borderRadius:15}} source={require('../assets/images/person.png')} />
                        <Text style={{marginLeft:20, fontSize:18, fontFamily: 'Roboto-Light'}} >Profile Picture</Text>
                        <Text style={{color:'#18ab60', right:20, fontFamily: 'Roboto-Light', position:'absolute', justifyContent:'flex-end'}} >Edit</Text>
                    </TouchableOpacity>
                    <View style={{backgroundColor:'#dddddd', height:1, width:'100%', marginLeft:80}} />                
                </View>
                <View style={{width:'100%'}}>
                    <TouchableWithoutFeedback >
                        <View style={{flexDirection:'row', alignItems:'center', width:'100%', height:60}}>
                            <Image style={{marginLeft:13, width: 35, height: 40, resizeMode:'contain'}} source={require('../assets/images/menu_item1.png')} />
                            <Text style={{marginLeft:20, fontSize:18, fontFamily: 'Roboto-Light'}} >Full Name</Text>
                            <TextInput 
                                style={{textAlign:'right', right:20, position:'absolute', justifyContent:'flex-end', width:150, fontFamily:'Roboto-Light', fontSize:18}} 
                                placeholder='Full Name'
                                value='Tobi Mac'                            
                                underlineColorAndroid='rgba(0,0,0,0)'
                                />
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={{backgroundColor:'#dddddd', height:1, width:'100%', marginLeft:80}} />                
                </View>
                <View style={{width:'100%'}}>
                    <TouchableWithoutFeedback >
                        <View style={{flexDirection:'row', alignItems:'center', width:'100%', height:60}}>
                            <Image style={{marginLeft:20, width: 20, height: 15, resizeMode:'contain'}} source={require('../assets/images/contactemail.png')} />
                            <Text style={{marginLeft:25, fontSize:18, fontFamily: 'Roboto-Light'}} >Email</Text>
                            <TextInput 
                                style={{textAlign:'right', right:20, position:'absolute', justifyContent:'flex-end', width:150, fontFamily:'Roboto-Light', fontSize:18}} 
                                placeholder='Email'
                                value='Tobi@flit.co'
                                keyboardType='email-address'                            
                                underlineColorAndroid='rgba(0,0,0,0)'
                                />
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={{backgroundColor:'#dddddd', height:1, width:'100%', marginLeft:80}} />                
                </View>
                <View style={{width:'100%'}}>
                        <TouchableWithoutFeedback >
                            <View style={{flexDirection:'row', alignItems:'center', width:'100%', height:60}}>
                                <Image style={{marginLeft:20, width: 20, height: 20, resizeMode:'contain'}} source={require('../assets/images/password.png')} />
                                <Text style={{marginLeft:25, fontSize:18, fontFamily: 'Roboto-Light'}} >Password</Text>
                                <TextInput 
                                    style={{textAlign:'right', right:20, position:'absolute', justifyContent:'flex-end', width:150, fontFamily:'Roboto-Light', fontSize:18}} 
                                    placeholder='Change Password'
                                    placeholderTextColor='#18ab60'
                                    secureTextEntry={true}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    />
                            </View>
                        </TouchableWithoutFeedback>
                        <View style={{backgroundColor:'#dddddd', height:1, width:'100%', marginLeft:80}} />                
                </View>
                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={10} style={{width:'100%', flex:1, justifyContent:'flex-end'}} enabled>
                <View style={{width:'100%'}}>
                    <View style={{}}>
                        <View style={{flexDirection:'row', alignItems:'center', width:'100%', height:60,}}>
                            <Image style={{marginLeft:20, width: 15, height: 20, resizeMode:'contain'}} source={require('../assets/images/contactphone.png')} />
                            <Text style={{marginLeft:25, fontSize:18, fontFamily: 'Roboto-Light'}} >Mobile Phone</Text>
                            <View style={{right:20, position:'absolute', justifyContent:'flex-end', width:150}} >
                                <CountryPicker
                                    onChange={value => {
                                        this.setState({ cca2: value.cca2, callingCode: value.callingCode, countryName: value.name})
                                    }}
                                    cca2={this.state.cca2}
                                    translation="eng" >
                                    <Text style={{textAlign:'right', fontSize:17, color:'#777777', fontFamily: 'Roboto-Light'}}>{this.state.countryName}  ></Text>
                                </CountryPicker>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{width: '100%', marginTop:0}}>
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
                <View style={{height:'55%', width:'100%'}}></View>
                </KeyboardAvoidingView>

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
    modalBackground: {
        flex: 1,
        // alignItems: 'center',
        // flexDirection: 'column',
        // justifyContent: 'space-around',
        backgroundColor: '#00000095'
      },
  });