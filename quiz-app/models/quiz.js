const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: [true, 'User ID required']
  },
  questions: {
    type: [String],
    required: [true, 'Quiz questions required'],
    validate: [(val) => val.length > 1, 'Minimum two question in a quiz'],
    validate: [(val) => val.length < 16, 'Maximum fifteen questions in a quiz']
  },
  categories: {
    type: [String],
    required: [true, 'Quiz category required']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Quiz = mongoose.model('quiz', quizSchema);
module.exports = Quiz;