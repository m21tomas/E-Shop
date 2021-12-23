import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import PradinisCentrai from './components/PradinisCentrai';
import UsernameComponent from './components/UsernameComponent';
import CartSummaryContainer from './components/CartSummaryContainer';
import SelfDestructTimerComponent from './components/SelfDestructTimerComponent';
import RegistrationComponent from './components/RegistrationComponent';


function App() {

  return (

    <div className="container">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link py-2" to="/kodas-war">Vakcinu centrai</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link py-2 mx-3" to="/registracija">Registracija vakcinai</Link>
              </li>
                {/* <UsernameComponent /> */}
              <li className="nav-item">
                <Link className="nav-link py-2 mx-3" to="/vakcinos">Vakcinos</Link>
              </li>
            </ul>
            <ul className="navbar-nav navbar-right">
              <li className="nav-item">
                <Link className="nav-link" to="/cart-details"><CartSummaryContainer /></Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/kodas-war" onlyActiveOnIndex>
            <PradinisCentrai />
          </Route>
          <Route path="/registracija">
            <RegistrationComponent />
          </Route>
          <Route path="/vakcinos">
            <CartSummaryContainer />
          </Route>
          <Route path="/destruct">
            <SelfDestructTimerComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
