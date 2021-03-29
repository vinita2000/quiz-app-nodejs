const Question = require('../models/question');
const Category = require('../models/category');

exports.createQuestionDB = async (data) => {
    try{
        const question = await Question.create(data);
        return question;
    }catch(e){
        throw new Error(e.message);
    }
};

exports.deleteQuestionDB = async (_id) => {
    try{
        const question = await Question.findByIdAndRemove(_id);
        console.log(question);
        return question;
    }catch(e){
        throw new Error(e);
    }
};

exports.isValidQuestionDB = async (_id) => {
    try{
        const Question = await Question.findById(_id);
        return Question;
    }catch(e){
        throw new Error(e);
    }
};

exports.getQuestionCategoryDB = async (questions) => {
    try{
        let category = [];
        for (const question of questions){
            let ques = await Question.findById({_id: question});
            let quesCat = await Category.findById({_id: ques.categoryID});
            category.push(quesCat);
        }
        jsonObject = category.map(JSON.stringify);
        uniqueSet = new Set(jsonObject);
        uniqueArr = Array.from(uniqueSet).map(JSON.parse);
        category = [];
        for (const cat of uniqueArr){
            category.push(cat._id);
        }
        return category;
    }catch(e){
        throw new Error(e);
    }
};

