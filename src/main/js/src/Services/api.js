import axios from 'axios'

// const baseURL = 'https://superta.herokuapp.com/api'
const baseURL = '/api'

//AUTH
const createUser = (username, password, firstName, lastName, email) => axios.post(baseURL + '/users', { username, password, firstName, lastName, email })

const getUser = (username) => axios.get(baseURL + '/users/' + username)

// COURSES
const getCourses = (username) => axios.get(baseURL + '/users/' + username + '/courses')

// QUIZZES
const getQuizzes = (username, courseId) => axios.get(baseURL + '/users/' + username + '/courses/' + courseId + '/quizzes')

const createQuiz = (username, courseId, id, title) => axios.post(baseURL + '/users/' + username + '/courses/' + courseId + '/quizzes', { id, title })

// QUESTIONS
const getAllQuestions = (username, courseId, quizId) => axios.get(baseURL + '/users/' + username + '/courses/' + courseId + '/quizzes/' + quizId + '/questions')

const getQuestion = (username, courseId, quizId, id) => axios.get(baseURL + '/users/' + username + '/courses/' + courseId + '/quizzes/' + quizId + '/questions/' + id)

const createQuestion = (username, courseId, quizId, id, text, solution) => axios.post(baseURL + '/users/' + username + '/courses/' + courseId + '/quizzes/' + quizId + '/questions', { id, text, solution })

// ANSWERS
const getOnlyQuestions = (quizId) => axios.get(baseURL + '/public/' + quizId + '/answer')

const answerQuestions = (quizId, answersArray, studentId) => axios.post(baseURL + '/public/' + quizId + '/answer?student=' + studentId, answersArray)

// GRADES
const getGrades = (username, courseId, quizId) => axios.get(baseURL + '/users/' + username + '/courses/' + courseId + '/quizzes/' + quizId + '/grades')

export default {
  createUser,
  getUser,
  getCourses,
  getQuizzes,
  createQuiz,
  getAllQuestions,
  getQuestion,
  createQuestion,
  getOnlyQuestions,
  answerQuestions,
  getGrades
}
