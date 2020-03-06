import React from 'react';
import propTypes from 'prop-types';
import CategoryTab from '../CategoryTab';
import * as styles from './index.module.css';

const FilterCategories = (props) => {
  const {
    products, setCartCount, cartCount, setProducts, cartContents, setCartContents,
  } = props;
  return (
    <div className={styles.container}>
      <h4>Filter Categories</h4>
      <CategoryTab
        products={products}
        setCartCount={setCartCount}
        cartCount={cartCount}
        setProducts={setProducts}
        cartContents={cartContents}
        setCartContents={setCartContents}
      />
    </div>
  );
};

FilterCategories.propTypes = {
  products: propTypes.array.isRequired,
};

export default FilterCategories;
