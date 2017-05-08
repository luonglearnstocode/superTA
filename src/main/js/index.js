import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/Components/App';
import { HashRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer as reduxFormReducer } from 'redux-form'
import AuthReducer from './src/Redux/reducers'

import Home from './src/Components/Home'
import Workspace from './src/Components/Workspace'
import ExerciseForm from './src/Components/Exercises/ExerciseForm'
import LoginForm from './src/Components/Auth/LoginForm'
import SignupForm from './src/Components/Auth/SignupForm'

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  auth: AuthReducer
})

const store =
  (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer, {},  applyMiddleware(thunk))

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
