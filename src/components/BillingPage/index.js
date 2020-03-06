import React, { useState } from 'react';
import Header from '../Header';
import * as styles from './index.module.css';

const BillingPage = (props) => {
  const { products, cartCount } = props;
  const [cartContents, setCartContents] = useState({});
  products.forEach((product) => {
    if (!cartContents[product.category]) {
      cartContents[product.category] = [];
      cartContents[product.category].push({ [product.name]: { price: product.price, quantity: product.count } });
    } else if (!cartContents[product.category][product.name]) {
      cartContents[product.category].push({ [product.name]: { price: product.price, quantity: product.count } });
    } else {
      cartContents[product.category][product.name] = {
        price: product.price,
        quantity: product.count,
      };
    }
  });
  return (
    <div>
      <div className={styles.header}>
        <Header cartCount={cartCount} />
      </div>
      <h1>Your Shopping Cart (3 items)</h1>
      <div>
        <div className={styles.row}>
          <div>Item</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>
        {
          // Object.entries(cartContents).map((content) => {
          //   <div>content.category</div>;
          //   content.category;
          // })
        }
      </div>

    </div>
  );
};

export default BillingPage;
