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
const AssociateTrainer = ({props, navigation}) => {
  const {StatusBarManager} = NativeModules;

  return (
    <View style={styles.container}>
      <Headers navigation={navigation} />

      {/* MAIN VIEW START */}

      <View>
        <IntroTxt txt="These options allow you to create, edit or deactivate Associate Trainer profiles on your COMPUTER DASHBOARD. Any changes you make here will be automatically saved to your CLOUD DASHBOARD. If you are disconnected from the Internet then these changes will be saved to a temporary file and automatically uploaded when you are reconnected" />

        <CustomButton
          txt="Add a new associate trainer profile"
          routeNames="createtrainer"
          navigation={navigation}
        />
        <CustomButton
          txt="Edit an associate trainer profile"
          routeNames="edittrainer"
          navigation={navigation}
        />

        {/* <View style={{width:'90%',alignSelf:'center',marginTop:20,borderWidth:0.8,paddingVertical:10,borderColor:'purple'}}>
<Text style={{textAlign:'center',color:'purple',fontWeight:'bold'}}>Proceed without a client name</Text>
</View>
<View style={{width:'90%',alignSelf:'center',marginTop:20,borderWidth:0.8,paddingVertical:10,borderColor:'purple'}}>
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

export default AssociateTrainer;
