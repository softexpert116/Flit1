import React, {Component} from 'react';
import {TouchableOpacity,Linking,StatusBar,FlatList, StyleSheet, Image, Text, View } from 'react-native';
import {DrawerActions} from 'react-navigation';
import {Header} from 'react-native-elements'
import { RootStack } from '../App';

  export default class Help extends React.Component {
    state = {
    };
    render() {
        const { goBack } = this.props.navigation;
        selectItem=(item, index)=>{
            if (index == 0) {
                return;
            }
            Linking.canOpenURL(item.url).then(supported => {
                if (supported) {
                  Linking.openURL(item.url);
                } else {
                  console.log("Don't know how to open URI: " + this.props.url);
                }
              });
        }
      return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Image style={{width: '100%', top:22, height: 250, resizeMode:'cover'}} source={require('../assets/images/help_page.png')} />
            <TouchableOpacity 
                style={{top:40, left:20, position:'absolute'}}
                onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                <Image style={{width: 15, height: 15, marginTop:12, resizeMode:'contain'}} source={require('../assets/images/ic_back.png')} />
            </TouchableOpacity>
            <TouchableOpacity 
                style={{top:40, right:20, position:'absolute'}}
                onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                <Image style={{width: 20, height: 3, marginTop:13, marginRight:5, resizeMode:'contain'}} source={require('../assets/images/ic_menu.png')} />
            </TouchableOpacity>

            <View style={{width:'100%', marginTop:20}}>
                <View 
                    // onPress={()=>this.props.navigation.navigate('EditProfile')}
                    style={{flexDirection:'row', alignItems:'center', width:'100%', height:70}}>
                    <Text style={{marginLeft:20, fontSize:18, fontFamily: 'Roboto-Light'}} >Report issue with this trip</Text>
                    <Image style={{width: 10, height: 10, right:20, position:'absolute', resizeMode:'contain', justifyContent:"flex-end"}} source={require('../assets/images/right_arrow_green.png')} />
                </View>
                <View style={{backgroundColor:'#dddddd', height:1, width:'100%', marginLeft:30}} />                
                <View 
                    // onPress={ () => selectItem(item) }
                    style={{}}>
                    <View style={{padding:10, width:'100%', height:100, flexDirection:'row', alignItems:'center', backgroundColor:'white'}}>
                        <Image style={{width:50, height:50, marginTop:-20, borderRadius:25}} source={require('../assets/images/person.png')} />
                        <View style={{marginLeft:10, width:'85%'}}>
                            <View style={{flexDirection: 'row', alignItems:'center'}}>
                                <Image style={{width:5, height:5}} source={require('../assets/images/dot_pick.png')} />
                                <Text style={{fontSize: 14, marginLeft: 5, color:'#333', fontFamily: 'Roboto-Light',}}>Tuesday - 09/11/2018 11:45 pm</Text>
                            </View>
                            <View style={{flexDirection:'row', flex:2, marginTop:0, alignItems:'center'}}>
                                <Text style={{flex:0.6, color:'#000', fontSize: 17, fontFamily: 'Roboto-Light'}}>address1...</Text>
                                <Text style={{flex:0.2, color:'#000', fontSize: 18, marginLeft:10, fontFamily: 'Roboto-Light', }}>$0.50</Text>
                            </View>
                            <Text style={{fontSize: 13, marginTop:-2, color:'#000', marginTop:3, fontFamily: 'Roboto-Light', }}>Cancelled Early</Text>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor:'#dddddd', height:1, width:'100%', marginLeft:30}} />
                <FlatList style={{width:'100%', marginTop:10, height:130}}
                        data={[
                            {key: 'id0', icon: require('../assets/images/gethelp.png'),type:'View & Report Issues'},
                            {key: 'id1', icon: require('../assets/images/faq.png'),type:'FAQ', url:'https://flitways.com/support'},
                            {key: 'id2', icon: require('../assets/images/terms.png'),type:'Terms', url:'https://flitways.com/terms'},
                            {key: 'id3', icon: require('../assets/images/policy.png'),type:'Policy', url:'https://flitways.com/privacy'},
                        ]}
                        renderItem={({item, index}) => 
                            <TouchableOpacity 
                                onPress={ () => selectItem(item, index) }
                                >
                                <View style={{padding:20, width:'100%', flexDirection:'row', alignItems:'center', backgroundColor:'white'}}>
                                    <Image key={'img_icon_'+item.key} style={{width:20, height:20, resizeMode:'contain'}} source={item.icon} />
                                    <Text key={'txt_time_'+item.key} style={{fontSize: 18, marginLeft: 20, fontFamily: 'Roboto-Light',}}>{item.type}</Text>
                                    <Image style={{width:10, height:10, right:30, position:'absolute' }} source={require('../assets/images/right_arrow_green.png')} />
                                </View>
                            </TouchableOpacity>
        
                        }
                        
                    />
            </View>
            <View style={{justifyContent:'center', alignItems:'center', width:'100%', height:50, position:'absolute', bottom:0}}>
                <Text style={{fontSize: 14, fontFamily: 'Roboto-Light',color:'#aaaaaa'}}>Contact support@flit.co | Phone +1 855 710 0916</Text>
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