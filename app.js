const express = require('express')
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./connection/db');
require('dotenv').config();

app.use(express.json())

app.use('/api/v1/tasks',tasks);

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