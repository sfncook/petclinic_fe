import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom";

import './styles/App.css';
import {getAllPets} from "./stateHandlers/actions";
import Foo from './components/Foo';
import PetsView from './components/PetsView';

class App_ extends Component {
  render() {
    return (
      <Router>
        <div>

          <Route path="/" component={Foo} />
          <Route path="/pets" component={PetsView} />
        </div>
      </Router>
    );
  }

  componentDidMount() {
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
