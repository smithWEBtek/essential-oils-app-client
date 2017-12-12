import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';

import { updateOilFormData } from '../actions/oilForm';
import { createOil } from '../actions/oils';

class OilForm extends Component {

    handleOnChange = event => {
        const { name, value } = event.target
        const currentOilFormData = Object.assign({}, this.props.oilFormData, {
            [name]: value
        })

        this.props.updateOilFormData(currentOilFormData)
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const { history, createOil } = this.props

        createOil(this.props.oilFormData, history);
    }

    render() {
        const { name, description, uses, fragrance_profile, medical_properties } = this.props.oilFormData;

        return (
            <div>
                <div>
                    <h1>New Oil Form</h1>
                </div>
                <div>
                    <Form onSubmit={ this.handleOnSubmit }>
                        <FormGroup row>
                            <Label for="name" sm={2}>Name:</Label>
                            <Col sm={10}>
                                <Input type="text" name="name" value={ name } onChange={ this.handleOnChange } placeholder="Oil Name" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="description" sm={2}>Description:</Label>
                            <Col sm={10}>
                                <Input type="textarea" name="description" value={ description } onChange={ this.handleOnChange } placeholder="Oil Description" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="uses" sm={2}>Uses:</Label>
                            <Col sm={10}>
                                <Input type="textarea" name="uses" value={ uses } onChange={ this.handleOnChange } placeholder="Oil Uses" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="fragrance_profile" sm={2}>Fragrance:</Label>
                            <Col sm={10}>
                                <Input type="textarea" name="fragrance_profile" value={ fragrance_profile } onChange={ this.handleOnChange } placeholder="Oil Fragrance" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="medical_properties" sm={2}>Medical Properties:</Label>
                            <Col sm={10}>
                                <Input type="textarea" name="medical_properties" value={ medical_properties } onChange={ this.handleOnChange } placeholder="Oil Medical Properties" />
                            </Col>
                        </FormGroup>

                        <Button type="submit">Add Oil</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
      oilFormData: state.oilFormData
    })
  }

export default connect(mapStateToProps, { updateOilFormData, createOil })(OilForm);