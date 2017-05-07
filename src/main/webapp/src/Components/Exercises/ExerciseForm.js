import React from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { Panel, Button, Row, Col } from 'react-bootstrap'
import styles from '../Styles/ExerciseStyles'
import CourseList from '../../Fixtures/Courses.json'
import TeX from 'react-formula-beautifier';
import Error from '../Common/Error'

const title = (number) => {
  return (
    <h3>Question {number}</h3>
  )
}

const InputComponent = ({ meta: { error }, input : { onChange }, index, style, updateFormula, ...props }) => {
  return (
    <div style={{ display: 'inline' }}>
      <input style={style} onChange={(event) => { updateFormula(event,index), onChange(event)}} {...props} />
      {error && <Error message={error} />}
    </div>
  )
}

class ExerciseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: [],
      quiz: CourseList[0].quizzes[0],
      marksObtained: '-',
      marksMax: '-',
      marksPercent: '-'
    }
  }

  onSubmit(values) {
    window.alert(JSON.stringify(values))
    //dummy
    const checkedObj = {
      c1e1: true,
      c2e2: false,
      c3e3: true
    }
    const keys = Object.keys(checkedObj)
    const errors = {}
    let grade = 0
    const max = keys.length
    keys.forEach((questionID) => {
      if (checkedObj[questionID]) {
        grade++
        errors[questionID] = 'correct'
      } else {
        errors[questionID] = 'incorrect'
      }
    })
    if (Object.keys(errors).length > 0) {
      errors._error = {grade, max}
      throw new SubmissionError(errors)
    }
  }

  updateCurrentFormula(event, index) {
    var answers = this.state.answers.slice()
    answers[index] = event.target.value
    this.setState({ answers })
  }

  getGrades() {
    if(this.props.error) {
      const marksObtained = this.props.error.grade
      const marksMax = this.props.error.max
      const marksPercent = (marksObtained * 100/ marksMax).toFixed(2)
      this.setState({ marksObtained, marksMax, marksPercent })
    }
  }

  render() {
    this.getGrades()
    return (
      <div>
        <Row>
          <Col md={8} style={{ paddingLeft: 50 }}>
            <h2>{this.state.quiz.title} Quiz</h2>
          </Col>
          <Col md={3}>
            <p style={styles.result}>Marks Obtained: {this.state.marksObtained} / {this.state.marksMax}</p>
            <p style={styles.result}>Percentage: {this.state.marksPercent} %</p>
          </Col>
        </Row>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} style={this.props.style}>
          { this.state.quiz.exercises.map((question, index) => {
            return (
              <Panel
                key={question.id}
                style={styles.box}
                header={title(index+1)}
                bsStyle="warning">
                <label style={styles.label}>{question.question}</label>
                <div>
                  <Field
                    style={styles.input}
                    updateFormula={this.updateCurrentFormula.bind(this)}
                    index={index}
                    name={question.id}
                    component={InputComponent}
                    type="text"
                    placeholder="Answer"
                  />
                  <TeX style={styles.tex} value={this.state.answers[index] || "your-expression"} />
                </div>
              </Panel>
            )
          })}
          <Row style={{ width: '100%' }}>
            <Col md={2} mdOffset={5}>
              <Button style={styles.button} bsStyle="warning" type="submit">Submit</Button>
            </Col>
          </Row>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'exerciseForm'  // a unique identifier for this form
})(ExerciseForm)
