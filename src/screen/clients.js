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
const Clients = ({props, navigation}) => {
  const {StatusBarManager} = NativeModules;

  return (
    <View style={styles.container}>
      <Headers navigation={navigation} />

      {/* MAIN VIEW START */}

      <View>
        <IntroTxt
          txt="These options allow you to create, edit or deactivate (lent profiles on your COMPUTER DASHBOARD Any changes you make here will be automatically saved to your CLOUD DASHBOARD If you are disconnected from the Internet, then these changes will be saved to a temporary file and atitommically uploaded when you are reconnected. "
        />

        <CustomButton
          txt="Add a new client profile"
          routeNames="addclient"
          navigation={navigation}
        />
        <CustomButton
          txt="Edit a client profile"
          routeNames="editclient"
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

export default Clients;
