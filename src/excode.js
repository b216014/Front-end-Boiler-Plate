import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Header from './components/Header';
import Button from './components/Button';
import CounterButton from './components/CounterButton';
import BillingPage from './components/BillingPage';

const getAllProducts = async (setProducts) => {
  const result = await axios.get('http://localhost:8080/products');
  await setProducts(result.data);
};

const App = () => {
  const [products, setProducts] = useState([]);
  if (products.length === 0)getAllProducts(setProducts);
  const [categories, setCategories] = useState([]);
  const [whatToShow, setWhatToShow] = useState('');
  products.forEach((product) => {
    if (categories.indexOf(product.category) === -1)categories.push(product.category);
  });
  const [items, setItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="App">
              <Header />
            </div>

            <div className="container">
              <div className="filter">
                <h4>Filter Categories</h4>
                <ul>
                  <Button category="All" onClick={() => setWhatToShow('All')} />
                </ul>
                {
            (categories).map((category) => (
              <ul>
                <Button category={category} onClick={() => { setItems([]); setWhatToShow(category); }} />
              </ul>
            ))
          }
              </div>
              <div className="card-container">

                {
            products.forEach((product) => {
              if (product.category === whatToShow) {
                product.count = 0;
                items.push(product);
              }
            })
          }
                <h3>{whatToShow}</h3>
                {
            items.map((item) => (
              <div className="card">
                <img src={item.link} alt="" />
                <div className="lower">
                  <div className="name">{item.name}</div>
                  <div className="price">
                    <div>MRP</div>
                    <div>{item.price}</div>
                  </div>
                </div>

                <CounterButton bar={item.quantity} counter={item.count} />
              </div>
            ))
          }
              </div>
            </div>
          </Route>
          <Route exact path="/billing">
            <BillingPage />
          </Route>
        </Switch>
      </Router>
    </div>

  );
};

export default App;
