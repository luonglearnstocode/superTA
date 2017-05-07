import React, {Component} from 'react'
import {FormGroup, ControlLabel } from 'react-bootstrap'
import FormModal from './FormModal'
import styles from '../Styles/FormModalStyles'

class CourseAddForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this)
  }

  handleSubmit(event) {
    alert('A course was submitted: ' + this.input.value);
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
        title="Add Course"
        handleSubmit={this.handleSubmit}
        reset={this.handleReset}
      >
      <form>
        <FormGroup controlId='course'>
          <ControlLabel>Course title:</ControlLabel>
          <input style={styles.input} placeholder="Enter course title" type="text" ref={(input) => this.input = input} />
        </FormGroup>
      </form>
      </FormModal>
    )
  }
}

export { CourseAddForm }
