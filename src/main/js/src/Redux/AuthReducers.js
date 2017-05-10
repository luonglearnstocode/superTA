import {
  SIGNUP_USER_FAIL,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  LOGIN_USER,
  SIGNUP_USER
} from './Types';

const INITIAL_STATE = {
  username: null,
  error: null,
  loading: null
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch(action.type) {
    case LOGIN_USER:
    case SIGNUP_USER:
      return { ...state, loading: true }
    case LOGIN_USER_SUCCESS:
      return { ...state, username: action.payload, loading: false }
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Log in failed!', loading: false}
    case SIGNUP_USER_FAIL:
      return { ...state, error: 'Sign up failed!', loading: false}
    case LOGOUT_USER_SUCCESS:
      return { error: null , username: null, loading: false}
    default:
      return state
  }
}
