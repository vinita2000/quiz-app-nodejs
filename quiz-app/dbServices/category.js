const Category = require('../models/category');
const Question = require('../models/question');
const Quiz = require('../models/quiz');

exports.createCategoryDB = async (data) => {
    try{
        const category = await Category.create(data);
        return category;
    }catch(e){
        throw new Error(e);
    }
};

exports.isValidCategory = async (_id) => {
    try{
        const category = await Category.findById(_id);
        return category;
    }catch(e){
        throw new Error(e);
    }
};

exports.listCategoryDB = async () => {
    try{
        const categories = await Category.find({});
        return categories;
    }catch(e){
        throw new Error(e);
    }
};

exports.deleteCategoryDB = async (_id) => {
    try{
        const category = await Category.findByIdAndDelete(_id);
        return category;
    }catch(e){
        throw new Error(e);
    }
};

exports.deleteCategoryQuestionsDB = async (categoryID) => {
    try{
        const categoryQues = await Question.deleteMany({categoryID:categoryID}, {new:true});
        return categoryQues;
    }catch(e){
        throw new Error(e);
    }
};

exports.listCategoryQuestionsDB = async (categoryID) => {
    try{
        const categoryQues = await Question.find({categoryID});
        return categoryQues;
    }catch(e){
        throw new Error(e);
    }
};

exports.updateCategoryDB = async (data) => {
    try{
        const category = await Category.findByIdAndUpdate(
            {_id:data.categoryID}, 
            {name:data.newName}, 
            {new:true}
            );
        return category;
    }catch(e){
        throw new Error(e);
    }
};

exports.listCategoryQuizzesDB = async (_id) => {
    try{
        const quizzes = await Quiz.find({categories: {"$in": [_id]}});
        return quizzes;
    }catch(e){
        throw new Error(e);
    }
};