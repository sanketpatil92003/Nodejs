// routes/product.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    const pageSize = parseInt(req.query.pageSize) || 10;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * pageSize;

    const dataQuery = `
        SELECT 
            p.ProductId,
            p.ProductName,
            c.CategoryId,
            c.CategoryName
        FROM Product p
        JOIN Category c ON p.CategoryId = c.CategoryId
        ORDER BY p.ProductId
        LIMIT ? OFFSET ?
    `;

    const countQuery = `SELECT COUNT(*) AS total FROM Product`;

    db.query(countQuery, (err, countResult) => {
        const totalRecords = countResult[0].total;

        db.query(dataQuery, [pageSize, offset], (err, data) => {
            res.json({
                data,
                totalRecords,
                page,
                pageSize
            });
        });
    });
});
