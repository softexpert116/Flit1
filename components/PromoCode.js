import React, {Component} from 'react';
import {TouchableOpacity,KeyboardAvoidingView, StyleSheet, Image, Text, View, TouchableWithoutFeedback } from 'react-native';
import {DrawerActions} from 'react-navigation';


  export default class PromoCode extends React.Component {
    state = {
    };
    
    render() {
      return (
        <View style={styles.container}>
            <View style={{height: '40%', width: '100%', padding:20, marginTop:0, backgroundColor:'#77dd77'}}>
                <TouchableOpacity style={{backgroundColor:'transparent'}} 
                    onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                    <Image style={{width: 15, height: 15, marginTop:30, resizeMode:'contain'}} source={require('../assets/images/ic_back_white.png')} />
                </TouchableOpacity>
                <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'rgba(255,255,255,0.8)', fontSize:17, marginTop:30, fontFamily: 'Roboto-Light'}}>Promo Code</Text>
                    <Text style={{color:'rgba(255,255,255,1)', fontSize:40, marginTop:10, fontFamily: 'Roboto-Light'}}>TRYP5</Text>
                    <Text style={{color:'rgba(255,255,255,0.8)', fontSize:20, marginTop:10, fontFamily: 'Roboto-Light'}}>$5 OFF ANY RIDE</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', marginTop:30}}>
                    <Text style={{flex:0.5, color:'rgba(255,255,255,1)', fontSize:17, marginTop:30, fontFamily: 'Roboto-Light'}}>User Today 4</Text>
                    <Text style={{flex:0.5, color:'rgba(255,255,255,1)', fontSize:18, marginTop:30, fontFamily: 'Roboto-Light'}}>Expires 2019-09-28</Text>
                </View>
            </View>
            <View style={{alignItems:'center', justifyContent:'center', width:'100%', height:'60%'}}>
                <Image style={{width: 40, height: 40, resizeMode:'contain'}} source={require('../assets/images/promo.png')} />
                <Text style={{color:'rgba(0,0,0,0.5)', fontSize:15, marginTop:30, fontFamily: 'Roboto-Light'}}>Share your invite code</Text>
                <View style={{flexDirection:'row', alignItems:'center', marginTop:20}}>
                    <TouchableOpacity>
                        <Image style={{width: 50, height: 50, resizeMode:'contain'}} source={require('../assets/images/facebook.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:10}}>
                        <Image style={{width: 50, height: 50, resizeMode:'contain'}} source={require('../assets/images/twitter.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:10}}>
                        <Image style={{width: 50, height: 50, resizeMode:'contain'}} source={require('../assets/images/message.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:10}}>
                        <Image style={{width: 50, height: 50, resizeMode:'contain'}} source={require('../assets/images/email.png')} />
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