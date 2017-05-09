import React, { Component } from 'react'
import NavigationBar from '../Common/NavigationBar'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { signupUser } from '../../Redux/AuthActions'
import { Button, Jumbotron } from 'react-bootstrap'
import styles from '../Styles/AuthStyles'
import Alert from '../Common/Alert'

class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  handleSubmit(event) {
    this.props.signupUser(this.state.username, this.state.password, this.state.firstName, this.state.lastName, this.state.email)
    event.preventDefault();
  }

  render() {
    if(this.props.username) {
      window.alert('Signed up!')
      return <Redirect to="/workspace" />
    }
    return (
      <div>
      <NavigationBar />
      { this.props.error && <Alert style={{ width: '60%', margin: 50 }} bsStyle="danger" message={this.props.error} /> }
      <Jumbotron style={styles.jumbotron}>
        <h3 style={styles.h3}> Sign up </h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input style={styles.input} type="text" name="firstname" placeholder="First name" value={this.state.firstName} onChange={(event) => this.setState({ firstName: event.target.value})} />
          <input style={styles.input} type="text" name="lastname" placeholder="Last name" value={this.state.lastName} onChange={(event) => this.setState({ lastName: event.target.value})} />
          <input style={styles.input} type="email" name="email" placeholder="email" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value})} />
          <input style={styles.input} type="text" name="username" placeholder="Username" value={this.state.username} onChange={(event) => this.setState({ username: event.target.value})} />
          <input style={styles.input} type="password" name="password" placeholder="Password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value})} />
          <Button bsStyle="primary" type="submit">Sign up</Button>
        </form>
      </Jumbotron>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    username: auth.username,
    error: auth.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signupUser: (username, password, firstName, lastName, email) => dispatch(signupUser(username, password, firstName, lastName, email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
