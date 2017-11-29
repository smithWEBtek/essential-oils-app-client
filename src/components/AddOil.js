import React, { Component } from 'react';

class AddOil extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            description: '',
            uses: '',
            fragrance_profile: '',
            medical_properties: ''
        }
    }

    handleOnChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const oil = this.state;

        this.props.addOil(oil)

        this.setState({
            name: '',
            description: '',
            uses: '',
            fragrance_profile: '',
            medical_properties: ''            
        })
    }

    render() {
        return (
            <form onSubmit={ this.handleOnSubmit }>
                <label htmlFor="oil_name">Name</label>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleOnChange}
                    placeholder="Oil Name"
                />
                <br />

                <label htmlFor="oil_description">Description</label>
                <input
                    type="textarea"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleOnChange}
                    placeholder="Oil Description"
                />
                <br />

                <label htmlFor="oil_uses">Uses</label>
                <input
                    type="textarea"
                    name="uses"
                    value={this.state.uses}
                    onChange={this.handleOnChange}
                    placeholder="Oil Uses"
                />
                <br />

                <label htmlFor="oil_fragrance_profile">Fragrance Profile</label>
                <input
                    type="textarea"
                    name="fragrance_profile"
                    value={this.state.fragrance_profile}
                    onChange={this.handleOnChange}
                    placeholder="Oil Fragrance Profile"
                />
                <br />

                <label htmlFor="oil_medical_properties">Medical Properties</label>
                <input
                    type="textarea"
                    name="medical_properties"
                    value={this.state.medical_properties}
                    onChange={this.handleOnChange}
                    placeholder="Oil Medical Properties"
                />
                <br />

                <button>Add Oil</button>
            </form>
        )
    }
}

export default AddOil