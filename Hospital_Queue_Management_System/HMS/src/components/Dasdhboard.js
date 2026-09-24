
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [widgets, setWidgets] = useState([]);
    const [orders, setOrders] = useState([]);
    const [selectedWidget, setSelectedWidget] = useState(null);

   // This tells the frontend: "Go to the backend and bring me the widgets"
useEffect(() => {
    fetch('http://localhost:8081/api/widgets') 
        .then(res => res.json())
        .then(data => setWidgets(data)); // This puts the DB data into your UI
}, []);

    const saveToDb = async (widget) => {
        await fetch('http://localhost:8081/api/widgets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(widget)
        });
    };

    const updateSize = (id, newWidth) => {
        const updated = widgets.map(w => w.id === id ? { ...w, w: newWidth } : w);
        setWidgets(updated);
        saveToDb(updated.find(w => w.id === id));
    };

    return (
        <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif' }}>
            {/* Sidebar for Adding Widgets */}
            <div style={{ width: '200px', borderRight: '1px solid #ddd', padding: '15px' }}>
                <h4>Add Widgets</h4>
                <button onClick={() => saveToDb({title: 'Total Sales', type: 'KPI', w: 4, h: 2, x:0, y:0})}>+ KPI Card</button>
                <button style={{marginTop:'10px'}} onClick={() => saveToDb({title: 'Order Trends', type: 'CHART', w: 8, h: 4, x:0, y:0})}>+ Bar Chart</button>
            </div>

            {/* Main Canvas - 12 Column Grid */}
            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridAutoRows: '100px', gap: '10px', padding: '20px', background: '#f9f9f9' }}>
                {widgets.map(w => (
                    <div key={w.id} style={{ 
                        gridColumn: `span ${w.w}`, 
                        gridRow: `span ${w.h}`, 
                        background: 'white', 
                        border: '1px solid #ccc',
                        padding: '10px',
                        boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
                    }}>
                        <header style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <strong>{w.title}</strong>
                            <select value={w.w} onChange={(e) => updateSize(w.id, parseInt(e.target.value))}>
                                <option value="4">Small (4)</option>
                                <option value="8">Medium (8)</option>
                                <option value="12">Full (12)</option>
                            </select>
                        </header>
                        <div style={{ marginTop: '20px', textAlign: 'center' }}>
                            {w.type === 'KPI' ? (
                                <h2>{orders.length}</h2>
                            ) : (
                                <div style={{height: '50px', background: '#eee'}}>Chart Placeholder</div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;