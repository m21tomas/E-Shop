import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './components/Hello';
import UsernameComponent from './components/UsernameComponent';
import CartSummaryContainer from './components/CartSummaryContainer';

function App() {
  return (
   
    <div className="container">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link py-2" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link py-2 mx-3" to="/hello">Hello</Link>
              </li>
                <UsernameComponent />
            </ul>
            <ul className="navbar-nav navbar-right">
              <li className="nav-item">
                <Link className="nav-link" to="/cart-details"><CartSummaryContainer /></Link>
              </li>
            </ul>
          </div>
          
        </nav>

        <Switch>
          <Route path="/hello">
            <Hello />
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
          <Route>
            <CartSummaryContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
