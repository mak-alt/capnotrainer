import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
const IntroTxt = props => {
  console.log(props, 'props');

  return <Text style={styles.txtStl}>{props.txt}</Text>;
};

const styles = StyleSheet.create({
  txtStl: {
    width: '90%',
    alignSelf: 'center',
    fontSize: 12,
    fontFamily: 'arial',
    textAlign: 'center',
    lineHeight: 15,
    marginTop: 10,
    color: '#646566',
  },
});

export default IntroTxt;
