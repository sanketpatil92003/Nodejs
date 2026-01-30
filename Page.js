app.set('view engine', 'ejs');

app.get('/products', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = 10;
    const offset = (page - 1) * pageSize;

    const query = `
        SELECT p.ProductId, p.ProductName,
               c.CategoryId, c.CategoryName
        FROM Product p
        JOIN Category c ON p.CategoryId = c.CategoryId
        ORDER BY p.ProductId
        LIMIT ? OFFSET ?
    `;

    db.query(query, [pageSize, offset], (err, products) => {
        res.render('products', { products, page });
    });
});
