import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { RootState } from '../store';
import { removeFromCart } from '../store/cartSlice';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    navigate('/checkout'); 
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f0f7', minHeight: '80vh' }}>
      <h2>Кошик</h2>
      {cartItems.length === 0 ? (
        <p>Ваш кошик порожній</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cartItems.map(item => (
              <li key={item.id} style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={item.image} alt={item.name} width={80} style={{ marginRight: '15px', borderRadius: '8px' }} />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: 0 }}>{item.name}</h4>
                    <p style={{ margin: '5px 0' }}>Ціна: {item.price}</p>
                    <p>Кількість: {item.quantity}</p>
                  </div>
                  <button 
                    onClick={() => handleRemove(item.id)} 
                    style={{
                      padding: '8px 12px',
                      backgroundColor: '#ff6b6b',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    Видалити
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={handleCheckout}
            style={{
              marginTop: '20px',
              padding: '12px 20px',
              backgroundColor: '#6c63ff',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Оформити замовлення
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
