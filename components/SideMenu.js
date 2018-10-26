import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions, DrawerActions} from 'react-navigation';
import {StyleSheet, TouchableOpacity,ScrollView, Text, View, Image } from 'react-native';

export default class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    // this.props.navigation.dispatch(navigateAction);
    this.props.navigation.navigate(route)
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Image style={{width: 100, height: 30, marginTop:80, resizeMode:'contain'}} source={require('../assets/images/app_logo_green.png')} />
            <TouchableOpacity
              onPress={this.navigateToScreen('GetTrip')}
              style={{flexDirection:'row',marginLeft:20, marginTop:50, alignItems:'center'}}>
                <Image style={{width: 25, height: 25}} source={require('../assets/images/ic_menu_home.png')} />
                <Text style={{marginLeft:20, fontSize:17, fontFamily: 'Roboto-Light'}}>Get a Trip</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={this.navigateToScreen('Trips')}
                style={{flexDirection:'row',marginLeft:20, marginTop:30, alignItems:'center'}}>
                <Image style={{width: 25, height: 25}} source={require('../assets/images/ic_triphistory.png')} />
                <Text style={{marginLeft:20, fontSize:17, fontFamily: 'Roboto-Light'}} >Trips</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={this.navigateToScreen('PromoCode')}
                style={{flexDirection:'row',marginLeft:20, marginTop:30, alignItems:'center'}}>
                <Image style={{width: 25, height: 25}} source={require('../assets/images/promo_icon.png')} />
                <Text style={{marginLeft:20, fontSize:17, fontFamily: 'Roboto-Light'}} >Today's Promo</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={this.navigateToScreen('Payment')}
                style={{flexDirection:'row',marginLeft:20, marginTop:30, alignItems:'center'}}>
                <Image style={{width: 25, height: 25}} source={require('../assets/images/ic_menu_payment.png')} />
                <Text style={{marginLeft:20, fontSize:17, fontFamily: 'Roboto-Light'}}>Payment</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={this.navigateToScreen('Credit')}
                style={{flexDirection:'row',marginLeft:20, marginTop:30, alignItems:'center'}}>
                <Image style={{width: 25, height: 25}} source={require('../assets/images/ic_credit.png')} />
                <Text style={{marginLeft:20, fontSize:17, fontFamily: 'Roboto-Light'}} >Credits</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={this.navigateToScreen('Account')}
                style={{flexDirection:'row',marginLeft:20, marginTop:30, alignItems:'center'}}>
                <Image style={{width: 25, height: 25}} source={require('../assets/images/ic_menu_account.png')} />
                <Text style={{marginLeft:20, fontSize:17, fontFamily: 'Roboto-Light'}}>Account</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={this.navigateToScreen('Help')}
                style={{flexDirection:'row',marginLeft:20, marginTop:30, alignItems:'center'}}>
                <Image style={{width: 25, height: 25}} source={require('../assets/images/ic_help.png')} />
                <Text style={{marginLeft:20, fontSize:17, fontFamily: 'Roboto-Light'}} >Help</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1
      },
      navItemStyle: {
        padding: 10
      },
      navSectionStyle: {
        backgroundColor: 'lightgrey'
      },
      sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
      },
      footerContainer: {
        padding: 20,
        backgroundColor: 'lightgrey'
      }
  });