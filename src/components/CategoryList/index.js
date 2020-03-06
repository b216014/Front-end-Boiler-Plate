import React, { useState } from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';
import CounterButton from '../CounterButton';

const CategoryList = (props) => {
  const {
    catergoryProducts, setCartCount, cartCount, setProducts, products, cartContents, setCartContents,
  } = props;
  return (
    <div className={styles.container}>
      {
            catergoryProducts.map((product) => (
              <div className={styles.card}>
                <img src={product.link} alt="Category product" className={styles.img} />
                <div className={styles.lower}>
                  <div className={styles.name}>{product.name}</div>
                  <div className={styles.price}>{product.price}</div>
                </div>
                <CounterButton
                  bar={product.quantity}
                  setCartCount={setCartCount}
                  cartCount={cartCount}
                  product={product}
                  setProducts={setProducts}
                  products={products}
                  cartContents={cartContents}
                  setCartContents={setCartContents}
                />
              </div>
            ))
        }

    </div>
  );
};

CategoryList.propTypes = {
  catergoryProducts: propTypes.array.isRequired,
};

export default CategoryList;
