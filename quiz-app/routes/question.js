const express = require('express');
const router = express.Router();
const {createQuestion, deleteQuestion} = require('../controllers/question');

router.post('/api/question/create-question/:userID', createQuestion);
router.delete('/api/question/delete-question/:quesID', deleteQuestion);

module.exports = router;
