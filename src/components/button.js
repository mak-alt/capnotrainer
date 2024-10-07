import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
const CustomButton = props => {
  return (
    <TouchableOpacity
      style={styles.viewStl}
      onPress={() => {
        props.navigation.navigate(props.routeNames);
      }}>
      <Text style={styles.txtStl}>{props.txt}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewStl: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 0.8,
    paddingVertical: 10,
    borderColor: 'purple',
  },
  txtStl: {textAlign: 'center', color: 'purple', fontWeight: 'bold'},
});

export default CustomButton;
