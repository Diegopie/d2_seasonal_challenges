const mongoose = require('mongoose');

const BasicUserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    seasonalChallenges20: {
        type: Array,
        required: true,
    },
    seasonalChallenges21: {
        type: Array,
        required: true,
    },
});

const BasicUser = mongoose.model('BasicUser', BasicUserSchema);

module.exports = BasicUser;
