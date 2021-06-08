const express = require('express');
const router = express.Router();
const { updateLeadTaskDelete } = require('../model/leads/LeadTask.model');

router.patch('/:fruitName/:fruitColor', async (req, res) => {
	try {
		const name = req.params.fruitName;
		const color = req.params.fruitColor;
		const result = await updateLeadTaskDelete(name, color);

		if (result._id) {
			return res.json({
				status: 'success',
				message: 'your leadtask message deleted',
			});
		}
		res.json({
			status: 'error',
			message: 'Unable to update your message please try again later',
		});
	} catch (error) {
		res.json({ status: 'error', message: error.message });
	}
});

module.exports = router;
