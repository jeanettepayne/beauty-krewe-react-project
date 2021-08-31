import React from 'react';


class ProductForm extends React.Component {

    render() {
        return (
            <div>
                This is where the product form goes.
                <form>
                    <label>Product Name: </label>
                    <input type="text" placeholder="Enter Name"/>
                </form>
            </div>
        )
    }
}

export default ProductForm;