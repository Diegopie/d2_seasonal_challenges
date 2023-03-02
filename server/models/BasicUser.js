const mongoose = require('mongoose');

const BasicUserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    seasonalChallenges: {
        type: Array,
        required: true,
    },
});

const BasicUser = mongoose.model('BasicUser', BasicUserSchema);

module.exports = BasicUser;
