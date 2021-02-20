const cors = require('cors');
const express = require('express');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT);