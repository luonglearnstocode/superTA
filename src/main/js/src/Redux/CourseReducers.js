import {
  GET_ALL_COURSES,
  SELECT_COURSE,
  GET_ALL_QUIZZES,
  SELECT_QUIZ,
  GET_ALL_QUESTIONS,
  SELECT_QUESTION,
  GET_GRADES,
  LOGOUT_USER_SUCCESS,
  REQUEST_FAIL,
  FETCH_COURSES,
  FETCH_QUIZZES,
  FETCH_QUESTIONS,
  FETCH_GRADES
} from './Types'

const INITIAL_STATE = {
  courses: null,
  quizzes: null,
  questions: null,
  selectedCourse: null,
  selectedQuiz: null,
  grades: null,
  error: null,
  loadingCourses: null,
  loadingQuizzes: null,
  loadingQuestions: null,
  loadingGrades: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_COURSES:
      return { ...state, loadingCourses: true }
    case GET_ALL_COURSES:
      return { ...state, courses: action.payload, loadingCourses: false}
    case SELECT_COURSE:
      return { ...state, selectedCourse: action.payload}
    case FETCH_QUIZZES:
      return { ...state, loadingQuizzes: true }
    case GET_ALL_QUIZZES:
      return { ...state, quizzes: action.payload, loadingQuizzes: false}
    case SELECT_QUIZ:
      return { ...state, selectedQuiz: action.payload}
    case FETCH_QUESTIONS:
      return { ...state, loadingQuestions: true }
    case GET_ALL_QUESTIONS:
      return { ...state, questions: action.payload, loadingQuestions: false}
    case FETCH_GRADES:
      return { ...state, loadingGrades: true }
    case GET_GRADES:
      return { ...state, grades: action.payload, loadingGrades: false}
    case REQUEST_FAIL:
      return { ...state, error: 'request failed' }
    case LOGOUT_USER_SUCCESS:
      return state
    default:
      return state
  }
}
