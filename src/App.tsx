import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import About from './components/About';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import styles from './components/PostForm.module.css';
import { useSelector } from 'react-redux';



import PostForm from './components/PostForm';
import PostList from './components/PostList';
import axios from 'axios';

const App: React.FC = () => {
  const user = useSelector((state: any) => state.auth.user);


  const updatePost = () => {
    axios.put('https://jsonplaceholder.typicode.com/posts/1', {
      title: 'Оновлений заголовок',
      body: 'Оновлений текст поста',
    })
      .then((response) => console.log('Пост оновлено:', response.data))
      .catch((error) => console.error('Помилка:', error));
  };

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/dashboard"
            element={user ? <div>Кабінет користувача</div> : <Navigate to="/login" />}
          />
          <Route path="*" element={<div>404 - Сторінку не знайдено</div>} />

          {}
          <Route path="/posts" element={
            <div style={{ padding: '1rem' }}>
              <h1>API Демонстрація</h1>
              <PostForm />
              <PostList />
              <button onClick={updatePost} className={styles.button}>
  Оновити пост
</button>
            </div>
          } />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
