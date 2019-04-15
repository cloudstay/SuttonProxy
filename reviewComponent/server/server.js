const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const morgan = require('morgan');
const router = require('./routes');

const port = process.env.PORT || 3004;

const app = express();

app.use(morgan('combined'));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}))

app.use('/rooms/:id', express.static(path.join(__dirname, '../public')));

app.use('/api/', router);

app.listen(port, function() {
    console.log(`Listening on port: ${port}`);
})