const Response = require('../models/response');
const Quiz = require('../models/quiz');
const Question = require('../models/question');

exports.attemptQuizDB = async (data) => {
    try{
        const quiz = await Quiz.findById({_id:data.quizID});
        if(!quiz){
            throw new Error('Invalid Quiz ID');
        }
        data.categories = quiz.categories;
        let responses = data.response;
        for (const response of responses){
            const question = await Question.findById({_id: response.questionID});
            if(!question){
                throw new Error('Invalid Question');
            }
            if (response.userResponse == question.correctAns){
                response.status = 'correct';
            }else{
                response.status = 'wrong';
            }
        }
        const attempted = await Response.create(data);
        return attempted;
    }catch(e){
        throw new Error(e);
    }
};


exports.attemptedQuizDB = async (userID) => {
    try{
        let temp = [];
        const attempted = await Response.find({userID});
        for (const attempt of attempted){
            temp.push(attempt._id);
        }
        return temp; 
    }catch(e){
        throw new Error(e);
    }
};

exports.unattemptedQuizDB = async (userID) => {
    try{
        const quizzes = await Quiz.find({});
        const filtered = [];
        for (const quiz of quizzes){
            const inResponse = await Response.find({userID:userID, quizID: quiz._id});
            if (inResponse.length === 0){
                filtered.push(quiz._id);
            }
        }
        return filtered;
    }catch(e){
        throw new Error(e);
    }
};

exports.quizResponseDB = async (quizID) => {
    try{
        // const responses = await Response.find({quizID}).countDocuments();
        const response = await Response.aggregate([
            {
                $match: {quizID}
            },
            {
                $count: "count"
            }
        ]);
        return response[0];
    }catch(e){
        throw new Error(e);
    }
};
