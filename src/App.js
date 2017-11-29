import React, { Component } from 'react';
import Oils from './components/Oils';
import OilService from './services/OilService';
import AddOil from './components/AddOil';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      oils: []
    }
  }

  componentDidMount() {
    OilService.fetchOils().then(oils => this.setState({ oils }))
  }

  addOil = oil => {
    OilService.createOil(oil).then(oil => this.setState({
      oils: this.state.oils.concat(oil)
    }))
  }

  render() {
    return (
      <div className="App">
        <div className="navbar">
          {/* <Navbar /> */}
        </div>

        <div className="sidebar">
          <Oils oils={this.state.oils}/>
        </div>

        <div className="main-content">
          <AddOil addOil={this.addOil} />
        </div>
      </div>
    );
  }
}

export default App;
