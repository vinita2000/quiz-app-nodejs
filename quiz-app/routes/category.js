const express = require('express');
const router = express.Router();
const {
    createCategory,
    listCategories,
    deleteCategory,
    listCategoryQuestions,
    updateCategory
} = require('../controllers/category');

router.post('/api/category/create-category', createCategory);
router.get('/api/category/list-categories', listCategories);
router.delete('/api/category/delete-category', deleteCategory);
router.get('/api/category/list-category-questions', listCategoryQuestions);
router.put('/api/category/update-category', updateCategory)

module.exports = router;
