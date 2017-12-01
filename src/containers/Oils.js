import React, { Component } from 'react';
import { connect } from 'react-redux';

import OilCard from '../components/OilCard';
import OilForm from './OilForm';
import { fetchOils } from '../actions/oils';
import './Oils.css';

class Oils extends Component {

  componentDidMount() {
    this.props.fetchOils()
  }

  render() {
    return (
      <div>
        <h1>Oils</h1>
        { this.props.oils.map(oil => 
          <OilCard key={ oil.id } oil={ oil } />
        )}
        <OilForm />
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