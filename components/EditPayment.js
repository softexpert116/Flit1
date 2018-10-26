import React, {Component} from 'react';
import {TouchableOpacity,FlatList, StyleSheet, Image, Text, View, TouchableWithoutFeedback } from 'react-native';
import {DrawerActions} from 'react-navigation';
import {Header} from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler';

  export default class EditPayment extends React.Component {
    state = {
    };
      
    render() {
      return (
        <View style={styles.container}>
            <Header
                backgroundColor='#fff'
                marginTop={10}
                leftComponent={
                    <TouchableOpacity 
                        style={{backgroundColor:'transparent',height:'100%', justifyContent:'center', alignItems: 'center'}} 
                        onPress={() => this.props.navigation.pop()}>
                        <Image style={{width: 15, height: 15, marginTop:12, resizeMode:'contain'}} source={require('../assets/images/ic_back.png')} />
                    </TouchableOpacity>
                }
                rightComponent={
                    <TouchableOpacity 
                        style={{backgroundColor:'transparent',height:'100%', justifyContent:'center', alignItems: 'center'}} 
                        onPress={() => this.props.navigation.pop()}>
                        <Text style={{marginTop:12, color:'#18ab60', fontSize:15}} >Done</Text>
                    </TouchableOpacity>
                    }
                centerComponent={
                    <Text style={{fontSize: 23,marginLeft:10, marginTop:10, fontFamily: 'Roboto-Light',}}>Edit Payment</Text>  
                }
                />
            <Image style={{width: '100%', height: 8, top:-2}} source={require('../assets/images/boarder.png')} />
            <View style={[styles.container, { backgroundColor:'#ffffff', marginTop:-8 }]} >
                <View style={{backgroundColor:'#efefef', height:40, justifyContent:'center'}}>
                    <Text style={{fontSize: 15, marginLeft:30, fontFamily: 'Roboto-Light'}}>New Card</Text>
                </View>
                <View style={{marginTop:10}}>
                    <View style={{padding:20, width:'100%', height:60, flexDirection:'row', alignItems:'center', backgroundColor:'white'}}>
                        <Image style={{width:40, height:23, resizeMode:'contain'}} source={require('../assets/images/card_blank.png')} />
                        <TextInput style={{fontSize: 18, width:'70%', marginLeft: 10, fontFamily: 'Roboto-Light'}} 
                            placeholder='Card Number'
                            underlineColorAndroid='rgba(0,0,0,0)'
                            ></TextInput>
                        <TouchableOpacity>
                            <Image style={{width:30, height:30}} source={require('../assets/images/digital.png')} />                    
                        </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor:'#dddddd', height:1, marginLeft:10, width:'100%', marginTop:5}} />
                </View>
                <View style={{marginTop:3}}>
                    <View style={{padding:20, width:'100%', height:60, flexDirection:'row', alignItems:'center', backgroundColor:'white'}}>
                        <View style={{width:'30%', justifyContent:'center'}}>
                            <TextInput style={{textAlign:'center', fontSize: 18, width:100, fontFamily: 'Roboto-Light'}} 
                                placeholder='MMYY'
                                underlineColorAndroid='rgba(0,0,0,0)'
                                maxLength={4}
                                keyboardType='numeric'
                                />
                        </View>
                        <View style={{width:'25%', justifyContent:'center'}}>
                            <TextInput style={{textAlign:'center', fontSize: 18, width:80, fontFamily: 'Roboto-Light'}} 
                                placeholder='CVV'
                                keyboardType='numeric'
                                maxLength={3}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                />
                        </View>
                        <View style={{width:'45%', justifyContent:'center'}}>
                            <TextInput style={{textAlign:'center', fontSize: 18, width:150, fontFamily: 'Roboto-Light'}} 
                                placeholder='ZIP/POSTAL'
                                keyboardType='numeric'
                                maxLength={9}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                />
                        </View>
                    </View>
                    <View style={{backgroundColor:'#dddddd', height:1, marginLeft:10, width:'100%', marginTop:5}} />
                </View>
                <View style={{padding:20, width:'100%', marginTop:3, height:60, flexDirection:'row', alignItems:'center', backgroundColor:'white'}}>
                    <TouchableOpacity style={{left:0}}>
                        <Image style={{width:30, height:30}} source={require('../assets/images/check.png')} />                    
                    </TouchableOpacity>
                    <Text style={{fontSize: 18, fontFamily: 'Roboto-Light', marginLeft:20, width:'68%'}}>PRIMARY</Text>
                    <TouchableOpacity style={{left:0}}>
                        <Text style={{fontSize: 17, fontFamily: 'Roboto-Light', color:'red'}}>Delete</Text>
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
    modalBackground: {
        flex: 1,
        // alignItems: 'center',
        // flexDirection: 'column',
        // justifyContent: 'space-around',
        backgroundColor: '#00000095'
      },
  });