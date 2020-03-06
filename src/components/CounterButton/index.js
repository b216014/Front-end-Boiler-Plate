import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';

const CounterButton = (props) => {
  const {
    setCartCount, cartCount, product, setProducts, products,
  } = props;
  const { testId, cartContents, setCartContents } = props;
  return (
    <div className={styles.counter}>
      <button
        type="button"
        data-testid={testId}
        onClick={() => {
          if (product.count === 0) {
            product.count = 0;
          } else {
            setCartCount(cartCount - 1);
            product.count -= 1;
          }
          // setProducts(
          //   [...products,
          //     product],
          // );
          console.log('Inside button counter', product);
        }}
      >
        -
      </button>
      <div className={styles.count}>{product.count}</div>
      <button
        type="button"
        onClick={() => {
          if (product.count >= product.quantity) {
            // setCounter(bar);
            product.count = product.quantity;
          } else {
            setCartCount(cartCount + 1);
            product.count += 1;
          }
          console.log('Inside button counter', product);
        }}
      >
        +

      </button>
    </div>
  );
};

CounterButton.propTypes = {
  setCartCount: propTypes.func.isRequired,
  cartCount: propTypes.func.isRequired,
  product: propTypes.object.isRequired,
  products: propTypes.array.isRequired,
  setProducts: propTypes.func.isRequired,
  testId: propTypes.string.isRequired,
  cartContents: propTypes.array.isRequired,
  setCartContents: propTypes.func.isRequired,
};

export default CounterButton;
