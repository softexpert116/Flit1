import React, {Component} from 'react';
import GetTrip from './GetTrip';
import Pickup from './Pickup';
import Trips from './Trips';
import TripDetail from './TripDetail';
import ContactUs from './ContactUs';
import PromoCode from './PromoCode';
import Payment from './Payment';
import EditPayment from './EditPayment';
import Credit from './Credit';
import Account from './Account';
import Login from './Login';

import SideMenu from './SideMenu';
import {createDrawerNavigator} from 'react-navigation';

const Router = createDrawerNavigator({
  
  GetTrip: {
    screen: GetTrip,
  },
  Pickup: {
    screen: Pickup,
  },
  Trips: {
    screen: Trips,
  },
  TripDetail: {
    screen: TripDetail,
  },
  ContactUs: {
    screen: ContactUs,
  },
  PromoCode: {
    screen: PromoCode,
  },
  Payment: {
    screen: Payment,
  },
  EditPayment: {
    screen: EditPayment,
  },
  Credit: {
    screen: Credit,
  },
  Account: {
    screen: Account,
  },
  Login: {
    screen: Login,
  },

}, {
  contentComponent: SideMenu,
  drawerWidth: 240
});

export default class Main extends Component {
  
  static navigationOptions = ({ navigation, navigationOptions }) => ({
    header: null,
  });

  render () {
    return (
      <Router/>
    );
  }
}