import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './styles/App.css';
import {getAllPets} from "./stateHandlers/actions";

class App_ extends Component {
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
    // fetch("http://localhost:8080/pets", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    //   .then((response) =>response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     return error;
    //   });
    this.props.getAllPets();
  }

}

const mapStateToProps = state => {
  return {
    pets: state.pets,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getAllPets: () => {
      dispatch(getAllPets());
    }
  }
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App_);

export default App;
