import ActionTypes from '../constant/constant';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const emptyMessage = () => {
  return dispatch => {
    dispatch({type: ActionTypes.CLEAR_MESSAGE, payload: ''});
  };
};
const loginAuth = (email, pass) => async dispatch => {
  dispatch({type: ActionTypes.USER_LOGIN_REQUEST});

  const headers = {'Content-Type': 'application/json'};
  var formData = new FormData();
  formData.append('email', email);
  formData.append('password', pass);
  axios
    .post(`https://capnolearning.com/api/capno_user_login`, formData)
    .then(async res => {
      console.log(res.data.result, 'response');
      if (res.data.result == 'success') {
        let userData = JSON.stringify(res.data);
        await AsyncStorage.setItem('userData', userData);
        dispatch({
          type: ActionTypes.USER_LOGIN_SUCCESS,
          payload: res.data,
          message: 'Login Sucessfull',
          result: 'success',
        });
      } else {
        dispatch({
          type: ActionTypes.USER_LOGIN_FAIL,
          payload: 'Login Failed',
        });
      }
    })
    .catch(error => {
      dispatch({
        type: ActionTypes.USER_LOGIN_FAIL,
        payload: 'Login Failed',
      });

      // console.log(error.message);
    });
  // setTimeout(() => {
  //     if(email==emails && pass==passs){
  //         dispatch({ type: ActionTypes.USER_LOGIN_SUCCESS });
  //     }
  //     else if(email!=emails || pass!=passs){
  //         dispatch({ type: ActionTypes.USER_LOGIN_FAIL });
  //     }
  //     else{
  //         console.log('adsad')
  //     }
  // }, 3000);
};

export {loginAuth, emptyMessage};
