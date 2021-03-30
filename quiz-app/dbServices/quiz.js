const Quiz = require('../models/quiz');
const Response = require('../models/response');

exports.createQuizDB = async (data) => {
    try{
        const quiz = await Quiz.create(data);
        return quiz;
    }catch(e){
        throw new Error(e);
    }
};

exports.deleteQuizDB = async (_id) => {
    try{
        const quiz = await Quiz.findByIdAndDelete(_id);
        return quiz;
    }catch(e){
        throw new Error(e);
    }
};

exports.listQuizzesDB = async () => {
    try{
        const quizzes = await Quiz.find({});
        return quizzes;
    }catch(e){
        throw new Error(e);
    }
};

exports.getQuizByIdDB = async (_id) => {
    try{
        const quiz = await Quiz.find({_id});
        return quiz;
    }catch(e){
        throw new Error(e);
    }
};