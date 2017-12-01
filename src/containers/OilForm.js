import React, { Component } from 'react';
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
        event.preventDefault();

        this.props.createOil(this.props.oilFormData)
    }

    render() {
        const { name, description, uses, fragrance_profile, medical_properties } = this.props.oilFormData;
        return (
            <div>
                Add a Oil to the Directory
                <form onSubmit={ this.handleOnSubmit }>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={ name }
                            onChange={ this.handleOnChange }
                            placeholder="Oil Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input
                            type="textarea"
                            name="description"
                            value={ description }
                            onChange={ this.handleOnChange }
                            placeholder="Oil Description"
                        />
                    </div>
                    <div>
                        <label htmlFor="uses">Uses</label>
                        <input
                            type="textarea"
                            name="uses"
                            value={ uses }
                            onChange={ this.handleOnChange }
                            placeholder="Oil Uses"
                        />
                    </div>
                    <div>
                        <label htmlFor="fragrance_profile">Fragrance Profile</label>
                        <input
                            type="textarea"
                            name="fragrance_profile"
                            value={ fragrance_profile }
                            onChange={ this.handleOnChange }
                            placeholder="Oil Fragrance Profile"
                        />
                    </div>
                    <div>
                        <label htmlFor="medical_properties">Medical Properties</label>
                        <input
                            type="textarea"
                            name="medical_properties"
                            value={ medical_properties }
                            onChange={ this.handleOnChange }
                            placeholder="Oil Medical Properties"
                        />
                    </div>
                    <button type="submit">Add Oil</button>
                </form>
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