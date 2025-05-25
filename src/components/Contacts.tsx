import React, { useState } from 'react';
import styles from './Contacts.module.css';

const Contacts: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Дякуємо, ${name}! Ваше повідомлення надіслано.`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.contactBox}>
        <h2 className={styles.title}>Контакти</h2>

        <div className={styles.info}>
          <p><strong>Адреса:</strong> вул. Мрій, 12, Київ, Україна</p>
          <p><strong>Телефон:</strong> +380 44 123 45 67</p>
          <p><strong>Email:</strong> info@clothingshop.ua</p>
          <p><strong>Години роботи:</strong> Пн-Пт: 9:00 - 18:00</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Ваше ім'я"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Ваш Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <textarea
            placeholder="Повідомлення"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.textarea}
            required
          />
          <button type="submit" className={styles.button}>Надіслати</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
