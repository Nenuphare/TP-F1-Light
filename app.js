const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/apif1light');

app.use(express.urlencoded());
app.use(express.json());

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});