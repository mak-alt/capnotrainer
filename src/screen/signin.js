import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Button, Item} from 'native-base';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Entypo';
import {useSelector, useDispatch} from 'react-redux';
import {loginAuth, emptyMessage} from '../config/Redux/action/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Signin = props => {
  const [drawer, setDrawer] = useState([]);
  const [visible, setVisible] = useState(false);
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();
  const {loading, error, authData, message, result} = useSelector(
    state => state.authReducer,
  );

  useEffect(() => {
    if (result == 'success') {
      setEmail('');
      setPass('');
      dispatch(emptyMessage());
      props.navigation.navigate('drawerbar');
    } else if (result == 'fail') {
      alert(message);
      setTimeout(() => {
        dispatch(emptyMessage());
      }, 3000);
    }
    // else{
    //   alert(message);
    // }
  }, [result, message]);

  const signIn = () => {
    if (!email) {
      alert('Enter correct Email');
    } else if (!pass) {
      alert('Enter correct Password');
    } else if (!email) {
      alert('Enter correct Email');
    } else {
      dispatch(loginAuth(email, pass));
    }
  };

  const getData = async () => {
    let userdata = await AsyncStorage.getItem('userData');
    console.log(userdata, 'userData');
  };

  useEffect(() => {
    (async () => getData())();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{flex: 0.1}} />
      <View style={{flex: 0.8}}>
        <Text style={styles.mainHead}>CAPNOTRAINER</Text>
        <Text style={styles.signTxt}>SIGN IN</Text>
        <TextInput
          onChangeText={e => setEmail(e)}
          style={styles.textStl}
          placeholder="Email"
          value={email}
        />
        <Item
          style={{
            borderBottomColor: 'purple',
            borderBottomWidth: 1,
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
          <TextInput
            onChangeText={e => setPass(e)}
            style={{width: '90%'}}
            placeholder="Password"
            secureTextEntry={!visible}
            value={pass}
          />
          <TouchableOpacity
            onPress={() => setVisible(!visible)}
            style={{width: '8%', marginLeft: '1%', marginBottom: 5}}>
            <Icon
              name={visible ? 'eye' : 'eye-with-line'}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        </Item>
        {loading ? (
          <ActivityIndicator color="purple" style={{marginTop: 30}} />
        ) : (
          <TouchableOpacity onPress={() => signIn()} style={styles.btn}>
            <Text style={styles.btnTxt}>Sign In</Text>
          </TouchableOpacity>
        )}
        <View style={{marginLeft: 20, marginTop: 30, flexDirection: 'row'}}>
          <CheckBox
            value={remember}
            style={{width: 20, height: 20, color: 'purple'}}
            lineWidth={1}
            tintColor="purple"
            boxType="square"
            lineWidth={1}
            onFillColor="purple"
            onTintColor="purple"
            onCheckColor="purple"
            animationDuration={1}
            onValueChange={e => setRemember(!remember)}
            tintColors={{true: 'purple', false: 'purple'}}
          />
          <Text style={styles.rmbTxt}>Remember email and password</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainHead: {
    fontSize: 30,
    color: 'purple',
    fontWeight: '600',
    fontFamily: 'arial',
    textAlign: 'center',
  },
  textStl: {
    borderBottomWidth: 1,
    borderBottomColor: 'purple',
    width: '90%',
    alignSelf: 'center',
    marginTop: 50,
    fontSize: 16,
  },
  signTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 30,
    marginTop: 80,
  },
  btn: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'purple',
    alignItems: 'center',
    marginTop: 30,
    height: 45,
  },
  btnTxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
  rmbTxt: {fontSize: 16, marginLeft: 10, color: 'gray'},
});

export default Signin;
