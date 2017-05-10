import React, { Component } from 'react'
import { Table, Panel, ListGroup, ListGroupItem } from 'react-bootstrap'

const styles = {
  panel: {
    marginTop: 20,
    width: '80%'
  },
  table: {
    width: '80%'
  }
}

class GradesTab extends Component {

  _getAverage() {
    let sum = 0
    this.props.grades.forEach((gradeObj) => {
      sum+=gradeObj.grade
    })
    const avg = sum / this.props.grades.length
    return avg.toFixed(2)
  }

  _getHighest() {
    const highest = this.props.grades.reduce((prev, current) => (prev.grade > current.grade) ? prev : current)
    return highest.grade.toFixed(2)
  }

  _getLowest() {
    const lowest = this.props.grades.reduce((prev, current) => (prev.grade < current.grade) ? prev : current)
    return lowest.grade.toFixed(2)
  }

  render() {
    return (
      <div>
      <Panel collapsible bsStyle="info" header="Stats" style={styles.panel}>
        <ListGroup fill>
          <ListGroupItem>Average Grade : {this.props.grades ? this._getAverage() : '-'}</ListGroupItem>
          <ListGroupItem>Highest Grade : {this.props.grades ? this._getHighest() : '-'}</ListGroupItem>
          <ListGroupItem>Lowest Grade : {this.props.grades ? this._getLowest() : '-'}</ListGroupItem>
        </ListGroup>
      </Panel>
      <Table striped bordered condensed hover style={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Student ID</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
        { this.props.grades &&
            this.props.grades.map((grade, index) => {
              return (
                <tr key={grade.id}>
                  <td>{index + 1}</td>
                  <td>{grade.studentId}</td>
                  <td>{grade.grade}</td>
                </tr>
              )
            })
        }
        </tbody>
      </Table>
      </div>
    )
  }
}

export default GradesTab
