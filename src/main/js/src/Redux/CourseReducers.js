import {
  GET_ALL_COURSES,
  SELECT_COURSE,
  GET_ALL_QUIZZES,
  SELECT_QUIZ,
  GET_ALL_QUESTIONS,
  SELECT_QUESTION
} from './Types'

const INITIAL_STATE = {
  courses: [{ id: null, name: null }],
  quizzes: [{ id: null, title: null }],
  questions: [{ id: null, text: null, solution: null }],
  selectedCourse: null,
  selectedQuiz: null
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
    default:
      return state
  }
}
