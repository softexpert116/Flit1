import React from 'react';
import { StyleSheet, TouchableOpacity,  ToastAndroid, Button, Text, View, Image } from 'react-native';
import Splash from './components/Splash';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import SignupPhone from './components/SignupPhone';
import SignupPhoneVerify from './components/SignupPhoneVerify';
// import Main from './components/Main1';
import Pickup from './components/Pickup';
import SideMenu from './components/SideMenu';
import GetTrip from './components/GetTrip';
import Trips from './components/Trips';
import TripDetail from './components/TripDetail';
import ContactUs from './components/ContactUs';
import PromoCode from './components/PromoCode';
import Payment from './components/Payment';
import EditPayment from './components/EditPayment';
import Credit from './components/Credit';
import Account from './components/Account';
import EditProfile from './components/EditProfile';
import Notifications from './components/Notifications';
import Help from './components/Help';

import {createStackNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation';
import { Font } from 'expo';

export const RootStack = createStackNavigator(
  {
    Splash: { screen: Splash },
    Landing: { screen: Landing },
    Login: { screen: Login },
    Signup: { screen: Signup },
    SignupPhone: { screen: SignupPhone },
    SignupPhoneVerify: { screen: SignupPhoneVerify },
    Main: { 
      screen: 
      // Main,
      createDrawerNavigator({
              GetTrip: {
                screen: GetTrip,
              },
              Trips: {
                screen: Trips,
              },
              PromoCode: {
                screen: PromoCode,
              },
              Payment: {
                screen: Payment,
              },
              Credit: {
                screen: Credit,
              },
              Account: {
                screen: Account,
              },
              Help: {
                screen: Help,
              },
            
            },{
              contentComponent: SideMenu,
              drawerWidth: 240,
            }),
      navigationOptions: {
        header:null,
      },
    },
    Pickup: { screen: Pickup, navigationOptions: { header:null,}},
    TripDetail: { screen: TripDetail, navigationOptions: { header:null,}},
    EditPayment: { screen: EditPayment, navigationOptions: { header:null,}},
    ContactUs: { screen: ContactUs, navigationOptions: { header:null,}},
    EditProfile: { screen: EditProfile, navigationOptions: { header:null,}},
    Notifications: { screen: Notifications, navigationOptions: { header:null,}},
  },
  {
    initialRouteName: 'Splash',
  }
);

class App extends React.Component {
  constructor() {
    super()
  }

  async componentWillMount() {
    await Font.loadAsync({
    // 'any_name' : require('path_to_your_font_file')
      'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
      'segoe-script': require('./assets/fonts/segoe-script.ttf'),
    });
// other stuff
  }

  render() {
    return <RootStack />;
  }
}

export default App;
