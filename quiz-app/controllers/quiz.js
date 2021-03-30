const {getQuestionCategoryDB, isValidQuestionDB} = require('../dbServices/question');
const {
    createQuizDB,
    deleteQuizDB, 
    listQuizzesDB, 
    getQuizByIdDB
} = require('../dbServices/quiz');
// const {isValidCategory} = require('../dbServices/category');


// helper functions
const filterQuestionArr = (questions) => {
    let temp = [];
    try{
        for (let question of questions){
            // let isValid = await isValidQuestionDB(question);
            if (! temp.includes(question)){
                temp.push(question);
            }
        }
        return temp;
    }catch(e){
        throw new Error(e);
    }
};

exports.createQuiz = async (req, res) => {
    try{
        req.body.userID = req.params.userID;
        const filteredQues = filterQuestionArr(req.body.questions);
        if (! filteredQues || filteredQues.length<2 || filteredQues.length >15){
            throw new Error('Invalid Questions');
        }
        const quizCategory = await getQuestionCategoryDB(filteredQues);
        if (! quizCategory){
            throw new Error('Invalid quiz');
        }
        req.body.questions = filteredQues;
        req.body.categories = quizCategory;
        const quiz = await createQuizDB(req.body);
        res.status(201).json({
            message: 'Quiz created',
            data: quiz
        });
    }catch(e){
        res.status(500).json({
            message: 'Failed to create Quiz'
        });
    }
};

exports.deleteQuiz = async (req, res) => {
    try{
        const _id = req.body.quizID;
        const quiz = await deleteQuizDB(_id);
        if (!quiz){
            throw new Error('Invalid Quiz ID');
        }
        res.status(201).json({
            message: 'Quiz deleted'
        });
    }catch(e){
        res.status(500).json({
            message: 'Failed to delete Quiz'
        });
    }
};

exports.listQuizzes = async (req, res) => {
    try{
        const quizzes = await listQuizzesDB();
        if(! quizzes || quizzes.length === 0){
            throw new Error('No quizzes found');
        }
        res.status(200).json({
            message: "Quiz List",
            count: quizzes.length,
            data: quizzes
        });
    }catch(e){
        res.status(500).json({
            message: e.message
        });
    }
};

exports.getQuizById = async (req, res) => {
    try{
        const quizID = req.params.quizID;
        const quiz = await getQuizByIdDB(quizID);
        if (!quiz){
            throw new Error('Failed to get Quiz');
        }
        res.status(200).json({
            message: "Quiz data",
            count: quiz.length,
            data: quiz
        });
    }catch(e){
        res.status(500).json({
            message: e.message
        });
    }
};