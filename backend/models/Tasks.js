// models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // user
    status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
    deadline: { type: Date, required: true }
});

module.exports = mongoose.model('Task', taskSchema);
