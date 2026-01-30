// routes/category.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all categories
router.get('/', (req, res) => {
    db.query('SELECT * FROM Category', (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Create / Update category
router.post('/', (req, res) => {
    const { CategoryId, CategoryName } = req.body;

    if (CategoryId) {
        db.query(
            'UPDATE Category SET CategoryName=? WHERE CategoryId=?',
            [CategoryName, CategoryId]
        );
    } else {
        db.query(
            'INSERT INTO Category (CategoryName) VALUES (?)',
            [CategoryName]
        );
    }
    res.sendStatus(200);
});

// Delete category
router.delete('/:id', (req, res) => {
    db.query(
        'DELETE FROM Category WHERE CategoryId=?',
        [req.params.id]
    );
    res.sendStatus(200);
});

module.exports = router;
