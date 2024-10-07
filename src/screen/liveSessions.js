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
} from 'react-native';
import {Button} from 'native-base';
import Headers from '../components/headers';
import IntroTxt from '../components/introTxt';
import CustomButton from '../components/button';
const LiveSession = ({props, navigation}) => {
  const {StatusBarManager} = NativeModules;

  return (
    <View style={styles.container}>
      <Headers navigation={navigation} />

      {/* MAIN VIEW START */}

      <View>
        <IntroTxt
          txt="What you see on the ADMIN COMPUTER DASHBOARD will depend on how you have configured your profile. 
  If you have configured your Dashboard to work with clients and Associates, as well as for doing group work,
   you may (1) engage LIVE physiology learning applications, (2) enter the CLOUD DATABASE DASHBOARD to create, edit,
    and view data reports, records and forms, (3) configure your system for simultaneous use of multiple Capno Trainers (4) 
    create, edit and view Associate and Client profiles, and (5) access and edit your own profile including associated setup"
        />

        <CustomButton
          txt="Proceed without a client name"
          routeNames="graphrepresent"
          navigation={navigation}
        />
        <CustomButton
          txt="Choose a client and proceed"
          routeNames="createtrainer"
          navigation={navigation}
        />
        {/* <CustomButton
          txt="Enter new client and proceed"
          routeNames="createtrainer"
          navigation={navigation}
        /> */}

        {/* <View style={{width:'90%',alignSelf:'center',marginTop:20,borderWidth:0.8,paddingVertical:10,borderColor:'purple'}}>
<Text style={{textAlign:'center',color:'purple',fontWeight:'bold'}}>Proceed without a client name</Text>
</View> */}
        {/* <View style={{width:'90%',alignSelf:'center',marginTop:20,borderWidth:0.8,paddingVertical:10,borderColor:'purple'}}>
<Text style={{textAlign:'center',color:'purple',fontWeight:'bold'}}>Choose a client and proceed</Text>
</View>
<View style={{width:'90%',alignSelf:'center',marginTop:20,borderWidth:0.8,paddingVertical:10,borderColor:'purple'}}>
<Text style={{textAlign:'center',color:'purple',fontWeight:'bold'}}>Enter new client and proceed</Text>
</View> */}
      </View>

      {/* MAIN VIEW START */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop:
      Platform.OS === 'ios'
        ? NativeModules.StatusBarManager.HEIGHT
        : NativeModules.StatusBarManager.HEIGHT,
  },
});

export default LiveSession;
