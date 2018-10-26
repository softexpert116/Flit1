import React, {Component} from 'react';
import {TouchableOpacity,KeyboardAvoidingView, TouchableWithoutFeedback,TextInput, StyleSheet, Image, Text, View } from 'react-native';
import {Header} from 'react-native-elements'

  export default class Notifications extends React.Component {
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
                        <Text style={{marginTop:12, color:'#18ab60', fontFamily: 'Roboto-Light', fontSize:15}} >Done</Text>
                    </TouchableOpacity>
                    }
                centerComponent={
                    <Text style={{fontSize: 23,marginLeft:10, marginTop:10, fontFamily: 'Roboto-Light',}}>Notifications</Text>  
                }
                />
            <Image style={{width: '100%', height: 8, top:-2}} source={require('../assets/images/boarder.png')} />
            <View style={[styles.container, { backgroundColor:'transparent', marginTop:-8 , alignItems:'center'}]} >
                <View style={{width:'100%', height:340, marginTop:0, justifyContent:'center', backgroundColor:'#efefef'}}>
                    <Text style={{fontSize:15, marginLeft:20, fontFamily: 'Roboto-Light'}} >Notifications</Text>
                </View>
                
                <View style={{width:'100%', }}>
                    <View 
                        style={{flexDirection:'row', alignItems:'center', width:'100%', height:70}}>
                        <Text style={{marginLeft:20, fontSize:18, fontFamily: 'Roboto-Light'}} >Mobile Notification</Text>
                        <TouchableOpacity style={{right:20, position:'absolute', justifyContent:'flex-end'}}>
                            <Image style={{width: 30, height: 30}} source={require('../assets/images/check.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:'#dddddd', height:1, width:'100%', marginLeft:80}} />                
                </View>
                <View style={{width:'100%', }}>
                    <View 
                        style={{flexDirection:'row', alignItems:'center', width:'100%', height:70}}>
                        <Text style={{marginLeft:20, fontSize:18, fontFamily: 'Roboto-Light'}} >Newsletter</Text>
                        <TouchableOpacity style={{right:20, position:'absolute', justifyContent:'flex-end'}}>
                            <Image style={{width: 30, height: 30}} source={require('../assets/images/check.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:'#dddddd', height:1, width:'100%', marginLeft:80}} />                
                </View>
                <View style={{width:'100%', }}>
                    <View 
                        style={{flexDirection:'row', alignItems:'center', width:'100%', height:70}}>
                        <Text style={{marginLeft:20, fontSize:18, fontFamily: 'Roboto-Light'}} >Freebies and Offer</Text>
                        <TouchableOpacity style={{right:20, position:'absolute', justifyContent:'flex-end'}}>
                            <Image style={{width: 30, height: 30}} source={require('../assets/images/check.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:'#dddddd', height:1, width:'100%', marginLeft:80}} />                
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
    modalBackground: {
        flex: 1,
        // alignItems: 'center',
        // flexDirection: 'column',
        // justifyContent: 'space-around',
        backgroundColor: '#00000095'
      },
  });