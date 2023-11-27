const express = require("express")
const app = express()
const port= 3000
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const jobRouter = require('./routes/job')
const bodyParser = require('body-parser');
dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(()=> console.log('Connect to doulajob V1')).catch((err)=> console.log('err'));

// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/jobs', jobRouter);

app.get('/', (req,res)=> res.send("hello world"))
app.listen(process.env.PORT || port,()=> console.log(`Example app listening on port ${process.env.PORT}!`))

//doulajobV1
//WltVu8i1hkFWcPHP   