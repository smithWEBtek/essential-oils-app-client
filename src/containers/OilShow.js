import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchOil, deleteOil } from '../actions/oils';
import { OilCard } from '../components/OilCard';

class OilShow extends Component {

    componentDidMount() {
        this.props.fetchOil(this.props.match.params.id)
    }

    onClickDelete = oilID => {
        const { history, deleteOil } = this.props

        deleteOil(oilID, history);
    }

    render() {
        const { oil } = this.props;

        return (
            <div>
                <OilCard oil={ oil } deleteButton={ this.onClickDelete } />
            </div>
        );
    }
}

const mapStateToProps = (state) => {    
    return ({
        oil: state.oil
    })
}

export default connect(mapStateToProps, { fetchOil, deleteOil })(OilShow);