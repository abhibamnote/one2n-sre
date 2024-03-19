const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json({limit: '16kb'}))
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

const indexRouter = require('./routes/index.routes');

app.use('/api/v1/students', indexRouter);



const healthCheck = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Service up"
    })
}

app.get('/api/v1/healthcheck', healthCheck);



module.exports = app;