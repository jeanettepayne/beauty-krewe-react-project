import React from 'react';


class ProductForm extends React.Component {

    state = {
        name: '', 
        price: '', 
        rating: '', 
        description: ''
    }

    handleChange = (event) => {

    }

    render() {
        return (
            <div>
                This is where the product form goes.
                <form>
                    <label>Product Name: </label>
                    <input type="text" placeholder="Enter Name" value={this.state.name} onChange={this.handleChange}/>
                    <br></br>
                    <label>Product Price: </label>
                    <input type="text" placeholder="Enter Price (without $)" value={this.state.price} onChange={this.handleChange}/>
                    <br></br>
                    <label>Product Rating: </label>
                    <input type="text" placeholder="Enter Rating" value={this.state.rating} onChange={this.handleChange}/>
                    <br></br>
                    <label>Product Description: </label>
                    <textarea placeholder="Enter Description" value={this.state.description} onChange={this.handleChange}/>
                    <br></br>
                    <input type="reset" value="Reset Form" />
                    <input type="submit" value="Submit" />
                    
                </form>
            </div>
        )
    }
}

export default ProductForm;