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
  }
});

// const quizSchema = new mongoose.Schema({
//   type: [{
//     questionID:{
//         type: String,
//         required: [true, 'Question ID required']
//     },
//     categoryID: {
//       type: String,
//       required: [true, 'Quiz Category required']
//     },
//     userID: {
//       type: String,
//       required: [true, 'User ID required']
//     }
//   }],
//   validate: [(val) => val.length > 1, 'Minimum two question in a quiz'],
//   validate: [(val) => val.length < 16, 'Maximum fifteen questions in a quiz']
// });

const Quiz = mongoose.model('quiz', quizSchema);
module.exports = Quiz;