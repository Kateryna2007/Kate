import React from 'react';
import styles from './ProductList.module.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Легка сукня',
    price: '799 грн',
    image: 'https://goldi.ua/storage/web/product/815bfe4f27131771ee8175a82a7e6604/1/jWrSUpA0Rh_ZhwqzhmLDDmLkAEyqUXBN.jpeg',
    description: 'Ідеальна сукня для літа, легка та повітряна.'
  },
  {
    id: 2,
    name: 'Чоловіча сорочка',
    price: '1099 грн',
    image: 'https://api.arber.ua/storage/cache/products/scale/800/AneaXWnEwZNbwejSyAyJDYpHzZfu4cOkVI6u6Uzk.jpg',
    description: 'Стильна сорочка для будь-яких випадків.'
  },
  {
    id: 3,
    name: 'Класичні джинси',
    price: '1299 грн',
    image: 'https://images.prom.ua/4094675318_klasichni-dzhinsovi-shtani.jpg',
    description: 'Зручні джинси з якісного деніму.'
  },
  {
    id: 4,
    name: 'Жіночий кардиган',
    price: '899 грн',
    image: 'https://cooshwear.com/_next/image?url=https%3A%2F%2Fapi.cooshwear.com%2Fassets%2Femptyname-877-min__preview.jpg&w=1200&q=95',
    description: "М'який кардиган пастельних тонів для прохолодної погоди."
  },
  {
    id: 5,
    name: 'Чоловічий светр',
    price: '999 грн',
    image: 'https://cdn.kasta.ua/image/1035/s3/supplier_provided_link/feed/66e/c00/bd7/45e/bee/4e0/4fe/da1/7ea.jpeg',
    description: 'Теплий светр з натуральної вовни.'
  },
  {
    id: 6,
    name: 'Базова футболка',
    price: '499 грн',
    image: 'https://sistersofshopping.com.ua/wp-content/uploads/2024/04/440361430_462314916248169_2325599211354657988_n.jpg',
    description: 'Комфортна футболка для щоденного використання.'
  }
];

const Products: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    }));
  };

  return (
    <main className={styles.page}>
      <section className={styles.introSection}>
        <h1 className={styles.title}>Наш Магазин Одягу</h1>
        <p className={styles.subtitle}>
          Відкрийте для себе наші стильні та комфортні колекції. Ми пропонуємо одяг
          в пастельних відтінках для будь-якого настрою і сезону.
        </p>
      </section>

      <section className={styles.productsGrid}>
        {products.map(product => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.productImage}
            />
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.productDesc}>{product.description}</p>
            <p className={styles.productPrice}>{product.price}</p>
            <button
              className={styles.buyButton}
              onClick={() => handleAddToCart(product)}
            >
              Купити
            </button>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Products;
