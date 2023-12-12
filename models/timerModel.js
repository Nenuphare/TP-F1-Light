const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let timerSchema = new Schema ({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    time: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Timer', timerSchema);