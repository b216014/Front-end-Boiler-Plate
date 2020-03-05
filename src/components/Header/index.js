import React from 'react';
import NotificationBadge, { Effect } from 'react-notification-badge';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import * as styles from './index.module.css';


const Header = (props) => {
  const { testId } = props;
  return (
    <div className={styles.header} data-testid={testId}>
      <NotificationBadge count={2} effect={Effect.SCALE} />
      <AiOutlineShoppingCart className={styles.cart} />
    </div>
  );
};

export default Header;
