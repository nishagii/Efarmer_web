import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Orders.css';

const ordersData = [
    {
        id: 1,
        item: "Tomatoes",
        customerName: "John Doe",
        amount: "10 kg",
        price: "$50",
        dateNeeded: "2024-08-15",
        contact: "john@example.com",
    },
    {
        id: 2,
        item: "Potatoes",
        customerName: "Jane Smith",
        amount: "5 kg",
        price: "$25",
        dateNeeded: "2024-08-16",
        contact: "jane@example.com",
    },
    {
        id: 3,
        item: "Carrots",
        customerName: "Michael Johnson",
        amount: "20 kg",
        price: "$100",
        dateNeeded: "2024-08-17",
        contact: "michael@example.com",
    },
    // Add more orders here
];

const Orders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch orders from the server
        axios.get('/api/orders')
            .then(response => {
                setOrders(response.data);
            })
            .catch(error => {
                console.error('Error fetching orders:', error);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`/api/orders/${id}`)
            .then(() => {
                setOrders(orders.filter(order => order.id !== id));
            })
            .catch(error => {
                console.error('Error deleting order:', error);
            });
    };


    return (
        <div className="orders-page">
            <h1>Customer Orders</h1>
            <div className="orders-list">
                {ordersData.map(order => (
                    <div key={order.id} className="order-card">
                        <h3>{order.customerName}</h3>
                        <h4>{order.item}</h4>
                        <p><strong>Amount:</strong> {order.amount}</p>
                        <p><strong>Price:</strong> {order.price}</p>
                        <p><strong>Date Needed:</strong> {order.dateNeeded}</p>
                        <p><strong>Contact:</strong> {order.contact}</p>
                        <button className='delete-button' onClick={() => handleDelete(order.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Orders;
