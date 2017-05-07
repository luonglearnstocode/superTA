import React, {Component} from 'react'
import TeX from 'react-formula-beautifier';
import { FormGroup, FormControl, Image, Jumbotron } from 'react-bootstrap'
import logo from '../../public/superta-img.png'
import BackgroundImage from '../../public/background.jpg'
import NavigationBar from './Common/NavigationBar'

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
      <div style={{ backgroundImage: `url(${BackgroundImage})`, height: '100vh' }}>
        <NavigationBar />
        <Jumbotron style={{ width: 800, margin: 'auto', marginTop: 200, padding: 50, borderRadius: 20, backgroundColor: '#f8f8f8' }}>
          <Image src={logo} style={{ width: 600, marginLeft: 50, marginRight: 50, marginBottom: 25 }}/>
          <FormGroup bsSize="large">
            <FormControl
              type="text"
              defaultValue={this.state.currentFormula}
              placeholder="Enter expression"
              onChange={this.updateCurrentFormula}
            />
          </FormGroup>
          <TeX value={this.state.currentFormula || 'type-an-expression'} style={{ fontSize: 18 }} />
        </Jumbotron>
      </div>
    );
  }
}

export default Home
