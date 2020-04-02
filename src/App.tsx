import React, {Component} from "react";
import './App.css';
import './styles/common.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// components
import HomePage from "./components/HomePage/HomePage";
import CountryInfoPage from "./components/HomePage/CountryInfoPage";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path='/' exact={true} component={HomePage} />
            <Route path='/info/:countryName' component={CountryInfoPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
