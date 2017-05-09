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
      console.log(res)
      dispatch({ type: GET_ALL_COURSES, payload: res })
      // dispatch(selectCourse(res[0]))
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
      dispatch({ type: GET_ALL_QUIZZES, payload: res })
      // dispatch(selectQuiz(res[0]))
    }).catch((err) => dispatch(requestFailed()))
  }
}

export const selectQuiz = (quiz) => {
  return {
    type: SELECT_QUIZ,
    payload: quiz
  }
}

export const getAllQuestions = (username, courseId, quizId) => {
  return (dispatch) => {
    API.getAllQuestions(username, courseId, quizId).then((res) => {
      dispatch({ type: GET_ALL_QUESTIONS, payload: res })
    }).catch((err) => dispatch(requestFailed()))
  }
}

const requestFailed = () => {
  type: REQUEST_FAIL
}
