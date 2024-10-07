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
import {Picker, Item} from 'native-base';
import InputField from '../../components/inputField';
import HeaderBack from '../../components/headerBack';
import PassField from '../../components/passField';
// import { Country }  from 'country-state-city';
// import {Picker as SelectPicker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Entypo';
const AddClient = ({props, navigation}) => {
  const {StatusBarManager} = NativeModules;
  const [countryVal, setCountryVal] = useState('America');
  const [cityVal, setCityVal] = useState('Florida');
  const [result, setResult] = useState('America');
  const [resultState, setResultState] = useState('Florida');

  //   Trainer
  const [resultTrainer, setResultTrainer] = useState('');
  const [resultStateTrainer, setResultStateTrainer] = useState('');

  //   SEX
  const [resultSex, setResultSex] = useState('Select an option');
  const [resultStateSex, setResultStateSex] = useState('Select an option');

  const [visible, setVisible] = useState(false);

  const [pass, setPass] = useState('');
  useEffect(() => {}, []);
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

  const onPressTrainer = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'John', 'Adam', 'Michael'],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark',
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setResultStateTrainer('John');
        } else if (buttonIndex === 2) {
          setResultStateTrainer('Adam');
        } else if (buttonIndex === 3) {
          setResultStateTrainer('Michael');
        }
      },
    );
  };
  const onPressSex = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Select an option', 'Female', 'Male', 'Other'],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark',
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setResultStateSex('Select an option');
        } else if (buttonIndex === 2) {
          setResultStateSex('Female');
        } else if (buttonIndex === 3) {
          setResultStateSex('Male');
        } else if (buttonIndex === 3) {
          setResultStateSex('Other');
        }
      },
    );
  };

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

  return (
    <View style={styles.container}>
      <HeaderBack
        navigation={navigation}
        routesNames="clients"
        txt="Create Client"
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
          Client Information
        </Text>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 10,
            color: 'gray',
            fontWeight: 'bold',
          }}>
          IMPORTANT : Please use 'N/A' if the field is unknown, not applied to
          your client etc.
        </Text>

        <ScrollView showsHorizontalScrollIndicator={false}>
          <View
            style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 100}}>
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
            {/* <InputField
              txt="Profession"
              viewStl={styles.viewStlFN}
              txtStl={styles.txtStl}
              inptStl={styles.inptStl}
            /> */}
            {Platform.OS === 'ios' ? (
              <View
                style={{
                  width: '42%',
                  marginRight: '3%',
                  marginLeft: '5%',
                  marginTop: 20,
                }}>
                <Text style={styles.txtStl}>Sex</Text>
                <TouchableOpacity
                  onPress={() => onPressSex()}
                  style={{
                    marginTop: 0,
                    height: 38,
                    borderColor: 'purple',
                    borderWidth: 0.5,
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      margin: 10,
                      color: 'gray',
                    }}>
                    {resultStateSex}
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View
                style={{
                  width: '90%',
                  // marginRight: '3%',
                  marginLeft: '5%',
                  marginTop: 20,
                }}>
                <Text style={styles.txtStl}>Sex</Text>
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
                    selectedValue={resultSex}
                    onValueChange={(itemValue, itemIndex) => {
                      setResultSex(itemValue);
                    }}
                    textInputProps={{numberOfLines: 2}}>
                    <Picker.Item
                      label="Select an option"
                      value="Select an option"
                    />
                    <Picker.Item label="Female" value="Female" />
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Other" value="Other" />
                  </Picker>
                </View>
              </View>
            )}

            <InputField
              txt="Age"
              viewStl={styles.viewNty}
              txtStl={styles.txtStl}
              inptStl={styles.inptStl}
            />
            <InputField
              txt="Education"
              viewStl={styles.viewNty}
              txtStl={styles.txtStl}
              inptStl={styles.inptStl}
            />
            <InputField
              txt="Profession"
              viewStl={styles.viewNty}
              txtStl={styles.txtStl}
              inptStl={styles.inptStl}
            />
            <InputField
              txt="Telephone"
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
              txt="Educational Objective"
              viewStl={styles.viewNty}
              txtStl={styles.txtStl}
              inptStl={styles.inptStl}
            />

            {Platform.OS === 'ios' ? (
              <View
                style={{
                  width: '42%',
                  marginRight: '3%',
                  marginLeft: '5%',
                  marginTop: 20,
                }}>
                <Text style={styles.txtStl}>Associate Trainer</Text>
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
                      fontSize: 14,
                      margin: 10,
                      color: 'gray',
                    }}>
                    {resultStateTrainer}
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View
                style={{
                  width: '90%',
                  // marginRight: '3%',
                  marginLeft: '5%',
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
                    selectedValue={resultTrainer}
                    onValueChange={(itemValue, itemIndex) => {
                      setResultTrainer(itemValue);
                    }}
                    textInputProps={{numberOfLines: 2}}>
                    <Picker.Item label="John" value="John" />
                    <Picker.Item label="Adam" value="Adam" />
                    <Picker.Item label="Michael" value="Michael" />
                  </Picker>
                </View>
              </View>
            )}
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
                      fontSize: 14,
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
                  // marginRight: '3%',
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
                    <Picker.Item label="America" value="America" />
                    <Picker.Item label="Africa" value="Africa" />
                    <Picker.Item label="Italy" value="Italy" />
                    <Picker.Item label="Pakistan" value="Pakistan" />
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
                      fontSize: 14,
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
                  // marginRight: '3%',
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
              <Text style={{color: 'white'}}>Create Client Profile</Text>
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

export default AddClient;
