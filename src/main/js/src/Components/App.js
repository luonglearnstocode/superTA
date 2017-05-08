import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Workspace from './Workspace'
import ExerciseForm from './Exercises/ExerciseForm'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/workspace" component={Workspace} />
        <Route exact path="/exercise" component={ExerciseForm} />
      </div>
    </Router>
  )
}

export default App
