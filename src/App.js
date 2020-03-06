import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Link, Switch, Route,
} from 'react-router-dom';
import Axios from 'axios';
import Header from './components/Header';
import FilterCategories from './components/FilterCategories';
import BillingPage from './components/BillingPage';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartContents, setCartContents] = [{}];

  useEffect(() => {
    const getProducts = async () => {
      const response = await Axios.get('http://localhost:8080/products');
      setProducts(response.data);
    };
    getProducts();
  }, []);

  // console.log('products countttt', products);

  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <div>
            <Header cartCount={cartCount} />
            <FilterCategories
              products={products}
              setCartCount={setCartCount}
              cartCount={cartCount}
              setProducts={setProducts}
              cartContents={cartContents}
              setCartContents={setCartContents}
            />
          </div>
        </Route>

        <Route exact path="/billing">
          <BillingPage cartCount={cartCount} products={products} />
        </Route>

      </Switch>
    </Router>
  );
};

export default App;
