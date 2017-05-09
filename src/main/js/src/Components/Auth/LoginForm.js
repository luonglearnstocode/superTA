import React, { Component } from 'react'
import NavigationBar from '../Common/NavigationBar'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { loginUser } from '../../Redux/AuthActions'
import { Button, Jumbotron } from 'react-bootstrap'
import Alert from '../Common/Alert'
import styles from '../Styles/AuthStyles'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit(event) {
    this.props.loginUser(this.state.username)
    event.preventDefault();
  }

  render() {
    console.log(this.props)

    if(this.props.username) {
      window.alert('Logged in!')
      return <Redirect to="/workspace" />
    }

    return (
      <div>
      <NavigationBar />
      { this.props.error && <Alert style={{ width: '60%', margin: 50 }} bsStyle="danger" message={this.props.error} /> }
      <Jumbotron style={styles.jumbotron}>
        <h3 style={styles.h3}> Log in </h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input style={styles.input} type="text" name="username" placeholder="Username" value={this.state.username} onChange={(event) => this.setState({ username: event.target.value})} />
          <input style={styles.input} type="password" name="password" placeholder="Password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value})} />
          <Button bsStyle="primary" type="submit">Log in</Button>
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
    loginUser: (username) => dispatch(loginUser(username))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
