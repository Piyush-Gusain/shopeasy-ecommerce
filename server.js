 const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: "Wireless Headphones", price: 1299, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Smart Watch", price: 2499, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Bluetooth Speaker", price: 899, image: "https://via.placeholder.com/200" },
  { id: 4, name: "Phone Case", price: 199, image: "https://via.placeholder.com/200" },
  { id: 5, name: "USB Cable", price: 149, image: "https://via.placeholder.com/200" },
  { id: 6, name: "Power Bank", price: 999, image: "https://via.placeholder.com/200" }
];

let orders = [];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/orders', (req, res) => {
  const order = {
    id: Date.now(),
    items: req.body.items,
    total: req.body.total,
    name: req.body.name,
    address: req.body.address,
    status: 'Pending',
    date: new Date().toLocaleDateString()
  };
  orders.push(order);
  res.json({ success: true, orderId: order.id });
});

app.get('/api/orders', (req, res) => {
  res.json(orders);
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
