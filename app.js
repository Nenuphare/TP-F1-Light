const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/apif1light');

app.use(express.urlencoded());
app.use(express.json());

//user route
const userRoute = require('.routes/userRoutes.js');
app.use('/user', userRoute);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});