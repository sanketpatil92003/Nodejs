// Create / Update Product
router.post('/', (req, res) => {
    const { ProductId, ProductName, CategoryId } = req.body;

    if (ProductId) {
        db.query(
            'UPDATE Product SET ProductName=?, CategoryId=? WHERE ProductId=?',
            [ProductName, CategoryId, ProductId]
        );
    } else {
        db.query(
            'INSERT INTO Product (ProductName, CategoryId) VALUES (?, ?)',
            [ProductName, CategoryId]
        );
    }
    res.sendStatus(200);
});

router.delete('/:id', (req, res) => {
    db.query('DELETE FROM Product WHERE ProductId=?', [req.params.id]);
    res.sendStatus(200);
});

module.exports = router;
