import React, { Component } from 'react';
import { connect } from 'react-redux';

import OilCard from '../components/OilsList';
import { fetchOil } from '../actions/oils';

class OilsShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchOil(id);
  }

  render() {
    return (
        <OilCard oil={ this.props.oil }/>
    );
  }

}

// const mapStateToProps = ({ oils }, ownProps) => {
//   return { oil: oils[ownProps.match.params.id] }
// }

const mapStateToProps = (state) => {
    return ({
      oil: state.oil
    })
  }

export default connect(mapStateToProps, { fetchOil })(OilsShow);