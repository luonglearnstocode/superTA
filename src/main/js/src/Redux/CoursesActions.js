import API from '../Services/api'
import {
  GET_ALL_COURSES,
  SELECT_COURSE,
  GET_ALL_QUIZZES,
  SELECT_QUIZ,
  GET_ALL_QUESTIONS,
  SELECT_QUESTION,
  REQUEST_FAIL
} from './Types'

export const getAllCourses = (username) => {
  return (dispatch) => {
    API.getCourses(username).then((res) => {
      if (res.data) {
        dispatch({ type: GET_ALL_COURSES, payload: res.data })
        dispatch({ type: SELECT_COURSE, payload: res.data[0] })
      }
    }).catch((err) => dispatch(requestFailed()))
  }
}

export const selectCourse = (course) => {
  return {
    type: SELECT_COURSE,
    payload: course
  }
}

export const getAllQuizzes = (username, courseId) => {
  return (dispatch) => {
    API.getQuizzes(username, courseId).then((res) => {
      if (res.data) {
        dispatch({ type: GET_ALL_QUIZZES, payload: res.data })
        dispatch(selectQuiz(res.data[0]))
      }
    }).catch((err) => dispatch(requestFailed()))
  }
}

export const selectQuiz = (quiz, username, courseId ) => {
  return dispatch => {
    dispatch(getAllQuestions(username, courseId, quiz.id))
    dispatch({ type: SELECT_QUIZ, payload: quiz })
  }
}

const getAllQuestions = (username, courseId, quizId) => {
  return (dispatch) => {
    API.getAllQuestions(username, courseId, quizId).then((res) => {
      if (res.data) {
        dispatch({ type: GET_ALL_QUESTIONS, payload: res.data })
      }
    }).catch((err) => dispatch(requestFailed()))
  }
}

const requestFailed = () => {
  type: REQUEST_FAIL
}
