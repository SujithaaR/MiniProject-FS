// models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // teamlead
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // admin
});

module.exports = mongoose.model('Project', projectSchema);
