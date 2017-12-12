import React, { Component } from 'react';
import { connect } from 'react-redux';

import OilsList from '../components/OilsList';
import { fetchOils, deleteOil } from '../actions/oils';

class Oils extends Component {

  componentDidMount() {
    this.props.fetchOils()
  }

  onClickDelete = oilID => {
    this.props.deleteOil(oilID)
  }
  
  render() {
    return (
      <div>
        <OilsList oils={ this.props.oils } deleteButton={ this.onClickDelete }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    oils: state.oils
  })
}

export default connect(mapStateToProps, { fetchOils, deleteOil })(Oils);