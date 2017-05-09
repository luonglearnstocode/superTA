import {
  SIGNUP_USER_FAIL,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
} from './Types';

const INITIAL_STATE = {
  username: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN_USER_SUCCESS:
      return { username: action.payload }
    case LOGIN_USER_FAIL:
    case SIGNUP_USER_FAIL:
    case LOGOUT_USER:
      return state
    default:
      return state
  }
}
