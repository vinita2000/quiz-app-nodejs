const {createQuestionDB, deleteQuestionDB} = require('../dbServices/question');
const {isValidCategory} = require('../dbServices/category');
const {isValidUser} = require('../dbServices/user');

exports.createQuestion = async (req, res) => {
    try{    
        req.body.userID = req.params.userID;
        const isValidCat = await isValidCategory(req.body.categoryID);
        const isValidUsr = await isValidUser(req.params.userID);

        if ( !isValidCat || !isValidUsr){
            throw new Error('Invalid Category or User');
        }
        const question = await createQuestionDB(req.body);
        if (!question){
            throw new Error('Failed to add question');
        }
        res.status(201).json({
            message: 'Question added !'
        });
    }catch(e){
        res.status(501).json({
            message: e.message
        });
    }
};

exports.deleteQuestion = async (req, res) => {
    try{
        const question = await deleteQuestionDB(req.params.quesID);
        if (!question){
            throw new Error('No such question');
        }
        res.status(200).json({
            message: ' Question Deleted'
        });
    }catch(e){
        res.status(501).json({
            message: e.message
        });
    }
};
