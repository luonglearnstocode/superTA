import axios from 'axios'

// const baseURL = 'https://superta.herokuapp.com/api'
const baseURL = '/api'

//AUTH
const createUser = (username, password, firstName, lastName, email) => axios.post(baseURL + '/users', { username, password, firstName, lastName, email })

const getUser = (username) => axios.get(baseURL + '/users/' + username)

// COURSES
const getCourses = (username) => axios.get(baseURL + '/users/' + username + '/courses')

const createCourse = (username, id, name) => axios.post(baseURL + '/users/' + username + '/courses', { id, name })

const editCourse = (username, id, name) => axios.put(baseURL + '/users/' + username + '/courses/' + id, { id, name })

const deleteCourse = (username, id) => axios.delete(baseURL + '/users/' + username + '/courses/' + id)

// QUIZZES
const getQuizzes = (username, courseId) => axios.get(baseURL + '/users/' + username + '/courses/' + courseId + '/quizzes')

const createQuiz = (username, courseId, id, title) => axios.post(baseURL + '/users/' + username + '/courses/' + courseId + '/quizzes', { id, title })

const editQuiz = (username, courseId, id, title) => axios.put(baseURL + '/users/' + username + '/courses/' + courseId + '/quizzes/' + id, { id, title })

const deleteQuiz = (username, courseId, id) => axios.delete(baseURL + '/users/' + username + '/courses/' + courseId + '/quizzes/' + id)

// QUESTIONS
const getAllQuestions = (username, courseId, quizId) => axios.get(baseURL + '/users/' + username + '/courses/' + courseId + '/quizzes/' + quizId + '/questions')

const getQuestion = (username, courseId, quizId, id) => axios.get(baseURL + '/users/' + username + '/courses/' + courseId + '/quizzes/' + quizId + '/questions/' + id)

const createQuestion = (username, courseId, quizId, id, text, solution) => axios.post(baseURL + '/users/' + username + '/courses/' + courseId + '/quizzes/' + quizId + '/questions', { id, text, solution })

const editQuestion = (username, courseId, quizId, id, text, solution) => axios.put(baseURL + '/users/' + username + '/courses/' + courseId + '/quizzes/' + quizId + '/questions/' + id, { id, text, solution })

const deleteQuestion = (username, courseId, quizId, id ) => axios.delete(baseURL + '/users/' + username + '/courses/' + courseId + '/quizzes/' + quizId + '/questions/' + id)

export default {
  createUser,
  getUser,
  getCourses,
  createCourse,
  editCourse,
  deleteCourse,
  getQuizzes,
  createQuiz,
  editQuiz,
  deleteQuiz,
  getAllQuestions,
  getQuestion,
  createQuestion,
  editQuestion,
  deleteQuestion
}
