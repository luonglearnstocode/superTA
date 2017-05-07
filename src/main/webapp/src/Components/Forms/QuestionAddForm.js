import React, {Component} from 'react'
import {FormGroup, ControlLabel } from 'react-bootstrap'
import FormModal from './FormModal'
import styles from '../Styles/FormModalStyles'

class QuestionAddForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this)
  }

  handleSubmit(event) {
    alert('A question was submitted: ' + this.question.value + ' and answer: ' + this.answer.value);
    this.props.close()
    event.preventDefault();
  }

  handleReset() {
    this.question.value = ''
    this.answer.value = ''
  }

  render() {
    return (
      <FormModal
        showModal={this.props.showModal}
        close={this.props.close}
        title="Add Question"
        handleSubmit={this.handleSubmit}
        reset={this.handleReset}
      >
      <form>
        <FormGroup controlId='question'>
          <ControlLabel>Question:</ControlLabel>
          <input style={styles.input} placeholder="Enter question" type="text" ref={(input) => this.question = input} />
        </FormGroup>
        <FormGroup controlId='answer'>
          <ControlLabel>Answer:</ControlLabel>
          <input style={styles.input} placeholder="Enter answer" type="text" ref={(input) => this.answer = input} />
        </FormGroup>
      </form>
      </FormModal>
    )
  }
}

export { QuestionAddForm }
