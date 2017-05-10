import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import AuthReducer from './src/Redux/AuthReducers'
import CourseReducers from './src/Redux/CourseReducers'
import thunk from 'redux-thunk'
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './src/Components/Home'
import Workspace from './src/Components/Workspace/Workspace'
import ExerciseForm from './src/Components/Student/ExerciseForm'
import LoginForm from './src/Components/Auth/LoginForm'
import SignupForm from './src/Components/Auth/SignupForm'

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  auth: AuthReducer,
  data: CourseReducers
})

const store = createStore(
  reducer,{},
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/workspace" component={Workspace} />
        <Route exact path="/quiz/:quizId/answer" component={ExerciseForm} />
        <Route exact path="/login" component={LoginForm}/>
        <Route exact path="/signup" component={SignupForm} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('react')
);
