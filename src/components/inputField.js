import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
const InputField = props => {
  const {txt, viewStl, inptStl, txtStl} = props;

  return (
    <View style={viewStl}>
      <Text style={txtStl}>{txt}</Text>
      <TextInput placeholder={`Enter ${txt}`} style={inptStl} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default InputField;
