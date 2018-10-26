import React, {Component} from 'react';
import {TouchableOpacity, Modal, StyleSheet, StatusBar, Image, Text, View } from 'react-native';
import {NavigationActions, DrawerActions} from 'react-navigation';
import PropTypes from 'prop-types';
import { Constants } from 'expo';
import {Button, Header} from 'react-native-elements'
import MapView from 'react-native-maps'
import { ScrollView } from 'react-native-gesture-handler';

export default class TripDetail extends Component {
    constructor() {
        super()
        this.state={
        }
    }
    
  render () {
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
            centerComponent={
                <Text style={{fontSize: 23,marginLeft:20, marginTop:10, fontFamily: 'Roboto-Light',}}>Trip Details</Text>  
            }
        />
        <Image style={{width: '100%', height: 15, top:-2}} source={require('../assets/images/boarder.png')} />
        <View style={{backgroundColor:'gray', top:-14, width:'100%', height:'100%'}}>
            <MapView style={{left:0, right:0, top:0, height:'50%'}}
                region={{
                    latitude: 59,
                    longitude: 18,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1
                }}
                >
                <MapView.Marker
                    coordinate={{
                        latitude: 59.15,
                        longitude: 18.05
                    }}
                    title={'Home'}
                    description={'Here is my home'}
                />
            </MapView>
            <View style={{padding:10, height:'50%', width:'100%', backgroundColor:'white'}}>
                <ScrollView>
                    <View style={{width:'100%', flexDirection:'row',marginTop:10, height:80, alignItems:'center'}}>
                        <View style={{width:'50%', height:'100%', padding:5, flexDirection:'row'}}>
                            <Image style={{width: 10, height: 10, marginTop:5}} source={require('../assets/images/dot_pick.png')} />
                            <Text numberOfLines={2} style={{marginLeft:10, fontSize:15, fontFamily: 'Roboto-Light'}}>Headquarters 1120 N Street Sacramento 916-654-5266</Text>
                        </View>
                        <View style={{width:'50%', height:'100%', padding:5, flexDirection:'row'}}>
                            <Image style={{width: 10, height: 10, marginTop:5}} source={require('../assets/images/dot_red.png')} />
                            <Text numberOfLines={2} style={{marginLeft:10, fontSize:15, fontFamily: 'Roboto-Light'}}>District 1 1656 Union Street Eureka 707-445-6600</Text>
                        </View>
                    </View>
                    <View style={{width:'100%', flexDirection:'row',marginTop:0, height:50, alignItems:'center'}}>
                        <Image style={{width: '50%', height: '100%', resizeMode:'contain'}} source={require('../assets/images/flit_class.png')} />
                        <View style={{width:'50%', height:'100%', padding:0,}}>
                            <View style={{flexDirection:'row', width: '100%', }}>
                                <Text numberOfLines={1} style={{width:'80%', fontSize:15, fontFamily: 'Roboto-Light'}}>Credit Car XXX6248-123</Text>
                                <Text numberOfLines={1} style={{width:'20%', marginLeft:2, fontSize:18, fontFamily: 'Roboto-Light'}}>$0</Text>
                            </View>
                            <Text numberOfLines={1} style={{fontSize:15, width:'100%', fontFamily: 'Roboto-Light'}}>Sep 11 2018,11:45 pm</Text>
                        </View>
                    </View>
                    <View style={{width:'100%', flexDirection:'row',marginTop:20, height:40, alignItems:'center'}}>
                        <Text style={{textAlign:'center', width:'50%', fontSize:15, fontFamily: 'Roboto-Light'}}>Flit Class</Text>
                        <View style={{width:'50%', height:'100%', padding:0,justifyContent:'center', alignItems:'center'}}>
                            <TouchableOpacity 
                                onPress={()=>this.props.navigation.navigate('ContactUs')}
                                style={{width: 120, height:40, backgroundColor:'#18ab60', justifyContent:'center', alignItems:'center'}}>
                                <Text style={{fontSize:15, color:'white', fontFamily: 'Roboto-Light'}}>Get Help</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                {/* <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('Pickup')}
                    style={{backgroundColor:'white', width:'100%', height:50, justifyContent:'center'}}>
                    <Image style={{width: 10, height: 10, left:20, position:'absolute'}} source={require('../assets/images/dot_pick.png')} />
                    <Text style={{textAlign:'center'}}>Enter Pick Up</Text>
                </TouchableOpacity>
                <View style={{height:5}} />
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('Pickup')}
                    style={{backgroundColor:'white', width:'100%', height:50, justifyContent:'center'}}>
                    <Image style={{width: 25, height: 25, right:20, position:'absolute'}} source={require('../assets/images/arrow.png')} />
                    <Text style={{textAlign:'center'}}>Pick Me Up Here..</Text>
                </TouchableOpacity> */}
            </View>
        </View>

        {/* <StatusBar barStyle="light-content" /> */}
            
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
  