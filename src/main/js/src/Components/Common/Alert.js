import React, {Component} from 'react'
import { Alert } from 'react-bootstrap'

class AlertDismissable extends Component {
  render() {
    return (
      <Alert style={this.props.style} bsStyle={this.props.bsStyle}>
        <h4>Alert!</h4>
        <p>{this.props.message}</p>
      </Alert>
    );
  }
}

export default AlertDismissable
