const {
    attemptQuizDB, 
    attemptedQuizDB, 
    unattemptedQuizDB,
    quizResponseDB
} = require('../dbServices/response');

exports.attemptQuiz = async (req, res) => {
    try{
        req.body.userID = req.params.userID;
        const attempted = await attemptQuizDB(req.body);
        if(!attempted){
            throw new Error('Invalid Response');
        }
        res.status(201).json({
            message: 'Response Recorded'
        });
    }catch(e){
        res.status(400).json({
            message: e.message
        });
    }
}; 

exports.attemptedQuiz = async (req, res) => {
    try{
        const attempted = await attemptedQuizDB(req.params.userID);
        res.status(200).json({
            message: "Attempted Quiz List",
            count: attempted.length,
            data: attempted
        });
    }catch(e){
        res.status(500).json({
            message: e.message
        });
    }
};

exports.unattemptedQuiz = async (req, res) => {
    try{
        const unattempted = await unattemptedQuizDB(req.params.userID);
        res.status(200).json({
            message: "Unattempted Quiz List",
            count: unattempted.length,
            data: unattempted
        });
    }catch(e){
        res.status(500).json({
            message: e.message
        });
    }
};

exports.quizResponse = async (req, res) => {
    try{
        const response = await quizResponseDB(req.params.quizID);
        res.status(200).json({
            message: "Quiz Response Count",
            data: response
        });
    }catch(e){
        res.status(500).json({
            message: e.message
        });
    }
};