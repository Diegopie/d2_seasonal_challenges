const ServerData = require('../../models/ServerData');

const wishUpgrades = require( "./wishUpgrades");
const week01 = require("./week01");
const week02 = require("./week02");
const week03 = require("./week03");
const week04 = require("./week04");
const week05 = require("./week05");
const week06 = require("./week06");
const week07 = require("./week07");
const week08 = require("./week08");
const week09 = require("./week09");
const week10 = require("./week10");


const getActiveWeek = async () => {
    // * Store All Challenges In Array
    let seasonalChallenges = [
        wishUpgrades,
        week01,
        week02,
        week03,
        week04,
        week05,
        week06,
        week07,
        week08,
        week09,
        week10
    ];

    // * Get Active Week Data
    try {
        return await ServerData.find({})
            .then(data => {
                // ** Return Sliced Array Based On Active Week
                // Note: The + 1 accounts for wish upgrades
                return seasonalChallenges.slice(0, data[0].activeWeeks + 1)
            })
    } catch (err) {
        console.log(err);
    }
}

// * Export to patch.js and basicUser.route.js 
module.exports = getActiveWeek;
