import React, {Component} from 'react'
import { Grid, Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
// import CourseList from '../Fixtures/Courses.json'
import styles from './Styles/WorkspaceStyles'
import ExerciseQuestions from './Exercises/ExerciseQuestions'
import { CourseAddForm, CourseEditForm, QuizAddForm, QuizEditForm }  from './Forms'
import NavigationBar from './Common/NavigationBar'

const CourseList = [
  {
    "id": "c1",
    "title": "Software Structures and Models",
    "quizzes": [
      {
        "id": "c1a1",
        "title": "Modelling",
        "questions": [
          {
            "id": "c1e1",
            "text": "Modelling first question",
            "solution": "Modelling first solution"
          },
          {
            "id": "c2e2",
            "text": "Modelling second question",
            "solution": "Modelling second solution"
          },
          {
            "id": "c3e3",
            "text": "Modelling third question",
            "solution": "Modelling third solution"
          }
        ]
      },
      {
        "id": "c1a2",
        "title": "Algorithms",
        "questions": [
          {
            "id": "c1e3",
            "text": "Algorithms question 1",
            "solution": "Algorithms solution 1"
          },
          {
            "id": "c1e4",
            "text": "Algorithms question 2",
            "solution": "Algorithms solution 2"
          }
        ]
      }
    ]
  },
  {
    "id": "c2",
    "title": "Finnish For Foreigners 3",
    "quizzes": [
      {
        "id": "c2a1",
        "title": "Finnish",
        "questions": [
          {
            "id": "c1e3",
            "text": "Finnish question 1",
            "solution": "Finnish solution 1"
          },
          {
            "id": "c1e4",
            "text": "Finnish question 2",
            "solution": "Finnish solution 2"
          }
        ]
      }
    ]
  },
  {
    "id": "c3",
    "title": "Application Development Methods",
    "quizzes": [
      {
        "id": "c3a1",
        "title": "Mathematics",
        "questions": [
          {
            "id": "c1e3",
            "text": "ADM question 1",
            "solution": "ADM solution 1"
          },
          {
            "id": "c1e4",
            "text": "ADM question 2",
            "solution": "ADM solution 2"
          }
        ]
      },
      {
        "id": "c3a2",
        "title": "Java Programming",
        "questions": [
          {
          "id": "c1e3",
          "text": "Java programming question 1",
          "solution": "Java programming solution 1"
        },
        {
          "id": "c1e4",
          "text": "Java programming question 2",
          "solution": "Java programming solution 2"
        }
      ]
      }
    ]
  },
  {
    "id": "c4",
    "title": "Web Programming",
    "quizzes": [
      {
        "id": "c3a1",
        "title": "Databases",
        "questions": [
          {
            "id": "c1e3",
            "text": "Databases question 1",
            "solution": "Algorithms solution 1"
          },
          {
            "id": "c1e4",
            "text": "Databases question 2",
            "solution": "Algorithms solution 2"
          }
        ]
      },
      {
        "id": "c3a2",
        "title": "English",
        "questions": [
          {
          "id": "c1e3",
          "text": "English question 1",
          "solution": "Algorithms solution 1"
        },
        {
          "id": "c1e4",
          "text": "English question 2",
          "solution": "Algorithms solution 2"
        }
      ]
      }
    ]
  }
]

class Workspace extends Component {
  constructor(props) {
    super(props)
    this.state = {
      course: CourseList[0],
      quiz: CourseList[0].quizzes[0],
      activeModal: null
    }
  }

  _close() {
    this.setState({ activeModal: null })
  }

  _open(modal) {
    this.setState({ activeModal: modal })
  }

  _delete(item) {
    window.confirm('Are you sure you want to delete: ' + item.title)
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <Grid style={{ width: '100vw', margin: 0 }}>
          <Row className="show-grid">
            <Col md={2} style={styles.bar}>
              <h3 style={styles.heading} >Courses</h3>
              <div style={styles.buttons}>
                <Button bsStyle="danger" onClick={() => this._delete(this.state.course)}>Delete</Button>
                <Button bsStyle="warning" onClick={() => this._open('CourseEditForm')}>Edit</Button>
                <Button bsStyle="success" onClick={() => this._open('CourseAddForm')}> Add </Button>
              </div>
              <ListGroup>
                {CourseList.map((course) => <ListGroupItem style={styles.item} key={course.id} onClick={() => this.setState({ course })} active={this.state.course === course}>{course.title}</ListGroupItem> )}
              </ListGroup>
            </Col>
            <Col md={2} style={styles.bar}>
              <h3 style={styles.heading} >Quizzes</h3>
              <div style={styles.buttons}>
                <Button bsStyle="danger" onClick={() => this._delete(this.state.quiz)}>Delete</Button>
                <Button bsStyle="warning" onClick={() => this._open('QuizEditForm')}>Edit</Button>
                <Button bsStyle="success" onClick={() => this._open('QuizAddForm')}> Add </Button>
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
        <CourseAddForm close={this._close.bind(this)} showModal={this.state.activeModal === 'CourseAddForm'} />
        <CourseEditForm close={this._close.bind(this)} showModal={this.state.activeModal === 'CourseEditForm'} value={this.state.course.title}/>
        <QuizAddForm close={this._close.bind(this)} showModal={this.state.activeModal === 'QuizAddForm'} />
        <QuizEditForm close={this._close.bind(this)} showModal={this.state.activeModal === 'QuizEditForm'} value={this.state.quiz.title}/>
      </div>
    )
  }
}

export default Workspace
