import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  componentDidMount() {
    fetch("http://localhost:8080/pets", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) =>response.json())
      .then((data) => {
        console.log(data);
      })
      .catch(error => {
        return error;
      });
    // fetch('http://localhost:8080/pets', {
    //   method: 'GET',
    //   mode: 'no-cors',
    //   headers: {'Content-Type': 'application/json'},
    // })
    //   .then(function (rsp) {
    //     console.log('rsp:',rsp);
    //   })
    //   .catch(function (err) {
    //     console.log('err:', err);
    //   });
  }

}

export default App;
