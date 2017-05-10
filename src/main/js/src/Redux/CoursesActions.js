import API from '../Services/api'
import {
  FETCH_COURSES,
  FETCH_QUIZZES,
  FETCH_QUESTIONS,
  FETCH_GRADES,
  GET_ALL_COURSES,
  SELECT_COURSE,
  GET_ALL_QUIZZES,
  SELECT_QUIZ,
  GET_ALL_QUESTIONS,
  SELECT_QUESTION,
  GET_GRADES,
  REQUEST_FAIL
} from './Types'

export const getAllCourses = (username) => {
  return (dispatch) => {
    dispatch({ type: FETCH_COURSES })
    API.getCourses(username).then((res) => {
      if (res.data) {
        dispatch({ type: GET_ALL_COURSES, payload: res.data })
        dispatch(selectCourse(username, res.data[0]))
      }
    }).catch((err) => dispatch(requestFailed()))
  }
}

export const selectCourse = (username, course) => {
  return dispatch => {
    if (course) {
      dispatch({ type: SELECT_COURSE, payload: course})
      dispatch(getAllQuizzes(username, course.id))
    }
  }
}

export const getAllQuizzes = (username, courseId) => {
  return (dispatch) => {
    dispatch({ type: FETCH_QUIZZES })
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
    if(quiz) {
      dispatch(getAllQuestions(username, courseId, quiz.id))
      dispatch({ type: SELECT_QUIZ, payload: quiz })
    }
  }
}

const getAllQuestions = (username, courseId, quizId) => {
  return (dispatch) => {
    dispatch({ type: FETCH_QUESTIONS })
    API.getAllQuestions(username, courseId, quizId).then((res) => {
      if (res.data) {
        dispatch({ type: GET_ALL_QUESTIONS, payload: res.data })
        dispatch(getGrades(username, courseId, quizId))
      }
    }).catch((err) => dispatch(requestFailed()))
  }
}

export const getGrades = (username, courseId, quizId) => {
  return (dispatch) => {
    dispatch({ type: FETCH_GRADES })
    API.getGrades(username, courseId, quizId).then((res) => {
      if(res.data && res.data.length > 0) {
        dispatch({ type: GET_GRADES, payload: res.data })
      } else {
        dispatch({ type: GET_GRADES, payload: null })
      }
    }).catch((err) => dispatch(requestFailed()))
  }
}

const requestFailed = () => ({
  type: REQUEST_FAIL
})
