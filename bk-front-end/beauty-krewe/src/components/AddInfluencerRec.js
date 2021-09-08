import React from 'react';
import addInfluencerProduct from '../actions/addInfluencerProduct';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FloatingLabel } from 'react-bootstrap';
import { connect } from 'react-redux';

class AddInfluencerRec extends React.Component {

    state= {
        prouduct_id: '',
        influencer_id: ''
    }

    handleInfluencerChange = (event) => {
        this.setState({
            influencer_id: event.target.value
        })
    }

    handleProductChange = (event) => {
        this.setState({
            product_id: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.props)
        this.props.addInfluencerProduct(this.state)
        this.setState({
            prouduct_id: '',
            influencer_id: ''
        })
    }

    render() {
        return (
            <div>
                <h2>Add Recommended Product</h2>

                <div style={{display: 'flex', justifyContent: 'center'}}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Influencer"
                        className="mb-3">
                        <Form.Select onChange={this.handleInfluencerChange}>
                            <option>-- Select Influencer --</option>
                            {this.props.influencers.map(influencer =>
                                <option name="influencer_id" value={influencer.id} id={influencer.id}>{influencer.name}</option>
                            )}
                        </Form.Select>
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Product"
                        className="mb-3">
                        <Form.Select onChange={this.handleProductChange}>
                            <option>-- Select Product --</option>
                            {this.props.products[0].map(product =>
                                <option name="product_id" value={product.id} id={product.id}>{product.name}</option>
                            )}
                        </Form.Select>
                    </FloatingLabel>
                  </Form.Group>

                  <Button variant="secondary" type="submit" value="submit">
                        Add Product
                  </Button>
                </Form>
                </div>
            </div>
        )
    }

}

export default connect(null, {addInfluencerProduct})(AddInfluencerRec);