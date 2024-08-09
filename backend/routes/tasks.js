const Task = require('../models/Task');

// Create a task within a project
router.post('/projects/:projectId/tasks', auth(['teamlead']), async (req, res) => {
    try {
        const task = new Task({
            title: req.body.title,
            description: req.body.description,
            projectId: req.params.projectId,
            assignedTo: req.body.assignedTo, // user ID
            deadline: req.body.deadline
        });

        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
