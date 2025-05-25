import React, { useState } from 'react';
import styles from './Checkout.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Checkout: React.FC = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Дякуємо за замовлення, ${name}! Ми з вами зв'яжемося найближчим часом.`);
  };

  const totalPrice = cartItems.reduce((sum, item) => {
    const numericPrice = parseFloat(item.price.replace(/[^\d.]/g, ''));
    return sum + numericPrice * item.quantity;
  }, 0);

  return (
    <div className={styles.container}>
      <div className={styles.checkoutBox}>
        <h2 className={styles.title}>Оформлення замовлення</h2>

        <ul className={styles.cartSummary}>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} × {item.quantity} — {item.price}
            </li>
          ))}
        </ul>

        <p className={styles.total}>Загальна сума: {totalPrice.toFixed(2)} грн</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Ім'я та прізвище"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Адреса доставки"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="tel"
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>Підтвердити замовлення</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
