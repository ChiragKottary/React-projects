const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());
app.use(cors());

const MainRouter = require('./router/index')

app.use('/api/v1',MainRouter);

app.listen(3000);

