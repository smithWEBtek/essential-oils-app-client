import React, { Component } from 'react';
import { connect } from 'react-redux';

import OilsList from '../components/OilsList';
import { fetchOils } from '../actions/oils';

class Oils extends Component {

  componentDidMount() {
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
  return ({
    oils: state.oils
  })
}

export default connect(mapStateToProps, { fetchOils })(Oils);