import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import AuthReducer from './src/Redux/AuthReducers'
import CourseReducers from './src/Redux/CourseReducers'
import thunk from 'redux-thunk'
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './src/Components/Home'
import Workspace from './src/Components/Workspace'
import ExerciseForm from './src/Components/Exercises/ExerciseForm'
import LoginForm from './src/Components/Auth/LoginForm'
import SignupForm from './src/Components/Auth/SignupForm'

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  auth: AuthReducer,
  data: CourseReducers
})
const store =
  (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer, {}, applyMiddleware(thunk))

// const requireAuth = (nextState, replace) => {
//   if () {
//     replace({
//       pathname: '/login',
//       state: { nextPathname: nextState.location.pathname }
//     })
//   }
// }

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
