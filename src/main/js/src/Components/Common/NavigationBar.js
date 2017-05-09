import React, {Component} from 'react'
import {Navbar, NavItem, Nav, Grid} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../../Redux/AuthActions'

const styles = {
  icon: {
    fontSize: 30,
    marginRight: 5
  },
  nav: {
    fontSize: 16
  },
  brand: {
    fontSize: 20
  },
  navLink: {
    color: '#777'
  }
}

class NavigationBar extends Component {

  handleLogout() {
    this.props.logoutUser()
    window.alert('Logged out!')
    console.log(this.props)
  }

  render() {
    return (
      <Navbar style={styles.nav}>
        <Navbar.Header>
          <Navbar.Brand>
            <a style={styles.brand} href="#">Super TA</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem><NavLink style={styles.navLink} to="/"><i className="fa fa-home" style={styles.icon}></i> Home</NavLink></NavItem>
          <NavItem><NavLink style={styles.navLink} to="/workspace"><i className="fa fa-folder-open-o" style={styles.icon}></i> Workspace</NavLink></NavItem>
        </Nav>

          { this.props.username === null ?
            <Nav pullRight>
              <NavItem><NavLink style={styles.navLink} to="/signup"><i className="fa fa-user" style={styles.icon}></i> Sign Up</NavLink></NavItem>
              <NavItem><NavLink style={styles.navLink} to="/login"><i className="fa fa-sign-in" style={styles.icon}></i> Login</NavLink></NavItem>
            </Nav>
            :
            <Nav pullRight>
              <NavItem onClick={this.handleLogout.bind(this)}><i className="fa fa-sign-out" style={styles.icon}></i> Log out</NavItem>
            </Nav>
          }

      </Navbar>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    username: auth.username
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
