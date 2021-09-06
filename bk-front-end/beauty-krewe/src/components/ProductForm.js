import React from 'react';
import { connect } from 'react-redux';
import addProduct from '../actions/addProduct';
import Creatable, { makeCreatableSelect } from 'react-select/creatable';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FloatingLabel } from 'react-bootstrap';


class ProductForm extends React.Component {

    state = {
        name: '', 
        price: '', 
        rating: '', 
        description: '',
        brand: '-- Select Brand --',
        influencers: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addProduct(this.state)
        this.setState({
            name: '', 
            price: '', 
            rating: '', 
            description: '',
            brand: '',
            influencers: ''
        })
    }

    render() {
        return (
            
            // <div>
            //     <h3>Add a Product</h3>
            //     <form onSubmit={this.handleSubmit}>
            //         <label>Product Name: </label>
            //         <input type="text" placeholder="Enter Name" value={this.state.name} name="name" onChange={this.handleChange}/>
            //         <br></br>
            //         <label>Brand:</label>
            //         <select name="brand" value={this.state.brand} onChange={this.handleChange}>
            //             <option>-- Select Brand --</option>
            //             {this.props.products[0].map(product => <option key={product.brand.id} value={product.brand.id}>{product.brand.name}</option>)}
            //         </select>
            //         <br></br>
            //         <label>Product Price: </label>
            //         <input type="text" placeholder="Enter Price (without $)" value={this.state.price} name="price" onChange={this.handleChange}/>
            //         <br></br>
            //         <label>Product Rating: </label>
            //         <input type="text" placeholder="Enter Rating" value={this.state.rating} name="rating" onChange={this.handleChange}/>
            //         <br></br>
            //         <label>Product Description: </label>
            //         <textarea placeholder="Enter Description" value={this.state.description} name="description" onChange={this.handleChange}/>
            //         <br></br>
            //         {/* fix reset button or delete it  */}
            //         <input type="reset" value="Reset Form" />
            //         <input type="submit" value="Submit" />
                    
            //     </form>
            // </div>

            <div>
            <h3>Add a Product</h3>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Form onSubmit={this.handleSubmit}>
        
                    <Form.Group className="mb-3">
                        <FloatingLabel
                        controlId="floatingInput"
                        label="Product Name"
                        className="mb-3">
                            <Form.Control type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}/>
                        </FloatingLabel>

                        <Form.Label>
                            Brand
                        </Form.Label>
                        <Form.Select defaultValue="-- Select Brand --" onChange={this.handleChange}>
                            <option>-- Select Brand --</option>
                            {this.props.brands[0].map(brand =>
                                <option id={brand.id}>{brand.name}</option>
                            )}
                        </Form.Select>
                        <br></br>

                        <FloatingLabel
                        controlId="floatingInput"
                        label="Price (Without $)"
                        className="mb-3">
                            <Form.Control type="text" placeholder="Price (Without $)" value={this.state.price} name="price" onChange={this.handleChange}/>
                        </FloatingLabel>

                        <FloatingLabel
                        controlId="floatingInput"
                        label="Description"
                        className="mb-3">
                            <Form.Control as="textarea" type="textarea" placeholder="Full Product Description" value={this.state.description} name="description" onChange={this.handleChange}/>
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

export default connect(null, {addProduct})(ProductForm);