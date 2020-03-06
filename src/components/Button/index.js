import React from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';

const Button = (props) => {
  const { testId, category, onClick } = props;
  return (
    <div data-testid={testId}>
      <button type="button" className={styles.button} onClick={onClick}>
        {category}
      </button>
    </div>

  );
};

Button.propTypes = {
  testId: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};

export default Button;
