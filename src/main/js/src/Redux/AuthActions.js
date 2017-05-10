import {
  SIGNUP_USER_FAIL,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS
} from './Types';
import axios from 'axios'
import API from '../Services/api'

export const signupUser = (username, password, firstName, lastName, email) => {
  return (dispatch) => {
    console.log('sending sign up req...')
    API.createUser(username, password, firstName, lastName, email).then((res) => {
      if(res.status === 200 || res.status === 201){
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
    API.getUser(username).then((res) => {
      if(res.data){
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
  console.log('log in user fail')
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
    type: LOGOUT_USER_SUCCESS
  }
}
