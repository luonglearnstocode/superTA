import React from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { Panel, Button, Row, Col } from 'react-bootstrap'
import styles from '../Styles/ExerciseStyles'
// import CourseList from '../../Fixtures/Courses.json'
import TeX from 'react-formula-beautifier';
import Error from '../Common/Error'

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

const title = (number) => {
  return (
    <h3>Question {number}</h3>
  )
}

const InputComponent = ({ meta: { error }, input : { onChange }, index, style, updateFormula, placeholder, type }) => {
  return (
    <div style={{ display: 'inline' }}>
      <input style={style} onChange={(event) => { updateFormula(event,index), onChange(event)}} placeholder={placeholder} type={type} />
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
    const value = event.target.value.replace("/", ' \\over ').replace("*", " \\times ").replace('.', ' \\cdot ')
    var answers = this.state.answers.slice()
    answers[index] = value
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
          { this.state.quiz.questions.map((question, index) => {
            return (
              <Panel
                key={question.id}
                style={styles.box}
                header={title(index+1)}
                bsStyle="warning">
                <label style={styles.label}>{question.text}</label>
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
