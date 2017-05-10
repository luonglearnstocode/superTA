import {
  GET_ALL_COURSES,
  SELECT_COURSE,
  GET_ALL_QUIZZES,
  SELECT_QUIZ,
  GET_ALL_QUESTIONS,
  SELECT_QUESTION,
  GET_GRADES,
  LOGOUT_USER_SUCCESS,
  REQUEST_FAIL
} from './Types'

const INITIAL_STATE = {
  courses: null,
  quizzes: null,
  questions: null,
  selectedCourse: null,
  selectedQuiz: null,
  grades: null,
  error: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_ALL_COURSES:
      return { ...state, courses: action.payload}
    case SELECT_COURSE:
      return { ...state, selectedCourse: action.payload}
    case GET_ALL_QUIZZES:
      return { ...state, quizzes: action.payload}
    case SELECT_QUIZ:
      return { ...state, selectedQuiz: action.payload}
    case GET_ALL_QUESTIONS:
      return { ...state, questions: action.payload}
    case GET_GRADES:
      return { ...state, grades: actions.payload}
    case REQUEST_FAIL:
      return { ...state, error: 'request failed' }
    case LOGOUT_USER_SUCCESS:
      return state
    default:
      return state
  }
}
