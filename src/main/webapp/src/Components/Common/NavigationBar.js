import React from 'react'
import {Navbar, NavItem, Nav, Grid} from 'react-bootstrap'

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
        <NavItem href="/"><i className="fa fa-home" style={styles.icon}></i> Home</NavItem>
        <NavItem href="/workspace"><i className="fa fa-folder-open-o" style={styles.icon}></i> Workspace</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#"><i className="fa fa-user" style={styles.icon}></i> Sign Up</NavItem>
        <NavItem eventKey={2} href="#"><i className="fa fa-sign-in" style={styles.icon}></i> Login</NavItem>
      </Nav>
    </Navbar>
  )
}

export default NavigationBar
