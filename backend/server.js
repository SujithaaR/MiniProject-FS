// app.js or server.js
const express = require('express');
const mongoose = require('mongoose');
const adminRoutes = require('./routes/admin');
const teamleadRoutes = require('./routes/teamlead');
const userRoutes = require('./routes/user');
const authRoutes=require('./routes/authRoutes');
const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/teamlead', teamleadRoutes);
app.use('/user', userRoutes);

mongoose.connect('mongodb+srv://rsujithaa:12345@cluster0.e06kl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Connection error:', error);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


