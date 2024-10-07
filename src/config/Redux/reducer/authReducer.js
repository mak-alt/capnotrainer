import ActionTypes from '../constant/constant';
const initial_state = {
  authData: [],
  message: '',
  error: '',
  loading: false,
  result: '',
};

const authReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN_REQUEST:
      return {...state, loading: true};
    case ActionTypes.USER_LOGIN_SUCCESS:
      //   console.log(action.payload.data);
      return {
        ...state,
        loading: false,
        result: 'success',
        // userInfo: action.payload.data,
        // message: action.payload.message,
      };
    case ActionTypes.USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        result: 'fail',
        message: 'Invalid login credentials!',
      };
    case ActionTypes.CLEAR_MESSAGE:
      return {...state, message: '', result: '', loading: false};
    default:
      return state;
  }
};

export {authReducer};
