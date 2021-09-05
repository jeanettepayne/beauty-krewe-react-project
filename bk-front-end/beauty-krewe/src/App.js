import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import fetchBrands from './actions/fetchBrands';
import BrandsContainer from './containers/BrandsContainer';
import InfluencersContainer from './containers/InfluencersContainer';
import BrandIndex from './components/BrandIndex';
// import Product from './components/Product';
import { Route } from 'react-router';
import ProductsContainer from './containers/ProductsContainer';
import Homepage from './components/Homepage';


class App extends React.Component {

  render () {
    return (
    <div className="App">
      <BrandsContainer />
      <ProductsContainer />
      <InfluencersContainer />
      {/* <ProductForm /> */}
      {/* <Route path='/products/:id' render={(routerProps) => <Product {...routerProps} products={this.props.brand.products} />} /> */}
      <Route exact path='/' render={() => <Homepage />} />
    </div>
  );
    }
}


// const mapStateToProps = (state) => {
//   return {
//     brands: state.brands
//   }
// }

export default connect(null, {fetchBrands})(App);
