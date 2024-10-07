import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Platform,
    StatusBar,
    NativeModules,
    Image,
    ScrollView,
  } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons'
const HdCard = props => {
  console.log(props, 'props');

  return <View style={styles.cardView}>
  <View style={styles.headView}>
  <Text style={styles.cardHead}>DATE ACTIVATE</Text>
  <Text style={styles.cardHead}>SERIEL KEY</Text>
  <Text style={styles.cardHead}>BLUETOOTH NAME</Text>
  </View>
  <View style={styles.txtView}>
  <Text style={styles.cardTxt}>25-july-2021</Text>
  <Text style={styles.cardTxt}>P6.0 Test</Text>
  <Text style={styles.cardTxt}>Capno-0255</Text>
  </View>
  <TouchableOpacity style={styles.cardBtn}>
  <Icon size={20} color='red' name="trash"/>
  <Text style={{color:'red'}}>Unregister CapnoTrainer</Text>
  </TouchableOpacity>
  </View>;
};

const styles = StyleSheet.create({
    cardHead:{width:'33%',textAlign:'center'},cardTxt:{color:'gray',width:'33%',textAlign:'center'},
    cardBtn:{flexDirection:'row',justifyContent:'center',alignItems:'center',marginVertical:10,height:40,width:'95%',marginLeft:'2.5%',borderRadius:5,borderColor:'red',borderWidth:0.3,backgroundColor:'white'}
  ,headView:{flexDirection:'row',justifyContent:'space-between',marginTop:10,},txtView:{flexDirection:'row',marginTop:5},
  cardView:{shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  
  elevation: 5,width:'95%',marginLeft:'2.5%',borderWidth:0.3,borderColor:'gray',borderRadius:5,backgroundColor:'white',marginTop:10,marginBottom:10}
});

export default HdCard;
