const express = require('express')
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./connection/db');
const notFound = require('./middleware/not-fount');
const errorHandler = require('./middleware/error-handler');
require('dotenv').config();

app.use(express.json())

app.use('/api/v1/tasks',tasks);

app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 3000;

const config = async() =>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

config();