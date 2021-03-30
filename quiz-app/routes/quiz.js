const express = require('express');
const router = express.Router();
const {
    createQuiz, 
    deleteQuiz, 
    listQuizzes, 
    getQuizById
} = require('../controllers/quiz');

router.post('/api/quiz/create-quiz/:userID', createQuiz);
router.delete('/api/quiz/delete-quiz', deleteQuiz);
router.get('/api/quiz/list-quizzes', listQuizzes);
router.get('/api/quiz/get-quiz/:quizID', getQuizById);

module.exports = router;
