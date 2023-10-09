const mongoose = require('mongoose');

const ServerDataSchema = new mongoose.Schema({
    activeWeeks: {
        type: Number,
        required: false,
        default: 0
    },
});

const ServerData = mongoose.model('ServerData', ServerDataSchema);

module.exports = ServerData;
