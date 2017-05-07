import React, {Component} from 'react'
import { Panel, Button } from 'react-bootstrap'
import styles from '../Styles/ExerciseStyles'
import { QuestionAddForm, QuestionEditForm } from '../Forms'

const header = (question, number, onClick) => {
  return (
    <div>
      <h4 style={{ display: 'inline'}} >Question {number}</h4>
      <Button bsStyle="warning" style={{ display: 'inline-block', float: 'right' }} onClick={onClick}>
        Edit
      </Button>
    </div>
  )
}

class ExerciseQuestions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeModal: null,
      question: { question: null, answer: null}
    }
  }

  close = () => this.setState({ activeModal: null })

  open(modal,item) {
    this.setState({ activeModal: modal, question: item })
  }

  render() {
    return (
      <div>
        <Button bsStyle="success" style={styles.addButton} onClick={() => this.open('QuestionAddForm')} >Add Question</Button>
        { this.props.questions.map((question, index) => {
          return (
            <Panel
              key={question.id}
              style={styles.box}
              header={header(question, index+1, () => this.open('QuestionEditForm', question))}
              bsStyle="warning">
              <label style={styles.label}>{question.question}</label>
              <div>
                {question.answer}
              </div>
            </Panel>
          )
        })}
        <QuestionAddForm close={this.close} showModal={this.state.activeModal === 'QuestionAddForm'} />
        <QuestionEditForm close={this.close} showModal={this.state.activeModal === 'QuestionEditForm'} value={this.state.question} />
      </div>
    )
  }
}

export default ExerciseQuestions