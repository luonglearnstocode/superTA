import {
  SIGNUP_USER_FAIL,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
} from './Types';

const INITIAL_STATE = {
  username: null,
  error: null
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch(action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, username: action.payload }
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Log in failed!'}
    case SIGNUP_USER_FAIL:
      return { ...state, error: 'Sign up failed!'}
    case LOGOUT_USER_SUCCESS:
      return { error: null , username: null}
    default:
      return state
  }
}
