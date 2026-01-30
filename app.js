// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
