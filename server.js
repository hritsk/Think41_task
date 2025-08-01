const express = require('express');
const app = express();
const connectDB = require('./config/db');
const productRoutes = require('./routes/product');

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use('/api/products', productRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
