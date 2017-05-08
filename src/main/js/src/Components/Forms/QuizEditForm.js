import React, {Component} from 'react'
import {FormGroup, ControlLabel } from 'react-bootstrap'
import FormModal from './FormModal'
import styles from '../Styles/FormModalStyles'

class QuizEditForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this)
  }

  handleSubmit(event) {
    alert('A quiz was editted: ' + this.input.value);
    this.props.close()
    event.preventDefault();
  }

  handleReset() {
    this.input.value = ''
  }

  render() {
    return (
      <FormModal
        showModal={this.props.showModal}
        close={this.props.close}
        title="Edit selected quiz"
        handleSubmit={this.handleSubmit}
        reset={this.handleReset}
      >
      <form>
        <FormGroup controlId='quiz'>
          <ControlLabel>Quiz title:</ControlLabel>
          <input style={styles.input} placeholder="Enter quiz title" type="text" defaultValue={this.props.value} ref={(input) => this.input = input} />
        </FormGroup>
      </form>
      </FormModal>
    )
  }
}

export { QuizEditForm }
