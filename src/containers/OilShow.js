import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchOils } from '../actions/oils';
import { OilCard } from '../components/OilCard';

class OilShow extends Component {

    componentDidMount() {
        this.props.fetchOils()
    }

    render() {
        const { oil } = this.props;

        return (
            <div>
                <OilCard oil={ oil } />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  const oil = state.oils.find(oil => oil.id === +ownProps.match.params.id)
  
  if (oil) {
    return { oil }
  } else {
    return { oil: {} }
  }
};

export default connect(mapStateToProps, { fetchOils })(OilShow);