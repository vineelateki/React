const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const accidentRoutes = require('./routes/accidentRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());  // Enable JSON support
app.use(cors());          // Enable CORS

// API Routes
app.use('/api', accidentRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
