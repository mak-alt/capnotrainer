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
import Icon from 'react-native-vector-icons/Ionicons';
import logo from '../assets/images/icons.png';

const Headers = props => {
  const {StatusBarManager} = NativeModules;
  const {navigation, routesNames, txt} = props;

  return (
    <View style={styles.mainView}>
      <View style={styles.menuIcon}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(routesNames);
          }}>
          <Icon
            name={'arrow-back'}
            size={30}
            color="purple"
            style={styles.menuIcons}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: Platform.OS == 'ios' ? 0 : -10,
        }}>
        <Image source={logo} style={{width: 20, height: 20, marginRight: 10}} />
        <Text style={styles.mainHead}>{txt}</Text>
      </View>
      <View></View>
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
  mainView: {
    height: 30,
    // paddingBottom: 10,
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  menuIcon: {marginLeft: -30, marginTop: Platform.OS == 'ios' ? -10 : -20},
  menuIcons: {width: 40, height: 50, marginTop: 5},
  mainHead: {fontSize: 16, color: 'purple', fontWeight: 'bold'},
});

export default Headers;
