// src/components/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h3>PastelWear</h3>
          <p>Магазин стильного одягу з душею</p>
        </div>
        <div className={styles.links}>
          <Link to="/products">Каталог</Link>
          <Link to="/about">Про нас</Link>
          <Link to="/contact">Контакти</Link>
          <Link to="/cart">Кошик</Link>
        </div>
        <div className={styles.contact}>
          <p>📞 +38 (096) 123-45-67</p>
          <p>📧 info@pastelwear.ua</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} PastelWear. Всі права захищені.</p>
      </div>
    </footer>
  );
};

export default Footer;
