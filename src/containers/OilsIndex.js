import React, { Component } from 'react';
import { connect } from 'react-redux';

import OilsList from '../components/OilsList';
import { fetchOils } from '../actions/oils';

class Oils extends Component {
  state = {
    oils: fetchOils()
  }
  componentDidMount() {
    // console.log('state: ', this.state)
    // state is null at this point...how then does state.oils work down on line 26? 
    
    // console.log('OilsIndex.js props: ', this.props)
    // although upon first starting the app, the list of oils appears from API, 
    // they do not show up here...

    this.props.fetchOils()
  }
  
  render() {
    return (
      <div>
        <OilsList oils={ this.props.oils } />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  //debugger; 
  // state.oils = []
  
  return ({
    oils: state.oils
  })

}

export default connect(mapStateToProps, { fetchOils })(Oils);