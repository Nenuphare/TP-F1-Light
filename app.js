const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/apif1light');

app.use(express.urlencoded());
app.use(express.json());

//user route
const userRoute = require('./routes/userRoutes.js');
app.use('/user', userRoute);

//timer route
const timerRoute = require('./routes/timerRoute');
app.use('/timer', timerRoute);
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});