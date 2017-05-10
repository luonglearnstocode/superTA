import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

class GradesTab extends Component {
  render() {
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Student ID</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
        { this.props.grades ?
            this.props.grades.map((grade, index) => {
              return (
                <tr key={grade.id}>
                  <td>{index + 1}</td>
                  <td>{grade.id}</td>
                  <td>{grade.studentId}</td>
                  <td>{grade.grade}</td>
                </tr>
              )
            })
          :
          <p> No Grades to show </p>
        }
        </tbody>
      </Table>
    )
  }
}

export default GradesTab
