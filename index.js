const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection string
const mongoURI = 'mongodb+srv://vincentmunywoki12:<db_password>@cluster0.2xglm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // my connection string

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error: ', err));

// Use auth routes
app.use('/api/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
