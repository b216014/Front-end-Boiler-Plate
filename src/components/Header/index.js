import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import NotificationBadge, { Effect } from 'react-notification-badge';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import propTypes from 'prop-types';
import * as styles from './index.module.css';

const Header = (props) => {
  const { testId, cartCount } = props;
  return (
    <Router>
      <div className={styles.header} data-testid={testId}>
        <Link to="/billing">
          <NotificationBadge count={cartCount} effect={Effect.SCALE} />
          <AiOutlineShoppingCart className={styles.cart} />
        </Link>

      </div>
    </Router>
  );
};

Header.propTypes = {
  testId: propTypes.string.isRequired,
};

export default Header;
