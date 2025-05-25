import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Header.module.css';
import { RootState } from '../store';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItemsCount = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>ClothingShop</div>
      <nav className={`${styles.nav} ${menuOpen ? styles.navActive : ''}`}>
        <Link to="/" className={styles.navLink}>Головна</Link>
        <Link to="/posts">Пости</Link>

        <Link to="/about" className={styles.navLink}>Про нас</Link>
        <a href="/contact" className={styles.navLink}>Контакти</a>
        <Link to="/login" className={styles.navLink}>Увійти</Link>
        <Link to="/cart" className={styles.navLink}>
          🛒 Кошик {cartItemsCount > 0 && <span className={styles.cartCount}>{cartItemsCount}</span>}
        </Link>
      </nav>

      <div className={styles.menuToggle} onClick={toggleMenu}>
        <div className={`${styles.bar} ${menuOpen ? styles.bar1 : ''}`}></div>
        <div className={`${styles.bar} ${menuOpen ? styles.bar2 : ''}`}></div>
        <div className={`${styles.bar} ${menuOpen ? styles.bar3 : ''}`}></div>
      </div>
    </header>
  );
};

export default Header;
