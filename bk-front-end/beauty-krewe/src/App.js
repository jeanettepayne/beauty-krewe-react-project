import './App.css';
import React from 'react';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3001/api/products')
    .then(response => response.json())
    .then(data => console.log(data))
  }
  render () {
    return (
    <div className="App">
      App
    </div>
  );
    }
}

export default App;
