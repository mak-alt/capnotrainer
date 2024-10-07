import React, {useState, useEffect, useRef} from 'react';
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
import {Item, Radio} from 'native-base';
import InputField from '../../components/inputField';
import HeaderBack from '../../components/headerBack';
import Icon from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import PassField from '../../components/passField';
import {Picker} from 'native-base';
const CreateTrainer = ({props, navigation}) => {
  const {StatusBarManager} = NativeModules;
  const [countryVal, setCountryVal] = useState('America');
  const [cityVal, setCityVal] = useState('Florida');
  const [result, setResult] = useState('America');
  const [resultTrainer, setResultTrainer] = useState('');
  const [resultState, setResultState] = useState('Florida');
  const [visible, setVisible] = useState(false);
  const [trainerType, setTrainerType] = useState(true);
  const [trainerActive, setTrainerActive] = useState(true);

  const [pass, setPass] = useState('');
  useEffect(() => {
    // console.log(Country.getAllCountries(),'asdasasd')
  }, []);

  const changeVisible = () => {
    setVisible(!visible);
  };
  const changePass = e => {
    setPass(e);
  };

  const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'America', 'Africa', 'Malaysia', 'Pakistan'],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark',
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setResult('America');
        } else if (buttonIndex === 2) {
          setResult('Africa');
        } else if (buttonIndex === 3) {
          setResult('Malaysia');
        } else if (buttonIndex === 4) {
          setResult('Pakistan');
        }
      },
    );
  const onPressState = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Florida', 'Hawaii', 'Georgia', 'Alabama'],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark',
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setResultState('Florida');
        } else if (buttonIndex === 2) {
          setResultState('Hawaii');
        } else if (buttonIndex === 3) {
          setResultState('Georgia');
        } else if (buttonIndex === 4) {
          setResultState('Alamaba');
        }
      },
    );

  const onPressTrainer = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Rose', 'Michael', 'Jordan'],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark',
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setResultTrainer('Rose');
        } else if (buttonIndex === 2) {
          setResultTrainer('Michael');
        } else if (buttonIndex === 3) {
          setResultTrainer('Jordan');
        }
      },
    );

  return (
    <View style={styles.container}>
      <HeaderBack
        navigation={navigation}
        routesNames="associatetrainer"
        txt="Edit Trainer"
      />

      {/* MAIN VIEW START */}

      <View>
        <Text
          style={{
            marginLeft: 10,
            marginTop: 10,
            fontSize: 14,
            fontWeight: 'bold',
          }}>
          Associate Trainer Information
        </Text>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 10,
            color: 'gray',
            fontWeight: 'bold',
          }}>
          IMPORTANT : Please use 'N/A' if the field is unknown, not applied to
          your trainers etc.
        </Text>

        <ScrollView showsHorizontalScrollIndicator={false}>
          <View
            style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 100}}>
            {Platform.OS === 'ios' ? (
              <View
                style={{
                  width: '90%',
                  // marginRight: '3%',
                  marginLeft: '5%',
                  marginTop: 20,
                }}>
                <Text style={styles.txtStl}>Select Associate Trainer</Text>
                <TouchableOpacity
                  onPress={() => onPressTrainer()}
                  style={{
                    marginTop: 0,
                    height: 38,
                    borderColor: 'purple',
                    borderWidth: 0.5,
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      margin: 10,
                      color: 'gray',
                    }}>
                    {resultTrainer}
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View
                style={{
                  width: '90%',
                  marginLeft: '5%',
                  // marginRight: '3%',
                  // marginLeft: '5%',
                  marginTop: 20,
                }}>
                <Text style={styles.txtStl}>Select Associate Trainer</Text>
                <View
                  style={{
                    borderColor: 'purple',
                    borderWidth: 0.5,
                    borderRadius: 5,
                  }}>
                  <Picker
                    mode="dropdown"
                    style={{
                      width: '95%',
                      height: 40,
                      marginBottom: 5,
                      color: 'black',
                    }}
                    // itemStyle={{
                    //   width: '100%',
                    //   borderColor: 'purple',
                    //   borderWidth: 0.5,
                    //   padding: 10,
                    //   borderRadius: 5,
                    //   height: 40,
                    //   marginBottom: 5,
                    //   color: 'gray',
                    //   backgroundColor: 'white',
                    //   fontSize: 17,
                    // }}
                    selectedValue={countryVal}
                    onValueChange={(itemValue, itemIndex) => {
                      setCountryVal(itemValue);
                    }}
                    textInputProps={{numberOfLines: 2}}>
                    <Picker.Item label="Bob" value="America" />
                    <Picker.Item label="Michael" value="Africa" />
                    <Picker.Item label="Tom" value="Italy" />
                  </Picker>
                </View>
              </View>
            )}

            <View style={{width: '90%', marginLeft: '5%', marginTop: 20}}>
              <Text style={styles.txtStl}>Select Trainer Type</Text>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <TouchableOpacity
                  style={{
                    width: '50%',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                  }}
                  onPress={() => setTrainerType(true)}>
                  <Fontisto
                    name={
                      trainerType ? 'radio-btn-active' : 'radio-btn-passive'
                    }
                    size={20}
                    style={{marginRight: 10, marginTop: -2}}
                    color={trainerType ? 'purple' : 'gray'}
                  />
                  <Text style={styles.txtStl}>List Active Trainers Only</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setTrainerType(false)}
                  style={{
                    width: '50%',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                  }}>
                  <Fontisto
                    name={
                      trainerType ? 'radio-btn-passive' : 'radio-btn-active'
                    }
                    size={20}
                    style={{marginHorizontal: 10, marginTop: -2}}
                    color={trainerType ? 'gray' : 'purple'}
                  />
                  <Text style={styles.txtStl}>List All Trainers</Text>
                </TouchableOpacity>
              </View>
            </View>

            <InputField
              txt="First Name"
              viewStl={styles.viewNty}
              txtStl={styles.txtStl}
              inptStl={styles.inptStl}
            />
            <InputField
              txt="Last Name"
              viewStl={styles.viewNty}
              txtStl={styles.txtStl}
              inptStl={styles.inptStl}
            />
            <View style={{width: '90%', marginLeft: '5%', marginTop: 20}}>
              <Text style={styles.txtStl}>Deactivate Trainer</Text>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <TouchableOpacity
                  style={{
                    width: '50%',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                  }}
                  onPress={() => setTrainerActive(true)}>
                  <Fontisto
                    name={
                      trainerActive ? 'radio-btn-active' : 'radio-btn-passive'
                    }
                    size={20}
                    style={{marginRight: 10, marginTop: -2}}
                    color={trainerActive ? 'purple' : 'gray'}
                  />
                  <Text style={styles.txtStl}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setTrainerActive(false)}
                  style={{
                    width: '50%',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                  }}>
                  <Fontisto
                    name={
                      trainerActive ? 'radio-btn-passive' : 'radio-btn-active'
                    }
                    size={20}
                    style={{marginHorizontal: 10, marginTop: -2}}
                    color={trainerActive ? 'gray' : 'purple'}
                  />
                  <Text style={styles.txtStl}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
            <InputField
              txt="Profession"
              viewStl={styles.viewNty}
              txtStl={styles.txtStl}
              inptStl={styles.inptStl}
            />
            <InputField
              txt="Highest Degree Earned"
              viewStl={styles.viewNty}
              txtStl={styles.txtStl}
              inptStl={styles.inptStl}
            />
            <InputField
              txt="Years of professional Exprience"
              viewStl={styles.viewNty}
              txtStl={styles.txtStl}
              inptStl={styles.inptStl}
            />
            <InputField
              txt="License"
              viewStl={styles.viewNty}
              txtStl={styles.txtStl}
              inptStl={styles.inptStl}
            />
            <InputField
              txt="Certficate"
              viewStl={styles.viewNty}
              txtStl={styles.txtStl}
              inptStl={styles.inptStl}
            />
            <InputField
              txt="Email"
              viewStl={styles.viewNty}
              txtStl={styles.txtStl}
              inptStl={styles.inptStl}
            />

            <PassField
              onChangePass={e => changePass(e)}
              Icon={Icon}
              viewNty={styles.viewNty}
              txtStl={styles.txtStl}
              passView={styles.passView}
              visible={visible}
              onChange={() => changeVisible()}
            />
            <InputField
              txt="Telephone"
              viewStl={styles.viewNty}
              txtStl={styles.txtStl}
              inptStl={styles.inptStl}
            />
            <View style={{width: '90%', marginLeft: '5%', marginTop: 20}}>
              <Text
                style={{
                  fontSize: 12,
                  marginBottom: 5,
                  color: 'purple',
                  fontWeight: 'bold',
                }}>
                Address
              </Text>
              <TextInput
                placeholder="Enter Residential address 1"
                style={{
                  borderColor: 'purple',
                  borderWidth: 0.5,
                  padding: 10,
                  borderRadius: 5,
                }}
              />
              <TextInput
                placeholder="Enter Residential address 2"
                style={{
                  marginTop: 10,
                  borderColor: 'purple',
                  borderWidth: 0.5,
                  padding: 10,
                  borderRadius: 5,
                }}
              />
            </View>
            {Platform.OS === 'ios' ? (
              <View
                style={{
                  width: '42%',
                  marginRight: '3%',
                  marginLeft: '5%',
                  marginTop: 20,
                }}>
                <Text style={styles.txtStl}>Select Country</Text>
                <TouchableOpacity
                  onPress={() => onPress()}
                  style={{
                    marginTop: 0,
                    height: 38,
                    borderColor: 'purple',
                    borderWidth: 0.5,
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      margin: 10,
                      color: 'gray',
                    }}>
                    {result}
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View
                style={{
                  width: '90%',

                  marginLeft: '5%',
                  marginTop: 20,
                }}>
                <Text style={styles.txtStl}>Select Country</Text>
                <View
                  style={{
                    borderColor: 'purple',
                    borderWidth: 0.5,
                    borderRadius: 5,
                  }}>
                  <Picker
                    mode="dropdown"
                    style={{
                      width: '95%',
                      height: 40,
                      marginBottom: 5,
                      color: 'black',
                    }}
                    // itemStyle={{
                    //   width: '100%',
                    //   borderColor: 'purple',
                    //   borderWidth: 0.5,
                    //   padding: 10,
                    //   borderRadius: 5,
                    //   height: 40,
                    //   marginBottom: 5,
                    //   color: 'gray',
                    //   backgroundColor: 'white',
                    //   fontSize: 17,
                    // }}
                    selectedValue={countryVal}
                    onValueChange={(itemValue, itemIndex) => {
                      setCountryVal(itemValue);
                    }}
                    textInputProps={{numberOfLines: 2}}>
                    <Picker.Item label="am" value="America" />
                    <Picker.Item label="af" value="Africa" />
                    <Picker.Item label="it" value="Italy" />
                    <Picker.Item label="pk" value="Pakistan" />
                  </Picker>
                </View>
              </View>
            )}
            {Platform.OS === 'ios' ? (
              <View
                style={{
                  width: '42%',
                  marginRight: '3%',
                  marginLeft: '5%',
                  marginTop: 20,
                }}>
                <Text style={styles.txtStl}>Select State</Text>
                <TouchableOpacity
                  onPress={() => onPressState()}
                  style={{
                    marginTop: 0,
                    height: 38,
                    borderColor: 'purple',
                    borderWidth: 0.5,
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      margin: 10,
                      color: 'gray',
                    }}>
                    {resultState}
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View
                style={{
                  width: '90%',

                  marginLeft: '5%',
                  marginTop: 20,
                }}>
                <Text style={styles.txtStl}>Select State</Text>
                <View
                  style={{
                    borderColor: 'purple',
                    borderWidth: 0.5,
                    borderRadius: 5,
                  }}>
                  <Picker
                    mode="dropdown"
                    style={{
                      width: '95%',
                      height: 40,
                      marginBottom: 5,
                      color: 'black',
                    }}
                    // itemStyle={{
                    //   width: '100%',
                    //   borderColor: 'purple',
                    //   borderWidth: 0.5,
                    //   padding: 10,
                    //   borderRadius: 5,
                    //   height: 40,
                    //   marginBottom: 5,
                    //   color: 'gray',
                    //   backgroundColor: 'white',
                    //   fontSize: 17,
                    // }}
                    selectedValue={cityVal}
                    onValueChange={(itemValue, itemIndex) => {
                      setCityVal(itemValue);
                    }}
                    textInputProps={{numberOfLines: 2}}>
                    <Picker.Item label="Florida" value="Florida" />
                    <Picker.Item label="California" value="California" />
                    <Picker.Item label="Los Angeles" value="Los Angeles" />
                  </Picker>
                </View>
              </View>
            )}
            <InputField
              txt="City"
              viewStl={styles.viewNty}
              txtStl={styles.txtStl}
              inptStl={styles.inptStl}
            />
            <InputField
              txt="Postal Code"
              viewStl={styles.viewNty}
              txtStl={styles.txtStl}
              inptStl={styles.inptStl}
            />

            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 0.5,
                backgroundColor: 'purple',
                marginTop: 20,
                borderRadius: 5,
                width: '90%',
                marginLeft: '5%',
                height: 40,
              }}>
              <Text style={{color: 'white'}}>Edit Trainer Profile</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {/* MAIN VIEW END */}
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
  viewStlFN: {width: '42%', marginRight: '3%', marginLeft: '5%', marginTop: 20},
  txtStl: {
    fontSize: 12,
    marginBottom: 5,
    color: 'purple',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  inptStl: {
    borderColor: 'purple',
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 5,
  },
  viewStlLN: {width: '42%', marginLeft: '3%', marginRight: '5%', marginTop: 20},
  viewNty: {width: '90%', marginLeft: '5%', marginTop: 20},
  passView: {
    borderColor: 'purple',
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 5,
    height: 50,
    flexDirection: 'row',
  },
});

export default CreateTrainer;
