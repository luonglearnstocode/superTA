import React from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { Panel, Button, Row, Col } from 'react-bootstrap'
import styles from '../Styles/ExerciseStyles'
import Error from '../Common/Error'
import API from '../../Services/api'
import '../Styles/spinner.css'

const title = (number) => {
  return (
    <h3>Question {number}</h3>
  )
}

const InputComponent = ({ meta: { error }, input : { onChange }, answerId, results, ...props }) => {
  return (
    <div style={{ display: 'inline' }}>
      <input onChange={onChange} type="text" required {...props} />
      {results && <Error message={results[answerId]} />}
    </div>
  )
}

class ExerciseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      loadingQuestions: true,
      disabled: false,
      results: null
    }
    this.quizId = this.props.match.params.quizId
  }

  componentWillMount() {
    API.getOnlyQuestions(this.quizId).then((res) => {
      this.setState({ questions: res.data, loadingQuestions: false })
    }).catch((err) => console.log(err))
  }

  onSubmit(values) {
    const sortedKeys = Object.keys(values.answers).sort()
    const answersArray = []
    sortedKeys.forEach((key) => {
      answersArray.push(values.answers[key])
    })
    if (answersArray.length > 0) {
      API.answerQuestions(this.quizId, answersArray, values.studentId).then((res) => {
        if(res.data) {
          this.checkAnswers(res.data, sortedKeys)
        } else {
          console.log('No data!')
        }
      }).catch((err) => console.log(err))
    }
  }

  checkAnswers(checkedArray, keys) {
    const results = {}
    for(let i = 0;i < keys.length;i++) {
      if (checkedArray[i] === true) {
        results[keys[i]] = 'correct'
      } else {
        results[keys[i]] = 'incorrect'
      }
    }
    if (Object.keys(results).length > 0) {
      this.setState({ disabled: true, results: results })
    }
  }

  _getMarks() {
    if (this.state.results) {
      this.marksObtained = Object.values(this.state.results).filter((result) => result === 'correct').length
      return this.marksObtained
    } else {
      return '-'
    }
  }

  _getPercent() {
    if(this.marksObtained > -1) {
      return (this.marksObtained  * 100) / this.state.questions.length
    } else {
      return '-'
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
          <Row>
            <Col md={8} style={{ paddingLeft: 50 }}>
              <h2>Quiz</h2>
            </Col>
            <Col md={3} style={{ marginTop: 15 }}>
              <label style={styles.label} htmlFor="studentId">Enter Student ID:  </label>
              <Field style={styles.input,styles.smallInput} type="number" id="studentId" name="studentId" component="input" placeholder="Enter your Student ID" required />
              <p style={styles.result}>Marks Obtained: {this._getMarks()} / {this.state.questions.length} </p>
              <p style={styles.result}>Percentage: {this._getPercent()} %</p>
            </Col>
          </Row>
          {
            this.state.loadingQuestions ?
              <div className="loader">Loading ...</div>
            :
            <div style={this.props.style}>
              {
                  this.state.questions.map((question, index) => {
                  return (
                    <Panel
                      key={index}
                      style={styles.box}
                      header={title(index+1)}
                      bsStyle="warning">
                      <label style={styles.label}>{question}</label>
                      <div>
                        <Field
                          style={styles.input}
                          results={this.state.results}
                          name={'answers[a' + index + ']'}
                          answerId={'a' + index}
                          component={InputComponent}
                          placeholder="Answer"
                        />
                      </div>
                    </Panel>
                  )
                })
              }
            </div>
          }
          <Row style={{ width: '100%' }}>
            <Col md={2} mdOffset={5}>
                <Button style={styles.button} bsStyle="warning" type="submit" disabled={this.state.disabled}>Submit</Button>
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
