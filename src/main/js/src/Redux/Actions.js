import {
  SIGNUP_USER_FAIL,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
} from './Types';
import axios from 'axios'
import API from '../Services/api'

export const signupUser = (username, password, firstName, lastName, email) => {
  return (dispatch) => {
    console.log('sending sign up req...')
    API.createUser(username, password, firstName, lastName, email).then((res) => {
      if(res.status === 200){
        dispatch(loginUserSuccess(username))
      } else {
        dispatch(signupUserFail())
      }
    }).catch((err) => {
      console.log(err)
      dispatch(signupUserFail())
    })
  }
}

export const loginUser = (username) => {
  return (dispatch) => {
    console.log('sending login req...')
    API.getUser().then((res) => {
      if(res){
        dispatch(loginUserSuccess(username))
      } else {
        dispatch(loginUserFail())
      }
    }).catch((err) => {
      dispatch(loginUserFail())
      console.log('Error: ', err)
    })
  }
}

export const loginUserSuccess = (username) => {
  console.log('log in user success')
  return {
    type: LOGIN_USER_SUCCESS,
    payload: username
  }
}

export const loginUserFail = () => {
  return {
    type: LOGIN_USER_FAIL
  }
}

export const signupUserFail = () => {
  console.log('sign up fail')
  return {
    type: SIGNUP_USER_FAIL
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
  }
}
