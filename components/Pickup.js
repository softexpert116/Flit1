import React, {Component} from 'react';
import {TouchableOpacity,FlatList, Modal, StyleSheet, StatusBar, Image, Text, View } from 'react-native';
import {NavigationActions, DrawerActions} from 'react-navigation';
import { Constants } from 'expo';
import {Header} from 'react-native-elements'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class GetTrip extends Component {
    constructor() {
        super()
        this.state={

        }
    }
  render () {
    const list = [
        {
          name: 'Amy Farha',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President'
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        },
        
      ]
    const homePlace = {
        description: 'Home',
        geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
        // icon: '../assets/images/ic_help.png',
      };
      const workPlace = {
        description: 'Work',
        geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
      };
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
            // rightComponent={
            //     <TouchableOpacity 
            //         style={{backgroundColor:'transparent',height:'100%', justifyContent:'center', alignItems: 'center'}} 
            //         onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
            //         <Image style={{width: 20, height: 5, marginTop:12, resizeMode:'contain'}} source={require('../assets/images/ic_menu.png')} />
            //     </TouchableOpacity>
            //     }
            centerComponent={
                <Image style={{width: 90, height: 22, resizeMode:'contain'}} source={require('../assets/images/app_logo_green.png')} />
            }
        />
        <Image style={{width: '100%', height: 8, top:-2}} source={require('../assets/images/boarder.png')} />
        <View style={{top:-14, width:'100%', height:'100%', padding:15}}>
            <Text style={{fontSize:24, top:10, left:10, fontFamily: 'Roboto-Light', color:'#172434'}}>Pick Up Address or Place</Text>
            <GooglePlacesAutocomplete
            placeholder='Enter Address or Place'
            minLength={2} // minimum length of text to search
            autoFocus={false}
            returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            listViewDisplayed='auto'    // true/false/undefined
            fetchDetails={true}
            renderDescription={row => row.description} // custom description render
            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                console.log(data, details);
            }}
            
            getDefaultValue={() => ''}
            
            query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: 'AIzaSyBw_B5fRTq7GUWaHEYeXnchAiLYFKxR6jk1',
                language: 'en', // language of the results
                types: '(cities)' // default: 'geocode'
            }}
            
            styles={{
                textInputContainer: {
                width: '100%',
                backgroundColor:'transparent',
                marginTop: 40,
                borderBottomColor: '#eeeeee',
                borderTopWidth: 0,
                borderBottomWidth: 0.5,
                
                },
                description: {
                fontWeight: 'bold'
                },
                predefinedPlacesDescription: {
                color: '#1faadb'
                },
                fontSize:17,
                fontFamily: 'Roboto-Light'
            }}
            backgroundColor={'transparent'}
            // currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
            // currentLocationLabel="Current location"
            nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
            GoogleReverseGeocodingQuery={{
                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
            }}
            GooglePlacesSearchQuery={{
                // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                rankby: 'distance',
                types: 'food'
            }}

            filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
            // predefinedPlaces={[homePlace, workPlace]}

            debounce={0} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
            // renderLeftButton={()  => <Image source={require('path/custom/left-icon')} />}
            // renderRightButton={() => <Image style={{width:10, height:10, marginTop:20}} source={require('../assets/images/close_gray.png')} />}
            />
            <View style={{width:'100%', marginTop:130, height:300, marginLeft:10, position:'absolute', alignItems:'center'}}>
                <FlatList style={{width:'100%'}}
                    data={[
                        {key: 'Current Address', icon: require('../assets/images/currentlocation.png'), address:''},
                        {key: 'Add Home', icon: require('../assets/images/auto_home.png'), address:''},
                        {key: 'Add Work', icon: require('../assets/images/auto_work.png'), address:''},
                        // {key: 'address1', icon: require('../assets/images/dot_pick.png'), address:''},
                        // {key: 'address2', icon: require('../assets/images/dot_pick.png'), address:''},
                    ]}
                    renderItem={({item, index}) => 
                        <View style={{marginLeft: 10,width:'100%', height:60, flexDirection:'row', alignItems:'center'}}>
                            { index < 3 && ([
                                <Image key={'img_'+item.key} style={{width:20, height:20}} source={item.icon} />,
                                <Text key={'name_'+item.key} style={{fontSize: 16, marginLeft: 20,fontFamily: 'Roboto-Light'}}>{item.key}</Text>
                            ])}
                            { index >= 3 && ([
                                <Image key={'img_'+item.key} style={{width:5, height:5, marginLeft:5}} source={item.icon} />,
                                <Text key={'name_'+item.key} style={{fontSize: 15, marginLeft: 20,}}>{item.key}</Text>                                
                            ])}
                        </View>
                    }
                />
                <Image style={{width: 30, height: 30, marginTop:25}} source={require('../assets/images/arrow.png')} />
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
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
  });
  