import React, {Component} from 'react';
import {TouchableOpacity,TextInput, StyleSheet, Image, Text, View } from 'react-native';
import {DrawerActions} from 'react-navigation';
import {Header} from 'react-native-elements'

  export default class Credit extends React.Component {
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
                        onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                        <Image style={{width: 15, height: 15, marginTop:12, resizeMode:'contain'}} source={require('../assets/images/ic_back.png')} />
                    </TouchableOpacity>
                }
                rightComponent={
                    <TouchableOpacity 
                        style={{backgroundColor:'transparent',height:'100%', justifyContent:'center', alignItems: 'center'}} 
                        onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                        <Image style={{width: 20, height: 3, marginTop:13, marginRight:5, resizeMode:'contain'}} source={require('../assets/images/ic_menu.png')} />
                    </TouchableOpacity>
                    }
                centerComponent={
                    <Text style={{fontSize: 23,marginLeft:10, marginTop:10, fontFamily: 'Roboto-Light',}}>Credits</Text>  
                }
                />
            <Image style={{width: '100%', height: 8, top:-2}} source={require('../assets/images/boarder.png')} />
            <View style={[styles.container, { backgroundColor:'#ffffff', marginTop:-8 , alignItems:'center'}]} >
                <View style={{marginTop:40,flexDirection:'row', alignItems:'center'}}>
                    <Text style={{fontSize:20, fontFamily:'segoe-script'}} >My</Text>
                    <Text style={{fontSize:20, fontFamily: 'Roboto-Light', }} > Flit Credit</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{marginTop:20, fontSize:18, fontFamily: 'Roboto-Light'}} >View|Add</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', marginTop:80, width:'80%', paddingBottom:10}}>
                    <TextInput style={{fontSize: 16, width:'80%', marginBottom: -10, width:'60%', fontFamily: 'Roboto-Light'}} 
                        placeholder='Enter credit code here'
                        underlineColorAndroid='rgba(0,0,0,0)'
                        ></TextInput>
                    <TouchableOpacity 
                        style={{backgroundColor:'#18ab60',height:40, width:100, justifyContent:'center', alignItems: 'center', marginLeft:10}} 
                        // onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                        >
                        <Text style={{fontSize:15, fontFamily: 'Roboto-Light', color:'white'}} >Add Credit</Text>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'#dddddd', height:1, width:'80%', marginTop:0}} />
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:80, width:'70%'}}>
                    <View style={{flex:0.49, alignItems:'center'}}>
                        <Text style={{fontSize:15, fontFamily:'Roboto-Light'}} >Credit Code</Text>
                        <Text style={{fontSize:30, marginTop:10, fontWeight:'400', fontFamily:'Roboto-Light'}} >T0B17</Text>
                    </View>
                    <View style={{width:1, height:60, backgroundColor:'#dddddd'}} />
                    <View style={{flex:0.49, alignItems:'center'}}>
                        <Text style={{fontSize:15, fontFamily:'Roboto-Light'}} >Credit Balance</Text>
                        <Text style={{fontSize:30, marginTop:10, fontWeight:'400', fontFamily:'Roboto-Light'}} >1283</Text>
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
    modalBackground: {
        flex: 1,
        // alignItems: 'center',
        // flexDirection: 'column',
        // justifyContent: 'space-around',
        backgroundColor: '#00000095'
      },
  });