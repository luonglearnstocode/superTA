import React, {Component} from 'react'
import { Panel, Button } from 'react-bootstrap'
import styles from '../Styles/ExerciseStyles'

const header = (question, number) => {
   return (
     <div>
       <h4 style={{ display: 'inline'}} >Question {number}</h4>
       <Button bsStyle="danger" style={styles.actionButton} onClick={() => window.alert('Do you want to delete '+ question.text)}><i className="fa fa-trash-o"></i></Button>
       <Button bsStyle="warning" style={styles.actionButton}><i className="fa fa-pencil"></i></Button>
     </div>
   )
 }

class ExerciseQuestions extends Component {
  render() {
    return (
      <div>
        <Button bsStyle="success" style={styles.addButton}>Add Question</Button>
        { this.props.questions ?
          this.props.questions.map((question, index) => {
            return (
              <Panel
                key={question.id}
                style={styles.box}
                header={header(question, index+1)}
                bsStyle="warning">
                <label style={styles.label}>{question.text}</label>
                <div>
                  {question.solution}
                </div>
              </Panel>
            )
          })
          :
            <div> No Questions to show </div>
        }

      </div>
    )
  }
}

export default ExerciseQuestions
