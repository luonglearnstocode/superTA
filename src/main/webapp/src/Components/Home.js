import React, {Component} from 'react'
import TeX from 'react-formula-beautifier';
import { FormGroup, FormControl } from 'react-bootstrap'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFormula: ''
    };
  }

  updateCurrentFormula = (e) => this.setState({ currentFormula: e.target.value });

  render() {
    return (
      <div style={{ width: 800, margin: 'auto', marginTop: 300 }} className="formula-block">
      <FormGroup bsSize="large">
        <FormControl
          type="text"
          defaultValue={this.state.currentFormula}
          placeholder="Enter formula"
          onChange={this.updateCurrentFormula}
        />
      </FormGroup>
        <TeX value={this.state.currentFormula || 'type-an-expression'} style={{ fontSize: 18 }} />
      </div>
    );
  }
}

export default Home
