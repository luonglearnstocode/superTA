import React, {Component} from 'react'
import {FormGroup, ControlLabel } from 'react-bootstrap'
import FormModal from './FormModal'
import styles from '../Styles/FormModalStyles'

class QuestionEditForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this)
  }

  handleSubmit(event) {
    alert('A quiz was editted: ' + this.text.value + 'and solution ' + this.solution.value);
    this.props.close()
    event.preventDefault();
  }

  handleReset() {
    this.text.value = ''
    this.solution.value = ''
  }

  render() {
    return (
      <FormModal
        showModal={this.props.showModal}
        close={this.props.close}
        title="Edit selected question"
        handleSubmit={this.handleSubmit}
        reset={this.handleReset}
      >
      <form>
        <FormGroup controlId='question'>
          <ControlLabel>Question:</ControlLabel>
          <input style={styles.input} placeholder="Enter question" type="text" defaultValue={this.props.value.text} ref={(input) => this.text = input} />
        </FormGroup>
        <FormGroup controlId='answer'>
          <ControlLabel>Answer:</ControlLabel>
          <input style={styles.input} placeholder="Enter solution" type="text" defaultValue={this.props.value.solution} ref={(input) => this.solution = input} />
        </FormGroup>
      </form>
      </FormModal>
    )
  }
}

export { QuestionEditForm }