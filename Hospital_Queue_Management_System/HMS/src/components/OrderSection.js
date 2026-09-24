
import React, { useState, useEffect } from 'react';

const OrderSection = () => {
    const [orders, setOrders] = useState([]);
    const [form, setForm] = useState({ customerName: '', amount: '', category: 'Retail', status: 'Pending' });

    const fetchOrders = () => {
        fetch('http://localhost:8081/api/orders').then(res => res.json()).then(setOrders);
    };

    useEffect(() => { fetchOrders(); }, []);
    // This tells the frontend: "Take this form data and save it in MySQL"
const saveOrder = async (orderData) => {
    await fetch('http://localhost:8081/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
    });
};
    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:8081/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...form, orderDate: new Date() })
        });
        setForm({ customerName: '', amount: '', category: 'Retail', status: 'Pending' });
        fetchOrders();
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Customer Order Management</h2>
            <form onSubmit={handleSubmit} style={{ marginBottom: '30px', display: 'flex', gap: '10px' }}>
                <input value={form.customerName} placeholder="Customer Name" onChange={e => setForm({...form, customerName: e.target.value})} required />
                <input type="number" value={form.amount} placeholder="Amount" onChange={e => setForm({...form, amount: e.target.value})} required />
                <select value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
                    <option value="Retail">Retail</option>
                    <option value="Online">Online</option>
                </select>
                <button type="submit">Add Order</button>
            </form>

            <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ background: '#eee' }}>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(o => (
                        <tr key={o.id}>
                            <td>{o.id}</td>
                            <td>{o.customerName}</td>
                            <td>${o.amount}</td>
                            <td>{o.category}</td>
                            <td>{new Date(o.orderDate).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderSection;