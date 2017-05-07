import React from 'react'

const styles = {
  error: {
    marginLeft: 20,
    fontSize: 16,
  },
  correct: {
    color: 'green',
    marginRight: 10
  },
  incorrect: {
    color: 'red',
    marginRight: 10
  }
}

const Error = ({ message }) => {
  return (
    <span style={styles.error}>
    {
      message === 'correct' ?
      <span style={styles.correct}>
        <i className="fa fa-check" aria-hidden="true" style={styles.icon, styles.correct}></i>
        {message}
      </span>
      : <span style={styles.incorrect}>
          <i className="fa fa-times" aria-hidden="true" style={styles.icon, styles.incorrect}></i>
          {message}
        </span>
    }
    </span>

  )
}

export default Error
