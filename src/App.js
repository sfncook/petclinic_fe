import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom";

import './styles/App.css';
import {getAllPets} from "./stateHandlers/actions";
import Foo from './components/Foo';
import PetsView from './components/PetsView';
import NavBar from "./components/NavBar";

class App_ extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Route exact path="/" component={PetsView} />
          <Route path="/pets" component={PetsView} />
          <Route path="/foo" component={Foo} />
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
