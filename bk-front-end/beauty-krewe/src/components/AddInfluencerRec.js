import React from 'react';
import { connect } from 'react-redux';
//import addInfluencer
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class AddInfluencerRec extends React.Component {

    state= {
        name: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addInfluencer(this.state)
        this.setState({
            name: ''
        })
    }

    render() {
        return (
            <div>
                Add Influencer Endorsement

                <div style={{display: 'flex', justifyContent: 'center'}}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Check type='checkbox' id='default-checkbox' label='test box' />

                </Form>
                </div>
            </div>
        )
    }

}

export default AddInfluencerRec;