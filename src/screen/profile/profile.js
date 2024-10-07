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
import Headers from '../../components/headers';
import IntroTxt from '../../components/introTxt';
import CustomButton from '../../components/button';
const Profile = ({props, navigation}) => {
  const {StatusBarManager} = NativeModules;

  return (
    <View style={styles.container}>
      <Headers navigation={navigation} />

      {/* MAIN VIEW START */}

      <View>
        <IntroTxt
          txt="Register and remove new Capno Trainers devices"
        />
<IntroTxt
          txt="Users will be unable to use unregistered devices"
        />
        <CustomButton
          txt="Create / Edit Hardware Profiles"
          routeNames="createhd"
          navigation={navigation}
        />

<IntroTxt
          txt="Edit your profile settings such as name , address, email,etc"
        />
        <CustomButton
          txt="Edit My Profile"
          routeNames="editprofile"
          navigation={navigation}
        />
     

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

export default Profile;
