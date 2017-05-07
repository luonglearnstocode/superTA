import React, {Component} from 'react'
import { Grid, Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import CourseList from '../Fixtures/Courses.json'
import styles from './Styles/WorkspaceStyles'
import ExerciseQuestions from './Exercises/ExerciseQuestions'
import { CourseAddForm, CourseEditForm, QuizAddForm, QuizEditForm }  from './Forms'

class Workspace extends Component {
  constructor(props) {
    super(props)
    this.state = {
      course: CourseList[0],
      quiz: CourseList[0].quizzes[0],
      activeModal: null
    }
  }

  close = () => this.setState({ activeModal: null })

  open(modal) {
    this.setState({ activeModal: modal })
  }

  delete(item) {
    window.confirm('Are you sure you want to delete: ' + item.title)
  }

  render() {
    return (
      <div>
        <Grid style={{ width: '100vw', margin: 0 }}>
          <Row className="show-grid">
            <Col md={2} style={styles.bar}>
              <h3 style={styles.heading} >Courses</h3>
              <div style={styles.buttons}>
                <Button bsStyle="danger" onClick={() => this.delete(this.state.course)}>Delete</Button>
                <Button bsStyle="warning" onClick={() => this.open('CourseEditForm')}>Edit</Button>
                <Button bsStyle="success" onClick={() => this.open('CourseAddForm')}> Add </Button>
              </div>
              <ListGroup>
                {CourseList.map((course) => <ListGroupItem style={styles.item} key={course.id} onClick={() => this.setState({ course })} active={this.state.course === course}>{course.title}</ListGroupItem> )}
              </ListGroup>
            </Col>
            <Col md={2} style={styles.bar}>
              <h3 style={styles.heading} >Quizzes</h3>
              <div style={styles.buttons}>
                <Button bsStyle="danger" onClick={() => this.delete(this.state.quiz)}>Delete</Button>
                <Button bsStyle="warning" onClick={() => this.open('QuizEditForm')}>Edit</Button>
                <Button bsStyle="success" onClick={() => this.open('QuizAddForm')}> Add </Button>
              </div>
              <ListGroup>
                {this.state.course.quizzes.map((quiz) => <ListGroupItem style={styles.item} key={quiz.id} onClick={() => this.setState({ quiz })} active={this.state.quiz === quiz}>{quiz.title}</ListGroupItem> )}
              </ListGroup>
            </Col>
            <Col md={8}>
              <ExerciseQuestions questions={this.state.quiz.exercises}/>
            </Col>
          </Row>
        </Grid>
        <CourseAddForm close={this.close} showModal={this.state.activeModal === 'CourseAddForm'} />
        <CourseEditForm close={this.close} showModal={this.state.activeModal === 'CourseEditForm'} value={this.state.course.title}/>
        <QuizAddForm close={this.close} showModal={this.state.activeModal === 'QuizAddForm'} />
        <QuizEditForm close={this.close} showModal={this.state.activeModal === 'QuizEditForm'} value={this.state.quiz.title}/>
      </div>
    )
  }
}

export default Workspace
