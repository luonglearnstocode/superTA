import React, {Component} from 'react'
import { Panel, Button } from 'react-bootstrap'
import styles from '../Styles/ExerciseStyles'

class ExerciseQuestions extends Component {
  render() {
    return (
      <div>
        { this.props.questions.map((question, index) => {
          return (
            <Panel
              key={question.id}
              style={styles.box}
              header={() => <h4>Question {index + 1}</h4>}
              bsStyle="warning">
              <label style={styles.label}>{question.text}</label>
              <div>
                {question.solution}
              </div>
            </Panel>
          )
        })}
      </div>
    )
  }
}

export default ExerciseQuestions
