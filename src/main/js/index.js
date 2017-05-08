import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './src/Components/Home'
import Workspace from './src/Components/Workspace'
import ExerciseForm from './src/Components/Exercises/ExerciseForm'
import LoginForm from './src/Components/Auth/LoginForm'
import SignupForm from './src/Components/Auth/SignupForm'

const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
})
const store =
  (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/workspace" component={Workspace} />
        <Route exact path="/exercise" component={ExerciseForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('react')
);
