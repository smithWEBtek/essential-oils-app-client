***ACTION CREATORS && API CALL***

const setOil = oil => {
    return {
        type: 'GET_OIL_SUCCESS',
        oil
    }
}

export const fetchOil = id => {
    return dispatch => {
        return fetch(`${ API_URL }/oils/${ id }`)
            .then(response => response.json())
            .then(oil => dispatch(setOil(oil)))
            .catch(error => console.log(error));
    }
}

***OIL CARD***

import React from 'react';
import { Card, Button, CardTitle, CardText,
 CardSubtitle, CardBody } from 'reactstrap';

const OilCard = ({ oil }) => (
    <Card key={ oil.id } className="OilsCard">
        <CardBody>
            <CardTitle>{ oil.name }</CardTitle>
            <CardText>{ oil.description }</CardText>
            <CardSubtitle>Uses:</CardSubtitle>
            <CardText>{ oil.uses }</CardText>
            <CardSubtitle>Scent Profile:</CardSubtitle>
            <CardText>{ oil.fragrance_profile }</CardText>
            <CardSubtitle>Medical Properties:</CardSubtitle>
            <CardText>{ oil.medical_properties }</CardText>
            <Button>Button</Button>
        </CardBody>
    </Card>
);

export default OilCard;

***OIL SHOW***

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button, CardTitle, CardText,
  CardSubtitle, CardBody } from 'reactstrap';

import OilCard from '../components/OilsList';
import { fetchOil } from '../actions/oils';

class OilShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchOil(id)
  }

  render() {
    return (
        <OilCard oil={ this.props.oil }/>
    );
  }

}

const mapStateToProps = (state) => {
    return ({
      oil: state.oil
    })
  }

export default connect(mapStateToProps, { fetchOil })(OilShow);

***OILS CONTAINER WITH ROUTES***

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchOils } from '../actions/oils';
import OilsList from '../components/OilsList';

class Oils extends Component {

  componentDidMount() {
    this.props.fetchOils();
  }

  render() {
    const { oils } = this.props;

    return (
      <div>
        <OilsList oils={oils} />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    oils: state.oils
  };
}

export default connect(mapStateToProps, { fetchOils })(Oils);