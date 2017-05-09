import React, {Component} from 'react'
import {FormGroup, ControlLabel } from 'react-bootstrap'
import FormModal from './FormModal'
import styles from '../Styles/FormModalStyles'

class FormTemplate extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this)
  }

  handleSubmit(event) {
    alert('submitted: ' + this.input.value);
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
        title={this.props.title}
        handleSubmit={this.handleSubmit}
        reset={this.handleReset}
      >
      <form>
        <FormGroup controlId='course'>
          <ControlLabel>Title:</ControlLabel>
          <input style={styles.input} placeholder={this.props.placeholder} defaultValue={this.props.value} type="text" ref={(input) => this.input = input} />
        </FormGroup>
      </form>
      </FormModal>
    )
  }
}

export default FormTemplate