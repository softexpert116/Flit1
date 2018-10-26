import React, {Component} from 'react';
import {TouchableOpacity,FlatList, StyleSheet, Image, Text, View, TouchableWithoutFeedback } from 'react-native';
import {DrawerActions} from 'react-navigation';
import {Header} from 'react-native-elements'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';


  export default class Trips extends React.Component {
    state = {
      index: 0,
      routes: [
        { key: 'first', title: 'Scheduled' },
        { key: 'second', title: 'History' },
      ],
    };
    
      
    render() {
        const FirstRoute = () => (
            <View style={[styles.container, { justifyContent:'center', alignItems:'center' }]} >
                {/* <Image style={{width:30, height:45}} source={require('../assets/images/emptydata.png')} /> */}
                <View style={{width:'100%', height:'100%'}}>
                    {/* <View style={{width:'100%', flexDirection:'row', marginTop:50, alignItems:'center'}}>
                        <Text style={{fontSize: 17, marginLeft:30}}>See All Schedules</Text>
                        <Image style={{width:10, height:10, right:20, position:'absolute' }} source={require('../assets/images/right_arrow_green.png')} />
                    </View> */}
                    <FlatList style={{width:'100%', backgroundColor:'transparent', height:'100%', marginTop:20}}
                        data={[
                            {key: 'id0', avatar: require('../assets/images/person.png'),time:'Tuesday - 09/11/2018 11:45 pm', address:'address1...', type:'scheduled', fee:'0.50'},
                            {key: 'id1', avatar: require('../assets/images/person.png'),time:'Sunday - 09/21/2018 11:45 pm', address:'address2', type:'scheduled', fee:'0.50'},
                        ]}
                        renderItem={({item, index}) => 
                            <TouchableOpacity onPress={ () => selectItem(item) }>
                                <View style={{padding:10, width:'100%', height:100, flexDirection:'row', paddingLeft:30, alignItems:'center', backgroundColor:'white'}}>
                                    <Image key={'img_avatar_'+item.key} style={{width:50, height:50, marginTop:-20, borderRadius:25}} source={item.avatar} />
                                    <View style={{marginLeft:10, width:'85%'}}>
                                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                                            <Image key={'img_icon_'+item.key} style={{width:5, height:5}} source={require('../assets/images/dot_pick.png')} />
                                            <Text key={'txt_time_'+item.key} style={{fontSize: 14, marginLeft: 5, color:'#333', fontFamily: 'Roboto-Light',}}>{item.time}</Text>
                                        </View>
                                        <View style={{flexDirection:'row', flex:2, marginTop:0, alignItems:'center'}}>
                                            <Text key={'txt_address_'+item.key} style={{flex:0.6, color:'#000', fontSize: 17, fontFamily: 'Roboto-Light'}}>{item.address}</Text>
                                            <Text key={'txt_fee_'+item.key} style={{flex:0.2, color:'#000', fontSize: 18, marginLeft:10, fontFamily: 'Roboto-Light', }}>${item.fee}</Text>
                                        </View>
                                        <Text key={'txt_type_'+item.key} style={{fontSize: 13, marginTop:-2, color:'#000', marginTop:3, fontFamily: 'Roboto-Light', }}>{item.type}</Text>
                                        <View style={{width:'125%', backgroundColor:'#dddddd', height:1, marginTop:10, marginLeft:-60}} />
                                    </View>
                                    <Image style={{width:10, height:10, left:-30, top:-5 }} source={require('../assets/images/right_arrow_green.png')} />
                                </View>
                            </TouchableOpacity>
        
                        }
                        
                    />
                </View>
            </View>
          );
          const SecondRoute = () => (
            <View style={[styles.container, { justifyContent:'center', alignItems:'center' }]} >
                {/* <Image style={{width:30, height:45}} source={require('../assets/images/emptydata.png')} /> */}
                <View style={{width:'100%', height:'100%'}}>
                    {/* <View style={{width:'100%', flexDirection:'row', marginTop:50, alignItems:'center'}}>
                        <Text style={{fontSize: 17, marginLeft:30}}>See All History</Text>
                        <Image style={{width:10, height:10, right:20, position:'absolute' }} source={require('../assets/images/right_arrow_green.png')} />
                    </View> */}
                    <FlatList style={{width:'100%', backgroundColor:'transparent', height:'100%', marginTop:20}}
                        data={[
                            {key: 'id0', avatar: require('../assets/images/person.png'),time:'Tuesday - 09/11/2018 11:45 pm', address:'address1...', type:'Cancelled Early', fee:'0.50'},
                            {key: 'id1', avatar: require('../assets/images/person.png'),time:'Sunday - 09/21/2018 11:45 pm', address:'address2', type:'Pickup', fee:'0.50'},
                        ]}
                        renderItem={({item, index}) => 
                            <TouchableOpacity onPress={ () => selectItem(item) }>
                                <View style={{padding:10, width:'100%', height:100, flexDirection:'row', paddingLeft:30, alignItems:'center', backgroundColor:'white'}}>
                                    <Image key={'img_avatar_'+item.key} style={{width:50, height:50, marginTop:-20, borderRadius:25}} source={item.avatar} />
                                    <View style={{marginLeft:10, width:'85%'}}>
                                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                                            <Image key={'img_icon_'+item.key} style={{width:5, height:5}} source={require('../assets/images/dot_pick.png')} />
                                            <Text key={'txt_time_'+item.key} style={{fontSize: 14, marginLeft: 5, color:'#333', fontFamily: 'Roboto-Light',}}>{item.time}</Text>
                                        </View>
                                        <View style={{flexDirection:'row', flex:2, marginTop:0, alignItems:'center'}}>
                                            <Text key={'txt_address_'+item.key} style={{flex:0.6, color:'#000', fontSize: 17, fontFamily: 'Roboto-Light'}}>{item.address}</Text>
                                            <Text key={'txt_fee_'+item.key} style={{flex:0.2, color:'#000', fontSize: 18, marginLeft:10, fontFamily: 'Roboto-Light', }}>${item.fee}</Text>
                                        </View>
                                        <Text key={'txt_type_'+item.key} style={{fontSize: 13, marginTop:-2, color:'#000', marginTop:3, fontFamily: 'Roboto-Light', }}>{item.type}</Text>
                                        <View style={{width:'125%', backgroundColor:'#dddddd', height:1, marginTop:10, marginLeft:-60}} />
                                    </View>
                                    <Image style={{width:10, height:10, left:-30, top:-5 }} source={require('../assets/images/right_arrow_green.png')} />
                                </View>
                            </TouchableOpacity>
        
                        }
                        
                    />
                </View>
            </View>
          );
          selectItem = (item) => {
            // alert(item.key);
            this.props.navigation.navigate('TripDetail')
          }
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
                    <Text style={{fontSize: 23,marginLeft:10, marginTop:10, fontFamily: 'Roboto-Light',}}>Trips</Text>  
                }
                />
            <Image style={{width: '100%', height: 8, top:-2}} source={require('../assets/images/boarder.png')} />
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first: FirstRoute,
                    second: SecondRoute,
                })}
                renderTabBar={props => 
                    <TabBar
                        {...props}
                        indicatorStyle={{backgroundColor:'#18ab60'}}
                        style={{backgroundColor:'white'}}
                        labelStyle={{color:'#555555', fontSize:16, fontFamily:'Roboto-Light', marginTop:-2}}
                        tabStyle={{height:40}}
                        getLabelText={({ route }) => route.title}
                    />
                }
                renderLa
                onIndexChange={index => this.setState({ index })}
                //   initialLayout={{ width: Dimensions.get('window').width }}
                />
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