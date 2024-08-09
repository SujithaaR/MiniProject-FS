// routes/teamlead.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Project = require('../models/Project');

// Get projects assigned to the logged-in teamlead
router.get('/projects', auth(['teamlead']), async (req, res) => {
    try {
        const projects = await Project.find({ owner: req.user._id });
        res.status(200).json(projects);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
