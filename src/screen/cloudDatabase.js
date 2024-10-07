import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar,
  NativeModules,
} from 'react-native';
import Headers from '../components/headers';
const Profile = ({props, navigation}) => {
  return (
    <View style={styles.container}>
      <Headers navigation={navigation} />
      <TouchableOpacity>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
    // </Drawer>
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
