import React, {Component} from 'react';
import {TouchableOpacity,ToastAndroid, Modal, StyleSheet, Dimensions, Image, Text, View } from 'react-native';
import {NavigationActions, DrawerActions} from 'react-navigation';
import { Constants,Permissions,Location } from 'expo';
import {Button, Header} from 'react-native-elements'
import MapView from 'react-native-maps'

export default class GetTrip extends Component {
    constructor() {
        super()
        this.state={
            visible:false,
            mylocation:null,
            location:{coords:{latitude:59.15, longitude: 18.049}},
            // latitude:59.15,
            // longitude: 18.049,
            mapRegion: { latitude: 59.15, longitude: 18.049, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
        }
    }
    hideModal=()=>{
        // alert(0);
        this.setState({visible:false});
    }
    componentDidMount() {
        // this._getLocationAsync();
    }
    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                mylocation: null,
                location,
            });
        }
        
        let location = await Location.getCurrentPositionAsync({});
        this.setState({ mylocation: JSON.stringify(location), location });
        // console.log(this.state.mylocation);
        // this.setState({latitude:this.state.mylocation.coords.latitude, longitude:this.state.mylocation.longitude})
        ToastAndroid.show(this.state.mylocation.coords.latitude, ToastAndroid.SHORT);
    };
    _handleMapChange = mapRegion => {
        this.setState({mapRegion});
    }
  render () {
    var { width, height } = Dimensions.get('window')
    // ToastAndroid.show(width.toString(), ToastAndroid.SHORT);
    return (
      <View style={styles.container}>
        <Modal transparent={true}
            animationType={'none'}
            visible={this.state.visible}
            onRequestClose={() => {console.log('close modal')}}>
            <View style={styles.modalBackground}>
                <View style={{justifyContent:'center', alignItems:'center', width:'100%', height:'100%'}}>
                    <Image style={{width: 100, height: 100, resizeMode:'contain'}} source={require('../assets/images/welcome.png')} />
                    <View style={{height:50}} />
                    <Text style={{color:'white', fontSize:30}}>Welcome to Flit</Text>
                    <Text style={{color:'white', fontSize:16}}>Best rides await you with just a tap</Text>
                </View>
                <TouchableOpacity 
                    style={{right:20, top:20, position:'absolute', width:40, height:40, justifyContent:'center', alignItems: 'center'}} 
                    onPress={() => this.hideModal()}>
                    <Image style={{width: 20, height: 20, marginTop:12, resizeMode:'contain'}} source={require('../assets/images/close_gray.png')} />
                </TouchableOpacity>
            </View>
        </Modal>

        <Header
            backgroundColor='#fff'
            marginTop={10}
            rightComponent={
                <TouchableOpacity 
                    style={{backgroundColor:'transparent',height:'100%', justifyContent:'center', alignItems: 'center'}} 
                    onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                    <Image style={{width: 20, height: 3, marginTop:13, marginRight:5, resizeMode:'contain'}} source={require('../assets/images/ic_menu.png')} />
                </TouchableOpacity>
                }
            centerComponent={
                <Image style={{width: 90, height: 22, resizeMode:'contain'}} source={require('../assets/images/app_logo_green.png')} />
            }
        />
        <Image style={{width: '100%', height: 15, top:-2}} source={require('../assets/images/boarder.png')} />
        <View style={{backgroundColor:'gray', top:-14, width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
            <MapView 
                style={{
                    // alignSelf:'stretch',
                    flex: 1,
                    width: width,
                    height: height,
                    position:'absolute',
                    // left:0, right:0, top:0, bottom:0
                }}
                provider="google"
                region={{ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
                // onRegionChange={this._handleMapChange}
                showsUserLocation={true}
                showsMyLocationButton={false}
                zoomEnabled = {true}      
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
            <Image style={{width: 25, height: 25, marginTop:0}} source={require('../assets/images/picker_blue.png')} />
            <TouchableOpacity style={{top:330, position:'absolute', right:20}}>
                <Image style={{width: 40, height: 40}} source={require('../assets/images/mylocation.png')} />
            </TouchableOpacity>
        </View>
        <View style={{left:15, right:15, position:'absolute', bottom:35}}>
            <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Pickup')}
                style={{backgroundColor:'white', width:'100%', height:45, justifyContent:'center'}}>
                <Image style={{width: 10, height: 10, left:20, position:'absolute'}} source={require('../assets/images/dot_pick.png')} />
                <Text style={{textAlign:'center', fontFamily: 'Roboto-Light', fontSize:15, color:'gray'}}>Enter Pick Up</Text>
            </TouchableOpacity>
            <View style={{height:5}} />
            <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Pickup')}
                style={{backgroundColor:'white', width:'100%', height:45, justifyContent:'center'}}>
                <Image style={{width: 25, height: 25, right:20, position:'absolute'}} source={require('../assets/images/arrow.png')} />
                <Text style={{textAlign:'center', fontFamily: 'Roboto-Light', fontSize:18}}>Pick Me Up Here...</Text>
            </TouchableOpacity>
            <View style={{width:40, height:40, justifyContent:'center', alignItems:'center', backgroundColor:'black', position:'absolute', left:10, top:-25}}>
                <Text style={{color:'white', fontSize:12}}>5</Text>
                <Text style={{color:'white', fontSize:12}}>mins</Text>
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
  