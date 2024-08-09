// Update task status
router.patch('/tasks/:taskId', auth(['user']), async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.taskId, assignedTo: req.user._id });

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.status = req.body.status;
        await task.save();
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
