import React, {Component} from 'react';
import {TouchableOpacity,FlatList, StyleSheet, Image, Text, View, TouchableWithoutFeedback } from 'react-native';
import {DrawerActions} from 'react-navigation';
import {Header} from 'react-native-elements'

  export default class Payment extends React.Component {
    state = {
    };
    render() {
          selectItem = (item) => {
            // alert(item.key);
            this.props.navigation.navigate('EditPayment')
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
                    <Text style={{fontSize: 23,marginLeft:10, marginTop:10, fontFamily: 'Roboto-Light',}}>Payment</Text>  
                }
                />
            <Image style={{width: '100%', height: 8, top:-2}} source={require('../assets/images/boarder.png')} />
            <View style={[styles.container, { backgroundColor:'#ffffff', marginTop:-8 }]} >
                <View style={{backgroundColor:'#efefef', height:40, justifyContent:'center'}}>
                    <Text style={{fontSize: 15, marginLeft:30, fontFamily: 'Roboto-Light'}}>Saved Credit Cards</Text>
                </View>
                <View style={{width:'100%',marginTop:10}}>
                    <FlatList style={{width:'100%'}}
                        data={[
                            {key: 'id0', type: 'visa',number:'6512', isPrimary:false},
                            {key: 'id1', type: 'master',number:'1157', isPrimary:true},
                        ]}
                        renderItem={({item, index}) => 
                            <TouchableOpacity onPress={ () => selectItem(item) }>
                                <View style={{padding:20, width:'100%', height:60, flexDirection:'row', alignItems:'center', backgroundColor:'white'}}>
                                    { item.type == 'visa' && ([
                                        <Image key={'img_'+item.key} style={{width:50, height:20, resizeMode:'contain'}} source={require('../assets/images/visacard.png')} />,
                                    ])}
                                    { item.type == 'master' && ([
                                        <Image key={'img_'+item.key} style={{width:50, height:20, resizeMode:'contain'}} source={require('../assets/images/mastercard.png')} />,
                                    ])}
                                    { item.type == 'express' && ([
                                        <Image key={'img_'+item.key} style={{width:50, height:20, resizeMode:'contain'}} source={require('../assets/images/expresscard.png')} />,
                                    ])}
                                    <Text key={'txt_number_'+item.key} style={{fontSize: 20, marginLeft: 10, fontFamily: 'Roboto-Light',}}>***{item.number}</Text>
                                    { item.isPrimary && ([
                                        <Text key={'txt_primary_'+item.key} style={{fontSize: 15, fontFamily: 'Roboto-Light', marginLeft: 50, fontFamily: 'Roboto-Light',color:'rgba(0,0,0,0.2)'}}>PRIMARY</Text>
                                    ])}
                                </View>
                                <View style={{backgroundColor:'#dddddd', height:1, marginLeft:130, width:'100%', marginTop:5, marginBottom:10}} />
                            </TouchableOpacity>
                        }
                    />
                </View>
                <View style={{width:140, height:100, right:0, top:30, alignSelf:'flex-end'}}>
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate('EditPayment')}
                        style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                        <Image style={{width:30, height:30}} source={require('../assets/images/add.png')} />
                        <Text style={{fontSize: 18, marginLeft: 10, color:'#555555', fontFamily: 'Roboto-Light'}}>Add New</Text>
                    </TouchableOpacity>
                    <View style={{width:'100%', height:1, top:15, backgroundColor:'#aaaaaa'}}></View>
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