import React from 'react';


class ProductForm extends React.Component {

    render() {
        return (
            <div>
                This is where the product form goes.
                <form>
                    <label>Product Name: </label>
                    <input type="text" placeholder="Enter Name"/>
                    <br></br>
                    <label>Product Price: </label>
                    <input type="text" placeholder="Enter Price (without $)"/>
                    <br></br>
                    <label>Product Rating: </label>
                    <input type="text" placeholder="Enter Rating"/>
                    <br></br>
                    <label>Product Description: </label>
                    <textarea placeholder="Enter Description"/>
                    <br></br>
                    <input type="reset" value="Reset Form" />
                    <input type="submit" value="Submit" />
                    
                </form>
            </div>
        )
    }
}

export default ProductForm;