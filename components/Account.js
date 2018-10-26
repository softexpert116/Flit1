import React, {Component} from 'react';
import {TouchableOpacity,TextInput, StyleSheet, Image, Text, View } from 'react-native';
import {DrawerActions} from 'react-navigation';
import {Header} from 'react-native-elements'
import { RootStack } from '../App';

  export default class Account extends React.Component {
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
                    <Text style={{fontSize: 23,marginLeft:10, marginTop:10, fontFamily: 'Roboto-Light',}}>Account</Text>  
                }
                />
            <Image style={{width: '100%', height: 8, top:-2}} source={require('../assets/images/boarder.png')} />
            <View style={[styles.container, { backgroundColor:'transparent', marginTop:-8 , alignItems:'center'}]} >
                <View style={{width:'100%', alignItems:'center', marginTop:30}}>
                    <Image style={{width: 120, height: 120, borderRadius:60}} source={require('../assets/images/person.png')} />
                    <Text style={{marginTop:10, fontSize:25, fontFamily: 'Roboto-Light'}} >Tobi Mac</Text>
                </View>
                <View style={{width:'100%', height:40, marginTop:30, justifyContent:'center', backgroundColor:'#efefef'}}>
                    <Text style={{fontSize:15, marginLeft:20, fontFamily: 'Roboto-Light'}} >General</Text>
                </View>
                <View style={{width:'100%'}}>
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate('EditProfile')}
                        style={{flexDirection:'row', alignItems:'center', width:'100%', padding:10}}>
                        <Image style={{width: 40, height: 40, resizeMode:'contain'}} source={require('../assets/images/menu_item1.png')} />
                        <Text style={{marginLeft:20, width: '75%',fontSize:18, fontFamily: 'Roboto-Light'}} >Edit Account</Text>
                        <Image style={{width: 10, height: 10, resizeMode:'contain'}} source={require('../assets/images/right_arrow_green.png')} />
                    </TouchableOpacity>
                    <View style={{backgroundColor:'#dddddd', height:1, width:'100%', marginLeft:80}} />                
                </View>
                <View style={{width:'100%'}}>
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate('Notifications')}
                        style={{flexDirection:'row', alignItems:'center', width:'100%', padding:12}}>
                        <Image style={{width: 35, height: 35, resizeMode:'contain'}} source={require('../assets/images/menu_item10.png')} />
                        <Text style={{marginLeft:20, width: '76%',fontSize:18, fontFamily: 'Roboto-Light'}} >Notifications</Text>
                        <Image style={{width: 10, height: 10, resizeMode:'contain'}} source={require('../assets/images/right_arrow_green.png')} />
                    </TouchableOpacity>
                    <View style={{backgroundColor:'#dddddd', height:1, width:'100%', marginLeft:80}} />                
                </View>
            </View>
            <TouchableOpacity
                onPress={() => this.props.navigation.pop(2)}
                style={{backgroundColor:'#18ab60', alignItems:'center', justifyContent:'center', bottom:0, width:'100%', flexDirection:'row', position:'absolute', height:60}}
                >
                <Image style={{width: 20, height: 20}} source={require('../assets/images/ic_logout.png')} />
                <Text style={{marginLeft:20, fontSize:18, color:'white'}} >Logout</Text>
            </TouchableOpacity>
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