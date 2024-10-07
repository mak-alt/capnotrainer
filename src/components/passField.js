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
  TextInput,
  ScrollView,
  ActionSheetIOS,
} from 'react-native';
const PassField = props => {
  const {
    visible,
    onChange,
    onChangePass,
    viewNty,
    txtStl,
    passView,
    Icon,
    pass,
  } = props;
  return (
    <View style={viewNty}>
      <Text style={txtStl}>Password</Text>
      <View style={passView}>
        <TextInput
          onChangeText={e => onChangePass(e)}
          style={{width: '90%', color: 'purple', height: 45, marginTop: -5}}
          placeholder="Password"
          secureTextEntry={!visible}
          value={pass}
        />
        <TouchableOpacity
          onPress={() => onChange()}
          style={{width: '8%', marginLeft: '1%', marginTop: 5}}>
          <Icon
            name={visible ? 'eye' : 'eye-with-line'}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      </View>
    </View>
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

export default PassField;
