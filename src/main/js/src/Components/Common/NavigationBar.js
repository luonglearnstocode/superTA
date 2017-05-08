import React from 'react'
import {Navbar, NavItem, Nav, Grid} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

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

const NavigationBar = () => {
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
      <Nav pullRight>
        <NavItem><NavLink style={styles.navLink} to="/signup"><i className="fa fa-user" style={styles.icon}></i> Sign Up</NavLink></NavItem>
        <NavItem><NavLink style={styles.navLink} to="/login"><i className="fa fa-sign-in" style={styles.icon}></i> Login</NavLink></NavItem>
      </Nav>
    </Navbar>
  )
}

export default NavigationBar
