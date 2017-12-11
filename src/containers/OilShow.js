import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchOil } from '../actions/oils';
import { OilCard } from '../components/OilCard';

class OilShow extends Component {

    componentDidMount() {
        this.props.fetchOil(this.props.match.params.id)
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

const mapStateToProps = (state) => {    
    return ({
        oil: state.oil
    })
}

export default connect(mapStateToProps, { fetchOil })(OilShow);