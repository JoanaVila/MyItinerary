import React from 'react';
import './App.css';
import Landing from "./components/Landing";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Cities from './components/Cities';
import Itineraries from './components/Itineraries';
import Activities from "./components/Activities";
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path= "/" component={Landing}/>
          <Route path= "/cities" component={Cities}/>
          <Route path= "/itineraries" component={Itineraries}/>
          <Route path= "/activities" component={Activities}/>
          <Route path= "/login" component={Login}/>
          <Route path= "/createaccount" component={CreateAccount}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
