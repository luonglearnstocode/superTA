import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import ExerciseQuestions from './ExerciseQuestions'
import GradesTab from './GradesTab'

class QuizTabs extends Component {
  render() {
    return (
      <Tabs defaultActiveKey={1} id="quiz-tabs">
        <Tab eventKey={1} title="Questions">
          <div>
            <br/>
            {this.props.getLink()}
            <ExerciseQuestions questions={this.props.questions}/>
          </div>
        </Tab>
        <Tab eventKey={2} title="Grades">
          <GradesTab grades={this.props.grades} />
        </Tab>
      </Tabs>
    )
  }
}

export default QuizTabs
