// routes/admin.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Project = require('../models/Project');

// Create a new project
router.post('/projects', auth(['admin']), async (req, res) => {
    try {
        const project = new Project({
            name: req.body.name,
            description: req.body.description,
            owner: req.body.owner, // teamlead ID
            createdBy: req.user._id
        });

        await project.save();
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
