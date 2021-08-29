import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import fetchBrands from './actions/fetchBrands';

class App extends React.Component {

  // componentDidMount() {
  //   fetch('http://localhost:3001/api/brands')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }

  render () {
    return (
    <div className="App">
      App
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
