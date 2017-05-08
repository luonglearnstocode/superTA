import React, {Component} from 'react'
import {FormGroup, ControlLabel } from 'react-bootstrap'
import FormModal from './FormModal'
import styles from '../Styles/FormModalStyles'

class CourseEditForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this)
  }

  handleSubmit(event) {
    alert('A course was editted: ' + this.input.value);
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
        title="Edit selected course"
        handleSubmit={this.handleSubmit}
        reset={this.handleReset}
      >
      <form>
        <FormGroup controlId='course'>
          <ControlLabel>Course title:</ControlLabel>
          <input style={styles.input} placeholder="Enter course title" type="text" defaultValue={this.props.value} ref={(input) => this.input = input} />
        </FormGroup>
      </form>
      </FormModal>
    )
  }
}

export { CourseEditForm }
