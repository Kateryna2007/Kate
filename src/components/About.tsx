import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h2>Про наш магазин одягу</h2>
          <p>
            Ми віримо, що одяг — це не просто стиль, а спосіб вираження себе. Наш магазин пропонує колекції, які допоможуть вам бути унікальними, комфортними і впевненими кожного дня.
          </p>
          <p>
            Усі наші речі виготовлені з натуральних матеріалів, з турботою про довкілля та ваш комфорт. Ми ретельно відбираємо кожен елемент, щоб надати вам найкращу якість за доступною ціною.
          </p>
          <p>
            Наша команда працює над тим, щоб створити для вас не просто одяг, а справжній стиль життя, що надихає і дарує радість.
          </p>

          <ul className={styles.featuresList}>
            <li>🌿 Екологічно чисті матеріали</li>
            <li>🎨 Унікальний дизайн та кольори</li>
            <li>💼 Ідеально підходить для роботи та відпочинку</li>
            <li>🚚 Швидка доставка по всій країні</li>
            <li>⭐ Висока якість та доступна ціна</li>
          </ul>

          <button className={styles.learnMoreBtn}>Дізнатися більше</button>
        </div>
        <div className={styles.imageBlock}>
          <img
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80"
            alt="Модний одяг"
            className={styles.aboutImage}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
