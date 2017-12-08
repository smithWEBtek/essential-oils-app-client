import React from 'react';
import { connect } from 'react-redux';

const OilShow = ({ oil }) => (
    <div>
        <h2>{oil.name}</h2>
        <p>{oil.description}</p>
    </div>
)

const mapStateToProps = (state, ownProps) => {
  const oil = state.oils.find(oil => oil.id === +ownProps.match.params.id)
  
  if (oil) {
    return { oil }
  } else {
    return { oil: {} }
  }
};

export default connect(mapStateToProps)(OilShow);