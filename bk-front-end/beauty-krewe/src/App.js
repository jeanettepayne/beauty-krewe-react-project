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
import fetchApi from './actions/fetchApi';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


class App extends React.Component {

  // componentDidMount() {
  //   this.props.fetchApi()    
  // }

  render () {
    return (
    <div className="App">
      <NavBar />
      <BrandsContainer />
      <ProductsContainer />
      <InfluencersContainer /> 
      {/* <ProductForm /> */}
      {/* <Route path='/products/:id' render={(routerProps) => <Product {...routerProps} products={this.props.brand.products} />} /> */}
      <Route exact path='/' render={() => <Homepage />} />
      <Footer />
    </div>
  );
    }
}
document.body.style='background: #ffebf6;'
// #C9A9A6
// #E0BFB8


// const mapStateToProps = (state) => {
//   return {
//     products: state.productReducer.products
//   }
// }

export default connect(null)(App);
