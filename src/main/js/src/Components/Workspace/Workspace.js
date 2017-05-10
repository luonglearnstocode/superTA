import React, {Component} from 'react'
import { Grid, Row, Col, ListGroup, ListGroupItem, Button, Tabs, Tab } from 'react-bootstrap'
import { Redirect } from 'react-router'
import styles from '../Styles/WorkspaceStyles'
import '../Styles/spinner.css'
import QuizTabs from './QuizTabs'
import NavigationBar from '../Common/NavigationBar'
import { connect } from 'react-redux'
import { getAllCourses, getAllQuizzes, getAllQuestions, selectCourse, selectQuiz, getGrades } from '../../Redux/CoursesActions'

class Workspace extends Component {
  componentWillMount() {
    this.props.getAllCourses(this.props.username)
    if(!this.props.username) { window.alert('You need to be logged in to do that!') }
  }

  _selectCourse(course) {
    this.props.selectCourse(this.props.username, course)
  }

  _selectQuiz(quiz) {
    this.props.selectQuiz(quiz, this.props.username, this.props.selectedCourse.id)
  }

  _getLink() {
    if(this.props.selectedQuiz) {
      const link = 'https://superta.herokuapp.com/#/quiz/' + this.props.selectedQuiz.id + '/answer'
      return <a href={link}>Link: {link}</a>
    }
  }

  _showGrades() {
    this.props.getGrades(this.props.username, this.props.selectedCourse.id, this.props.selectedQuiz.id)
  }

  render() {
    return (
      <div>
        { this.props.username ?
          <div>
            <NavigationBar />
            <Grid style={{ width: '100vw', margin: 0 }}>
              <Row className="show-grid">
                <Col md={2} style={styles.bar}>
                  <h3 style={styles.heading} >Courses</h3>
                  <div style={styles.buttons}>
                  </div>
                  <ListGroup>
                    {
                      this.props.loadingCourses ?
                        <div className="loader">Loading...</div>
                      : this.props.courses ?
                          this.props.courses.map((course) => <ListGroupItem style={styles.item} key={course.id} onClick={() => this._selectCourse(course)} active={this.props.selectedCourse === course}>{course.name}</ListGroupItem> )
                        :
                          <p> None </p>
                    }
                  </ListGroup>
                </Col>
                <Col md={2} style={styles.bar}>
                  <h3 style={styles.heading} >Quizzes</h3>
                  <div style={styles.buttons}>
                  </div>
                  <ListGroup>
                    {
                      this.props.loadingQuizzes ?
                        <div className="loader">Loading...</div>
                      : this.props.quizzes ?
                          this.props.quizzes.map((quiz) => <ListGroupItem style={styles.item} key={quiz.id} onClick={() => this._selectQuiz(quiz)} active={this.props.selectedQuiz === quiz}>{quiz.title}</ListGroupItem> )
                        :
                          <p> Select a Course </p>
                    }
                  </ListGroup>
                </Col>
                <Col md={8}>
                  <QuizTabs getLink={this._getLink.bind(this)} />
                </Col>
              </Row>
            </Grid>
          </div>
          :
            <Redirect to="/login" />
        }
      </div>
    )
  }
}

const mapStateToProps = ({ data, auth }) => {
  return {
    username: auth.username,
    courses: data.courses,
    quizzes: data.quizzes,
    questions: data.questions,
    selectedCourse: data.selectedCourse,
    selectedQuiz: data.selectedQuiz,
    grades: data.grades,
    loadingCourses: data.loadingCourses,
    loadingQuizzes: data.loadingQuizzes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllCourses: (username) => dispatch(getAllCourses(username)),
    getAllQuizzes: (username, courseId) => dispatch(getAllQuizzes(username, courseId)),
    selectCourse: (course) => dispatch(selectCourse(course)),
    selectQuiz: (quiz, username, courseId) => dispatch(selectQuiz(quiz, username, courseId)),
    getGrades: (username, courseId, quizId) => dispatch(getGrades(username, courseId, quizId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Workspace)
