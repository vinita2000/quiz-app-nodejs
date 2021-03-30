const {
    createCategoryDB, 
    listCategoryDB, 
    isValidCategory,
    deleteCategoryDB,
    deleteCategoryQuestionsDB,
    listCategoryQuestionsDB,
    updateCategoryDB,
    listCategoryQuizzesDB
} = require('../dbServices/category');

exports.createCategory = async(req, res) => {
    try{
        const category = await createCategoryDB(req.body);
        res.status(201).json({
            message: 'Category Created',
            data: category
        });
    }catch(e){
        res.status(400).json({
            message: e.message
        });
    }
};

exports.listCategories = async (req, res) => {
    try{
        const categories = await listCategoryDB();
        res.status(201).json({
            message: 'Categories',
            data: categories
        });
    }catch(e){
        res.status(501).json({
            message: e.message
        });
    }
};

exports.deleteCategory = async (req, res) => {
    try{
        const categoryID = req.body.categoryID;
        const category = await deleteCategoryDB(categoryID);
        if (!category){
            throw new Error('No such category');
        }
        await deleteCategoryQuestionsDB(categoryID);
        res.status(201).json({
            message: 'Category Deleted'
        });
    }catch(e){
        res.status(501).json({
            message: e.message
        });
    }
};

exports.listCategoryQuestions = async (req, res) => {
    try{
        const categoryID = req.params.categoryID;
        const isValidCat = await isValidCategory(categoryID);
        if (! isValidCat){
            throw new Error('Invalid Category');
        }
        const categoryQues = await listCategoryQuestionsDB(categoryID);
        res.status(201).json({
            message: 'Category Questions',
            count: categoryQues.length,
            data: categoryQues
        });
    }catch(e){
        res.status(501).json({
            message: e.message
        });
    }
};

exports.updateCategory = async (req, res) => {
    try{
        const isValidCat = await isValidCategory(req.body.categoryID);
        if (! isValidCat){
            throw new Error('Invalid Category');
        }
        const category = await updateCategoryDB(req.body);
        res.status(201).json({
            message: 'Category Updated',
            data: category
        });
    }catch(e){
        res.status(501).json({
            message: e.message
        });
    }
};

exports.listCategoryQuizzes = async (req, res) => {
    try{
        const categoryID = req.params.categoryID;
        const quizzes = await listCategoryQuizzesDB(categoryID);
        res.status(200).json({
            message: 'Quizzes',
            count: quizzes.length,
            data: quizzes
        });
    }catch(e){
        res.status(500).json({
            message: e.message
        });
    }
};