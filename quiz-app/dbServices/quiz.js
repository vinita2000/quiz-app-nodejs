const Quiz = require('../models/quiz');

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

