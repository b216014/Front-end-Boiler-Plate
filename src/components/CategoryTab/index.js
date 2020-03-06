import React, { useState } from 'react';
import propTypes from 'prop-types';
import CategoryList from '../CategoryList';
import * as styles from './index.module.css';

const CategoryTab = (props) => {
  const {
    products, setCartCount, cartCount, setProducts, cartContents, setCartContents,
  } = props;
  const [categories, setCategories] = useState([]);
  const [categoryToShow, setCategoryToShow] = useState('All');
  const [catergoryProducts, setCategoryProducts] = useState([]);

  if (categoryToShow === 'All') {
    products.forEach((product) => {
      catergoryProducts.push(product);
    });
  }

  products.forEach((product) => {
    if (product.category === categoryToShow) {
      catergoryProducts.push(product);
    }
  });

  if (categories.indexOf('All') === -1)categories.push('All');
  products.forEach((product) => {
    if (categories.indexOf(product.category) === -1)categories.push(product.category);
  });
  return (
    <div className={styles.cardContainer}>
      {
              categories.map((category) => <button type="button" onClick={() => { setCategoryProducts([]); setCategoryToShow(category); }} className={styles.button}>{category}</button>)
          }
      <h3 className={styles.filter}>{categoryToShow}</h3>
      <CategoryList
        catergoryProducts={catergoryProducts}
        setCartCount={setCartCount}
        cartCount={cartCount}
        setProducts={setProducts}
        products={products}
        cartContents={cartContents}
        setCartContents={setCartContents}
      />
    </div>
  );
};

CategoryTab.propTypes = {
  products: propTypes.array.isRequired,
};

export default CategoryTab;
