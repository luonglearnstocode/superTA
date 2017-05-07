import React, {Component} from 'react'
import { Modal, Button } from 'react-bootstrap'

class FormModal extends Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.children}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.reset}>Reset</Button>
            <Button onClick={this.props.handleSubmit}>Submit</Button>
            <Button onClick={this.props.close}>Close</Button>
          </Modal.Footer>
      </Modal>
    )
  }
}

export default FormModal
