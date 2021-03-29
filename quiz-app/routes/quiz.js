const express = require('express');
const router = express.Router();
const {createQuiz, deleteQuiz} = require('../controllers/quiz');

router.post('/api/quiz/create-quiz/:userID', createQuiz);
router.delete('/api/quiz/delete-quiz', deleteQuiz);

module.exports = router;
