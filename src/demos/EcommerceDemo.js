import React, { useState } from 'react';
import './DemoStyles.css';

const EcommerceDemo = () => {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [orderComplete, setOrderComplete] = useState(false);

  const products = [
    { 
      id: 1, 
      name: 'Premium Laptop', 
      price: 1299.99, 
      image: '💻', 
      category: 'Electronics',
      stock: 15 
    },
    { 
      id: 2, 
      name: 'Wireless Headphones', 
      price: 199.99, 
      image: '🎧', 
      category: 'Audio',
      stock: 30 
    },
    { 
      id: 3, 
      name: 'Smart Watch', 
      price: 349.99, 
      image: '⌚', 
      category: 'Wearables',
      stock: 25 
    },
    { 
      id: 4, 
      name: 'Gaming Mouse', 
      price: 79.99, 
      image: '🖱️', 
      category: 'Gaming',
      stock: 50 
    },
    { 
      id: 5, 
      name: 'Mechanical Keyboard', 
      price: 149.99, 
      image: '⌨️', 
      category: 'Gaming',
      stock: 40 
    },
    { 
      id: 6, 
      name: '4K Monitor', 
      price: 599.99, 
      image: '🖥️', 
      category: 'Display',
      stock: 20 
    }
  ];

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      ));
    }
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
  };

  const processPayment = () => {
    setTimeout(() => {
      setOrderComplete(true);
      setTimeout(() => {
        setOrderComplete(false);
        setShowCheckout(false);
        setCart([]);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="demo ecommerce-demo">
      <h4>🛍️ E-commerce Platform with Integrated Payment</h4>
      
      {!showCheckout ? (
        <>
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">{product.image}</div>
                <div className="product-info">
                  <h6>{product.name}</h6>
                  <div className="product-category">{product.category}</div>
                  <div className="product-price">${product.price}</div>
                  <div className="product-stock">
                    {product.stock > 0 ? `✓ ${product.stock} in stock` : '✗ Out of stock'}
                  </div>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                    disabled={product.stock === 0}
                  >
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {cart.length > 0 && (
            <div className="cart-summary">
              <div className="cart-header">
                <h5>🛒 Shopping Cart ({cart.length} items)</h5>
                <button className="checkout-btn" onClick={() => setShowCheckout(true)}>
                  Proceed to Checkout →
                </button>
              </div>
              <div className="cart-items">
                {cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <span className="item-icon">{item.image}</span>
                    <span className="item-name">{item.name}</span>
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>✕</button>
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <strong>Total: ${getTotal()}</strong>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="checkout-section">
          {!orderComplete ? (
            <>
              <h5>💳 Checkout</h5>
              
              <div className="order-summary">
                <h6>Order Summary</h6>
                {cart.map(item => (
                  <div key={item.id} className="summary-item">
                    <span>{item.name} × {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="summary-total">
                  <strong>Total:</strong>
                  <strong>${getTotal()}</strong>
                </div>
              </div>

              <div className="payment-methods">
                <h6>Select Payment Method</h6>
                <div className="payment-options">
                  <button
                    className={`payment-option ${paymentMethod === 'card' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('card')}
                  >
                    💳 Credit/Debit Card
                  </button>
                  <button
                    className={`payment-option ${paymentMethod === 'mobile' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('mobile')}
                  >
                    📱 Mobile Money
                  </button>
                </div>
              </div>

              {paymentMethod === 'card' && (
                <div className="payment-form">
                  <div className="form-group">
                    <label>Card Number</label>
                    <input type="text" placeholder="1234 5678 9012 3456" className="input-field" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input type="text" placeholder="MM/YY" className="input-field" />
                    </div>
                    <div className="form-group">
                      <label>CVV</label>
                      <input type="text" placeholder="123" className="input-field" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Cardholder Name</label>
                    <input type="text" placeholder="John Doe" className="input-field" />
                  </div>
                </div>
              )}

              {paymentMethod === 'mobile' && (
                <div className="payment-form">
                  <div className="form-group">
                    <label>Mobile Money Provider</label>
                    <select className="input-field">
                      <option>MTN Mobile Money</option>
                      <option>Orange Money</option>
                      <option>Moov Money</option>
                      <option>Wave</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" placeholder="+225 XX XX XX XX" className="input-field" />
                  </div>
                </div>
              )}

              <div className="checkout-actions">
                <button className="back-btn" onClick={() => setShowCheckout(false)}>
                  ← Back to Cart
                </button>
                <button className="pay-btn" onClick={processPayment}>
                  🔒 Pay ${getTotal()}
                </button>
              </div>
            </>
          ) : (
            <div className="order-success">
              <div className="success-icon">✓</div>
              <h5>Order Successful!</h5>
              <p>Thank you for your purchase</p>
              <div className="order-details">
                <p>Order ID: #ORD-{Date.now().toString().slice(-6)}</p>
                <p>Amount Paid: ${getTotal()}</p>
                <p>Payment Method: {paymentMethod === 'card' ? 'Credit Card' : 'Mobile Money'}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EcommerceDemo;
