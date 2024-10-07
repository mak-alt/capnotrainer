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
import {Button} from 'native-base';
import Headers from '../../components/headerBack';
import IntroTxt from '../../components/introTxt';
import CustomButton from '../../components/button';
import Icon from 'react-native-vector-icons/EvilIcons';
import HdCard from '../../components/hdCard';
const CreateHd = ({props, navigation}) => {
  const {StatusBarManager} = NativeModules;

  return (
    <View style={styles.container}>
      <Headers
        navigation={navigation}
        routesNames="profile"
        txt="Hardware Profiles"
      />

      {/* MAIN VIEW START */}

      <View>
        <ScrollView style={{marginBottom: 35}}>
          <Text style={styles.HeadTxt}>
            Registered CapnoTrainer P5.0 Instruments
          </Text>

          <HdCard />
          <HdCard />

          <Text style={styles.HeadTxt}>
            Registered CapnoTrainer P6.0 Instruments
          </Text>

          <HdCard />
          <HdCard />
          <HdCard />
          <HdCard />
          <HdCard />
          <HdCard />
        </ScrollView>
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
    backgroundColor: '#FFFFFF',
  },
  HeadTxt: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 20,
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardHead: {width: '33%', textAlign: 'center'},
  cardTxt: {color: 'gray', width: '33%', textAlign: 'center'},
  cardBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    height: 40,
    width: '95%',
    marginLeft: '2.5%',
    borderRadius: 5,
    borderColor: 'red',
    borderWidth: 0.3,
    backgroundColor: 'white',
  },
  headView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  txtView: {flexDirection: 'row', marginTop: 5},
  cardView: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    width: '95%',
    marginLeft: '2.5%',
    borderWidth: 0.3,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: 'white',
    marginTop: 10,
  },
});

export default CreateHd;
