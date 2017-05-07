import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Workspace from './Workspace'
import ExerciseForm from './Exercises/ExerciseForm'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/workspace" component={Workspace}/>
          <Route path="/exercise" component={ExerciseForm}/>
        </div>
      </Router>
    );
  }
}

export default App
