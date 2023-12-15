const mongoose = require('mongoose');

const BasicUserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    patchNumber: {
        type: Number,
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
    seasonalChallenges22: {
        type: Array,
        required: true,
    },
    seasonalChallenges23: {
        type: Array,
        required: true,
    },
});

const BasicUser = mongoose.model('BasicUser', BasicUserSchema);

module.exports = BasicUser;
