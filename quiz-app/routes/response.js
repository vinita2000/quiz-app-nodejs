const express = require('express');
const router = express.Router();
const {
    attemptQuiz, 
    attemptedQuiz, 
    unattemptedQuiz, 
    quizResponse
} = require('../controllers/response');

router.post('/api/response/attempt-quiz/:userID', attemptQuiz);
router.get('/api/response/attempted-quiz/:userID', attemptedQuiz);
router.get('/api/response/unattempted-quiz/:userID', unattemptedQuiz);
router.get('/api/response/quiz-response/:quizID', quizResponse);

module.exports = router;
