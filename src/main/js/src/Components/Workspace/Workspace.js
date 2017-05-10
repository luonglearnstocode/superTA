import React, {Component} from 'react'
import { Grid, Row, Col, ListGroup, ListGroupItem, Button, Tabs, Tab } from 'react-bootstrap'
import { Redirect } from 'react-router'
import styles from '../Styles/WorkspaceStyles'
import QuizTabs from './QuizTabs'
import NavigationBar from '../Common/NavigationBar'
import { connect } from 'react-redux'
import { getAllCourses, getAllQuizzes, getAllQuestions, selectCourse, selectQuiz, getGrades } from '../../Redux/CoursesActions'
import FormTemplate from '../Forms/FormTemplate'

class Workspace extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeModal: null
    }
    this.modal = { title: '', placeholder: '', value: ''}
  }

  componentWillMount() {
    this.props.getAllCourses(this.props.username)
    if(!this.props.username) { window.alert('You need to be logged in to do that!') }
  }

  _close() {
    this.setState({ activeModal: null })
  }

  _open(title, placeholder, value) {
    this.setState({ activeModal: true })
    this.modal = { title, placeholder, value }
  }

  _delete(item) {
    window.confirm('Are you sure you want to delete: ' + item.title)
  }

  _selectCourse(course) {
    this.props.selectCourse(this.props.username, course)
  }

  _selectQuiz(quiz) {
    this.props.selectQuiz(quiz, this.props.username, this.props.selectedCourse.id)
  }

  _getLink() {
    if(this.props.selectedQuiz) {
      return <p>Link: {'https://superta.herokuapp.com/quiz/' + this.props.selectedQuiz.id + '/answer'}</p>
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
                    <Button bsStyle="danger" onClick={() => this._delete(this.props.selectedCourse)}><i className="fa fa-trash-o"></i></Button>
                    <Button bsStyle="warning" onClick={() => this._open('Course Edit Form', 'Course Name', this.props.selectedCourse.name)}><i className="fa fa-pencil"></i></Button>
                    <Button bsStyle="success" onClick={() => this._open('Course Add Form', 'Course Name', '')}><i className="fa fa-plus" aria-hidden="true"></i></Button>
                  </div>
                  <ListGroup>
                    {this.props.courses.map((course) => <ListGroupItem style={styles.item} key={course.id} onClick={() => this._selectCourse(course)} active={this.props.selectedCourse === course}>{course.name}</ListGroupItem> )}
                  </ListGroup>
                </Col>
                <Col md={2} style={styles.bar}>
                  <h3 style={styles.heading} >Quizzes</h3>
                  <div style={styles.buttons}>
                    <Button bsStyle="danger" onClick={() => this._delete(this.props.selectedQuiz)}><i className="fa fa-trash-o"></i></Button>
                    <Button bsStyle="warning" onClick={() => this._open('Quiz Edit Form', 'Quiz Name', this.props.selectedQuiz.title)}><i className="fa fa-pencil"></i></Button>
                    <Button bsStyle="success" onClick={() => this._open('Quiz Add Form', 'Quiz Name', '')}><i className="fa fa-plus"></i></Button>
                  </div>
                  <ListGroup>
                    {
                      this.props.quizzes ?
                        this.props.quizzes.map((quiz) => <ListGroupItem style={styles.item} key={quiz.id} onClick={() => this._selectQuiz(quiz)} active={this.props.selectedQuiz === quiz}>{quiz.title}</ListGroupItem> )
                      :
                        <p> Select a Course </p>
                    }
                  </ListGroup>
                </Col>
                <Col md={8}>
                  {
                    this.props.questions ?
                      <QuizTabs getLink={this._getLink.bind(this)} questions={this.props.questions} />
                    :
                      <h5> Select Quiz </h5>
                  }
                </Col>
              </Row>
            </Grid>
            <FormTemplate
              close={this._close.bind(this)}
              showModal={this.state.activeModal}
              title={this.modal.title}
              placeholder={this.modal.placeholder}
              value={this.modal.value}
            />
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
    grades: data.grades
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
