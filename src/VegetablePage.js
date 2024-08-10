import React, { useState } from 'react';
import './VegetablePage.css';

const products = [
  { name: 'Onion', price: 80, image: 'onion.png' },
  { name: 'Carrot', price: 90, image: 'carrot.png' },
  { name: 'Tomato', price: 5, image: 'tomoto.jpg' },
  { name: 'Red Grapes', price: 100, image: 'Red Grapes.jpg' },
  { name: 'Garlic', price: 20, image: 'Garlic.jpg' },
  { name: 'Lettuce', price: 30, image: 'lettuce.jpg' },
];

const VegetablePage = () => {
  const initialCounts = {
    Onion: 10,
    Carrot: 10,
    Tomato: 10,
    'Red Grapes': 10,
    Garlic: 10,
    Lettuce: 10,
  };

  const [counts, setCounts] = useState(initialCounts);

  const increment = (name) => {
    setCounts((prevCounts) => ({ ...prevCounts, [name]: prevCounts[name] + 1 }));
  };

  const decrement = (name) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [name]: prevCounts[name] > 0 ? prevCounts[name] - 1 : 0,
    }));
  };

  const totalAmount = Object.keys(counts).reduce(
    (total, name) => total + counts[name] * products.find((product) => product.name === name).price,
    0
  );

  return (
    <div className="VegetablePage">
      <main>
        <div className="hero-section">
          <img src="./head.png" alt="You got vegetables" className="hero-image" />
          <h1 className="hero-text1">You got vegetables.....</h1>
          <h2 className='hero-text2'>Oldest Products</h2>
        </div>
        
        <div className="product-list">
          {products.map((product) => (
            <div key={product.name} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p className='pr'>Rs. {product.price}</p>
              <div className="product-count">
                <span>count</span>
                <div className='cbox'>
                <button onClick={() => decrement(product.name)}>-</button>
                <span>{counts[product.name]}</span>
                <button onClick={() => increment(product.name)}>+</button>
                </div>
              </div>
              <p className='tt'>Total = Rs. {counts[product.name] * product.price}</p>
            </div>
          ))}
        </div>
        <div className="total-amount">
          <h3>TOTAL AMOUNT = Rs. {totalAmount}</h3>
          <button className="make-order">Make Order</button>
        </div>
        <div className="conditions">
          <h3>CONDITIONS.....</h3>
          <ul>
            <li>Must purchase more than 10kg and count will be multiples of 5.</li>
            <li>Choice at your own risk.</li>
            <li>No good vegetables at all, some will be near to spoil.</li>
            <li>No credit card payments. Should be paid at the farm.</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default VegetablePage;
