
const mongoose = require('mongoose');
const validator = require('validator');

const questionSchema = new mongoose.Schema({
    question: {
      type: String,
      required: [true, 'Question Required'],
      trim: true,
      unique: [true, 'Duplicate Question']
    },
    options: {
        type: [{
            optionNo: {
                type: Number,
                enum: [1, 2, 3, 4]
            },
            optionValue:{
                type: String,
                required: [true,'Option required'],
                trim: true
            }
        }],
        validate(val){
            if(val.length < 2){
                throw new Error('Minimum 2 options');
            }
            if (val.length > 4){
                throw new Error('Maximum 4 options');
            }
        }
    },
    correctAns: {
        type: Number,
        enum: [1, 2, 3, 4],
        required: [true, 'Please provide correct answer number']
    },
    categoryID: {
        type: String,
        required: [true, 'Question Category required']
    },
    userID: {
        type: String,
        required: [true, 'User ID required']
    }
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;