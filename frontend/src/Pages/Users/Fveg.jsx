import React, { useState } from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import './styleall.css';
import fveg from '../../Components/Assets/fveg';


function Fveg() {
    // Initialize totalAmount based on initial products
    const [products, setProducts] = useState(fveg);
    const [totalAmount, setTotalAmount] = useState(
        fveg.reduce((sum, product) => sum + product.price * product.quantity, 0)
    );

    const handleQuantityChange = (id, newQuantity) => {
        const updatedProducts = products.map((product) => {
            if (product.id === id) {
                return { ...product, quantity: newQuantity };
            }
            return product;
        });

        setProducts(updatedProducts);
        calculateTotalAmount(updatedProducts);
    };

    const calculateTotalAmount = (updatedProducts) => {
        const total = updatedProducts.reduce(
            (sum, product) => sum + product.quantity * product.price,
            0
        );
        setTotalAmount(total);
    };

    return (
        <div className="home-page">
            <header>
                <h1>Agrios</h1>
                <p>Contact: support@agrios.com</p>
            </header>
            <section className="hero">
                <h2>You got fresh Vegetables.....</h2>
                <p>Recently Added</p>
                <h3>Oldest Products</h3>
            </section>
            <section className="product-list">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onQuantityChange={handleQuantityChange}
                    />
                ))}
            </section>
            <section className="total-amount">
                <h3>{`TOTAL AMOUNT = Rs ${totalAmount.toFixed(2)}`}</h3>
                <button>Make Order</button>
            </section>
            <section className="conditions">
                <h3>CONDITIONS.....</h3>
                <ul>
                    <li>Must purchase more than 10kg and count will be multiples of 5.</li>
                    <li>Choice at your own risk.</li>
                    <li>No good vegetables at all, some will be near to spoil.</li>
                    <li>No credit card payments. Should be paid at the farm.</li>
                </ul>
            </section>
        </div>
    );
}

export default Fveg;
