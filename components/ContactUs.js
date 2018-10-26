import React, {Component} from 'react';
import {TouchableOpacity,KeyboardAvoidingView, StyleSheet, Image, Text, View, TouchableWithoutFeedback } from 'react-native';
import {DrawerActions} from 'react-navigation';
import {Header} from 'react-native-elements'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { TextInput } from 'react-native-gesture-handler';


  export default class ContactUs extends React.Component {
    state = {
    };
    
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
                        <Image style={{width: 30, height: 30, marginTop:12, resizeMode:'contain'}} source={require('../assets/images/arrow_back_black.png')} />
                    </TouchableOpacity>
                }
                rightComponent={
                    <View style={{backgroundColor:'transparent',height:'100%', flexDirection:'row', alignItems: 'center'}} >
                        <TouchableOpacity>
                            <Image style={{width: 40, height: 30, marginTop:12, resizeMode:'stretch'}} source={require('../assets/images/ic_attach.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{width: 30, height: 30, marginTop:12, resizeMode:'contain', marginLeft:10}} source={require('../assets/images/ic_send.png')} />
                        </TouchableOpacity>
                    </View>
                    }
                centerComponent={
                    <Text style={{marginTop:12, fontWeight:'500', fontSize:20}} >Contact Us</Text>
                }
                />
            <Image style={{width: '100%', height: 8, top:-2}} source={require('../assets/images/boarder.png')} />
            <KeyboardAvoidingView behavior="padding" style={{flex:1, justifyContent:'flex-end'}} enabled>
                <View style={{height: '100%', width: '100%', padding:10}}>
                    <TextInput style={{width: '100%', fontSize:16, borderBottomColor: '#18ab60', margin:10, padding:10, position:'absolute'}}
                        keyboardType='default'
                        placeholder='Description'
                        multiline={true}
                        underlineColorAndroid='rgb(200,200,200)'
                    />
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
    modalBackground: {
        flex: 1,
        // alignItems: 'center',
        // flexDirection: 'column',
        // justifyContent: 'space-around',
        backgroundColor: '#00000095'
      },
  });