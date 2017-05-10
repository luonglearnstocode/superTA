import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import ExerciseQuestions from './ExerciseQuestions'
import GradesTab from './GradesTab'
import { connect } from 'react-redux'
import '../Styles/spinner.css'

class QuizTabs extends Component {
  render() {
    return (
      <Tabs defaultActiveKey={1} id="quiz-tabs">
        <Tab eventKey={1} title="Questions">
          <div>
            <br/>
            {
              this.props.loadingQuestions ?
                <div className="loader">Loading...</div>
              :
                <div>
                  {this.props.getLink()}
                  <ExerciseQuestions questions={this.props.questions}/>
                </div>
            }

          </div>
        </Tab>
        <Tab eventKey={2} title="Grades">
        {
          this.props.loadingGrades ?
            <div className="loader">Loading...</div>
          :
            <GradesTab grades={this.props.grades} />
        }
        </Tab>
      </Tabs>
    )
  }
}

const mapStateToProps = ({ data }) => {
  return {
    grades: data.grades,
    questions: data.questions,
    loadingGrades: data.loadingGrades,
    loadingQuestions: data.loadingQuestions
  }
}

export default connect(mapStateToProps)(QuizTabs)
