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
  ActionSheetIOS,
  TextInput,
} from 'react-native';
import {Picker} from 'native-base';
import Headers from '../../components/headerBack';
import IntroTxt from '../../components/introTxt';
import CustomButton from '../../components/button';
import RadioOption from '../../components/radioOption';
import PassField from '../../components/passField';
import Icon from 'react-native-vector-icons/Entypo';
import InputField from '../../components/inputField';
const EditProfile = ({props, navigation}) => {
  const {StatusBarManager} = NativeModules;

  const [workClient, setWorkClient] = useState(true);
  const [otherTrainer, setOtherTrainer] = useState(true);
  const [groupWork, setGroupWork] = useState(true);
  const [purPh6, setPurPh6] = useState(true);
  const [autoUpdate, setAutoUpdate] = useState(true);
  const [pass, setPass] = useState('');
  const [visible, setVisible] = useState(false);
  const [countryVal, setCountryVal] = useState('America');
  const [cityVal, setCityVal] = useState('Florida');
  const [result, setResult] = useState('America');
  const [resultTrainer, setResultTrainer] = useState('');
  const [resultState, setResultState] = useState('Florida');
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

  return (
    <View style={styles.container}>
      <Headers
        navigation={navigation}
        routesNames="profile"
        txt="Edit Profile"
      />

      {/* MAIN VIEW START */}

      <View>
        <Text style={styles.HeadTxt}>My Profile</Text>
        <Text style={styles.warnTxt}>
          IMPORTANT : All fields are required.Use N/A if the field is not
          applied to you .
        </Text>

        <ScrollView style={{marginBottom: 50}}>
          <RadioOption
            onChange={e => setWorkClient(e)}
            firstOption="Yes"
            secOption="No"
            Question="Question 1: I will be working with Clients."
            cond={workClient}
          />
          <RadioOption
            onChange={e => setOtherTrainer(e)}
            firstOption="Yes"
            secOption="No"
            Question="Question 2: There will be other trainers seeing clients besides me."
            cond={otherTrainer}
          />
          <RadioOption
            onChange={e => setGroupWork(e)}
            firstOption="Yes"
            secOption="No"
            Question="Question 3: I will be doing groupwork with multiple CaptoTrainers."
            cond={groupWork}
          />
          <RadioOption
            onChange={e => setPurPh6(e)}
            firstOption="Yes"
            secOption="No"
            Question="Question 4: I purchased the CapnoTrainer p6.0HRV option."
            cond={purPh6}
          />
          <RadioOption
            onChange={e => setAutoUpdate(e)}
            firstOption="Yes"
            secOption="No"
            Question="Question 5: Auto-update Mobile Application."
            cond={autoUpdate}
          />
          <View style={styles.fieldView}>
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
                      fontSize: 16,
                      margin: 10,
                      color: 'gray',
                    }}>
                    {resultState}
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.viewNty}>
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
              <Text style={{color: 'white'}}>Edit Profile Profile</Text>
            </TouchableOpacity>
          </View>
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
  viewStlFN: {width: '42%', marginRight: '3%', marginLeft: '5%', marginTop: 20},
  fieldView: {flexDirection: 'row', flexWrap: 'wrap', marginBottom: 100},
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
    height: 40,
    flexDirection: 'row',
  },
  HeadTxt: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  warnTxt: {
    marginLeft: 10,
    fontSize: 10,
    color: 'gray',
    fontWeight: 'bold',
  },
});

export default EditProfile;
