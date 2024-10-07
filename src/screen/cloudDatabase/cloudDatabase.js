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
  SafeAreaView,
} from 'react-native';
import {Button} from 'native-base';
import Headers from '../../components/headers';
import IntroTxt from '../../components/introTxt';
import CustomButton from '../../components/button';
import {WebView} from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CloudDatabase = ({props, navigation}) => {
  const {StatusBarManager} = NativeModules;
  const [webView, setWebView] = useState(false);
  const [dashboardLink, setDashboardLink] = useState('');

  const postForm = (path, params, id) => {
    setWebView(true);
  };

  const handleWebViewNavigationStateChange = () => {
    setWebView(false);
  };
  const getData = async () => {
    let userdata = await AsyncStorage.getItem('userData');
    let updateData = JSON.parse(userdata);
    setDashboardLink(updateData.data.profileData.dashboard_link);
    console.log(
      'userData',
      updateData.data.profileData.dashboard_link,
      'userData',
    );
  };

  useEffect(() => {
    (async () => getData())();
  }, []);

  return (
    <View style={styles.container}>
      {webView ? (
        <WebView
          style={{
            width: '98%',
            height: '100%',
            marginTop: 30,
            alignContent: 'center',
          }}
          source={{uri: dashboardLink}}
          // source={{
          //     html: `<html><body onload="document.forms[0].submit();"><form action=method="post"><input type='Hidden' name='TransactionID' value= />
          //     <input type="submit" value="Submit" hidden>
          //     </form></html>`}}
        />
      ) : (
        <SafeAreaView style={{flex: 1}}>
          <Headers navigation={navigation} />

          {/* MAIN VIEW START */}

          <View>
            <IntroTxt txt="Session data, notes, and images (snapshots) are autosaved to your Cloud Database account. If you become disconnected from the Internet, these data and files are stored in temporary files until you are reconnected and then are automatically uploaded. Data and files are NOT available on your computer Click on Cloud Dashboard to access your Cloud Database on. line account" />

            {/* <CustomButton
              txt="Cloud Database"
              routeNames="createtrainer"
              navigation={navigation}
            /> */}
            <TouchableOpacity
              style={styles.viewStl}
              onPress={() => {
                // setWebView(true);
                // props.navigation.navigate(props.routeNames);
              }}>
              <Text style={styles.txtStl}>Cloud Database</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
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
  },
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

export default CloudDatabase;

//  {"result":"success","data":{"profileData":{"_name":"Arshad Khan","is_admin":true,"is_practitioner":false,"is_client":false,"dashboard_link":"https://capnolearning.com/api/setlogin?access=c8c41c4a18675a74e01c8a20e8a0f662","admin_profile":{"basics":{"id":"c8c41c4a18675a74e01c8a20e8a0f662","firstName":"Arshad","lastName":"Khan","business":"bizhawkz","email":"dev@capnolearning.com","sex":null,"age":null,"education":null,"profession":"NA","degree":"NAA","experience":null,"license":null,"certificate":"NA","tel":"5056702874","serial":"pASS!234","address":"7 Camino de Rey Cir","complete":1,"address2":"","postal":"87506","state":"3956","status":1,"country":"231","city":"Santa Fe","has_group":1,"has_practioner":1,"has_client":"1","complaint":null,"associated_owner":"","associated_practioner":"","subscription_end_date":"1646640707","renewal_link":"https://capnolearning.com/dashboard2/renewpayment"},"questions":{"first":true,"second":true,"third":true,"fourth":true,"fifth":true}},"practitioners":[[{"id":"eeb69a3cb92300456b6a5f4162093851","firstName":"Arshad","lastName":"Khan","sex":null,"age":"null","education":null,"profession":"N/A","degree":"N/A","experience":"12","license":"N/A","certificate":"N/A","email":"arshad123@gmail.com","password":"123","tel":"23","address":"N/A","address2":"N/A","city":"adf","status":1,"postal":"asdfa","state":"74","complete":1,"country":"2","has_group":0,"has_client":"1","has_practitioner":null,"complaint":null,"business":null,"associated_owner":"c8c41c4a18675a74e01c8a20e8a0f662","associated_practioner":null}]],"clients":[[[{"id":"c4b31ce7d95c75ca70d50c19aef08bf1","firstName":"Arshad","lastName":"Khan (Self)","sex":null,"age":null,"education":null,"profession":"NA","degree":"NAA","experience":null,"license":null,"certificate":"NA","tel":"5056702874","email":"dev@capnolearning.com (Self)","password":"pASS!234","complaint":null,"address":"7 Camino de Rey Cir","address2":"","postal":"87506","state":"3956","country":"231","complete":1,"status":1,"city":"Santa Fe","has_group":1,"has_client":"1","has_practitioner":null,"business":null,"associated_owner":"c8c41c4a18675a74e01c8a20e8a0f662","associated_practioner":"c8c41c4a18675a74e01c8a20e8a0f662"}]]],"groups":[[{"id":"437d7d1d97917cd627a34a6a0fb41136","name":"Something-Test","email":"smo@gmail.com","password":"123","device":3,"status":1,"associated_owner":"c8c41c4a18675a74e01c8a20e8a0f662","associated_practioner":"c8c41c4a18675a74e01c8a20e8a0f662","clients":[{"id":146,"groupid":"437d7d1d97917cd627a34a6a0fb41136","name":"Arshad","serialnumber":"0"},{"id":147,"groupid":"437d7d1d97917cd627a34a6a0fb41136","name":"Faraz","serialnumber":"1"}]},{"id":"d707329bece455a462b58ce00d1194c9","name":"CapnoSimSix","email":"capnosix@gmail.com","password":"123","device":3,"status":1,"associated_owner":"c8c41c4a18675a74e01c8a20e8a0f662","associated_practioner":"c8c41c4a18675a74e01c8a20e8a0f662","clients":[{"id":148,"groupid":"d707329bece455a462b58ce00d1194c9","name":"Arshad","serialnumber":"0"},{"id":149,"groupid":"d707329bece455a462b58ce00d1194c9","name":"Faraz","serialnumber":"1"},{"id":150,"groupid":"d707329bece455a462b58ce00d1194c9","name":"Ali","serialnumber":"2"},{"id":151,"groupid":"d707329bece455a462b58ce00d1194c9","name":"Usama","serialnumber":"3"},{"id":152,"groupid":"d707329bece455a462b58ce00d1194c9","name":"Hamza","serialnumber":"4"},{"id":153,"groupid":"d707329bece455a462b58ce00d1194c9","name":"Mashood","serialnumber":"5"}]}]],"devices":[{"five":{"available":"true","list":[{"id":125,"serial_key":"P5.0-test","date_activate":"1631906450"}]},"six":{"available":"true","list":[{"id":89,"serial_key":"P6.0-test","date_activate":"1627221720","internal_id":"597"}]}}]}}}
