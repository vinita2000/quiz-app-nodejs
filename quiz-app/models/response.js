const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: [true, 'User ID required']
  },
  quizID: {
    type: String,
    required: [true, 'Quiz ID required']
  },
  categories: {
    type: [String],
    required: [true, 'Categories required']
  },
  response: {
    type: [{
        questionID: {
            type: [String],
            required: [true, 'Question ID required']
        },
        userResponse: {
            type: Number,
            required: [true, 'User Response required']
        },
        status: {
            type: String,
            enum: ['correct', 'wrong'],
            required: [true, 'Response status required']
        }
    }]
  },
  attemptedAt: {
      type: Date,
      default: Date.now()
  }
});

const Response = mongoose.model('response', responseSchema);
module.exports = Response;