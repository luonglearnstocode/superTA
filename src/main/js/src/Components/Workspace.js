import React, {Component} from 'react'
import { Grid, Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
// import CourseList from '../Fixtures/Courses.json'
import styles from './Styles/WorkspaceStyles'
import ExerciseQuestions from './Exercises/ExerciseQuestions'
import NavigationBar from './Common/NavigationBar'
import { connect } from 'react-redux'
import { getAllCourses, getAllQuizzes, getAllQuestions, selectCourse, selectQuiz } from '../Redux/CoursesActions'
import FormTemplate from './Forms/FormTemplate'

const CourseList = [ {
  id: 'sdf',
  name: 'a name',
  quizzes: [{
    id: 'se',
    title: 'a quiz',
    questions: [{
      id: 'eds',
      text: 'a question',
      solution: 'a solution'
    }]
  }]
}]

class Workspace extends Component {
  constructor(props) {
    super(props)
    this.state = {
      course: CourseList[0],
      quiz: CourseList[0].quizzes[0],
      activeModal: null
    }
    this.modal = { title: '', placeholder: '', value: ''}
  }

  componentWillMount() {
    this.props.getAllCourses(this.props.username)
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

  render() {
    console.log(this.props)
    return (
      <div>
        <NavigationBar />
        <Grid style={{ width: '100vw', margin: 0 }}>
          <Row className="show-grid">
            <Col md={2} style={styles.bar}>
              <h3 style={styles.heading} >Courses</h3>
              <div style={styles.buttons}>
                <Button bsStyle="danger" onClick={() => this._delete(this.state.course)}>Delete</Button>
                <Button bsStyle="warning" onClick={() => this._open('Course Edit Form', 'Course Name', this.state.course.name)}>Edit</Button>
                <Button bsStyle="success" onClick={() => this._open('Course Add Form', 'Course Name', '')}> Add </Button>
              </div>
              <ListGroup>
                {CourseList.map((course) => <ListGroupItem style={styles.item} key={course.id} onClick={() => this.setState({ course })} active={this.state.course === course}>{course.name}</ListGroupItem> )}
              </ListGroup>
            </Col>
            <Col md={2} style={styles.bar}>
              <h3 style={styles.heading} >Quizzes</h3>
              <div style={styles.buttons}>
                <Button bsStyle="danger" onClick={() => this._delete(this.state.quiz)}>Delete</Button>
                <Button bsStyle="warning" onClick={() => this._open('Quiz Edit Form', 'Quiz Name', this.state.quiz.title)}>Edit</Button>
                <Button bsStyle="success" onClick={() => this._open('Quiz Add Form', 'Quiz Name', '')}> Add </Button>
              </div>
              <ListGroup>
                {this.state.course.quizzes.map((quiz) => <ListGroupItem style={styles.item} key={quiz.id} onClick={() => this.setState({ quiz })} active={this.state.quiz === quiz}>{quiz.title}</ListGroupItem> )}
              </ListGroup>
            </Col>
            <Col md={8}>
              <ExerciseQuestions questions={this.state.quiz.questions}/>
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
    selectedQuiz: data.selectedQuiz
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllCourses: (username) => dispatch(getAllCourses(username)),
    getAllQuizzes: (username, courseId) => dispatch(getAllQuizzes(username, courseId)),
    getAllQuestions: (username, courseId, quizId) => dispatch(getAllQuestions(username, courseId, quizId)),
    selectCourse: (course) => dispatch(selectCourse(course)),
    selectQuiz: (quiz) => dispatch(selectQuiz(quiz))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Workspace)
