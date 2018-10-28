import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './styles/App.css';

import VetsView from './components/VetsView';
import PetsView from './components/PetsView';
import NavBar from "./components/NavBar";
import ApptsView from "./components/ApptsView";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Route exact path="/" component={PetsView}/>
          <Route path="/pets" component={PetsView}/>
          <Route path="/vets" component={VetsView}/>
          <Route path="/appts" component={ApptsView}/>
        </div>
      </Router>
    );
  }
}

export default App;
