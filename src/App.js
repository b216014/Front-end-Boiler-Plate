import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Header from './components/Header';

const App = () => (
  <div>
    <div className="App">
      <Header />
    </div>

    <div className="container">
      <div className="filter">
        <h4>Filter Categories</h4>

        <ul>
          <Link to="/products/all">
            <button type="button">All</button>
          </Link>
        </ul>

      </div>
    </div>

  </div>

);

export default App;
