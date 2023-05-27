const basicUserRouter = require('express').Router();
const seedSeasonalChallenges21 = require('../seeds/seasonalChallenges')
const { patchNumber, patchedSeasonalChallenges } = require('../seeds/patch')

const { BasicUser } = require('../models');

// * Print Errors and Create Response Object 
// arg 1 is the data to send to the client; arg 2 is the rought the route the req is made
// arg 3 is the err from the promise or null of not applicalple
// arg 4 is true if the request is successfull
const handleResponse = (data, note, route, err, success) => {
    if (route && err) console.log({ route }, err);
    return {
        message: {
            success: success,
            note: note,
            data: data,
            error: err
        }
    };
};

// * Create User

basicUserRouter.post('/newUpdated', async ({ body }, res) => {
    const { username } = body;

    // * Check Excisting USer
    // console.log('---server data--');
    // console.log(seedSeasonalChallenges21);
    const checkExisting = await BasicUser.findOne(
        { username: username }
    ).then(data => {
        if (!data) {
            return false;
        }
        return data;
    }).catch(err => {
        res.status(500).json(
            handleResponse(null, 'Error Checking For Duplicate Username', '/api/basic-user/newUpdated', err, false)
        );
    })

    // // ** If User is Found, check for new server data and send res to client
    if (checkExisting) {
        res.status(201).json(
            handleResponse(checkExisting, 'Found user!', '/api/basic-user/newUpdated', null, true)
        );
        return;
    }

    // * Create New User
    const newUser = new BasicUser({
        username,
        patchNumber,
        seasonalChallenges21: seedSeasonalChallenges21
    });
    newUser.save(err => {
        if (err) {
            res.status(500).json(
                handleResponse(null, 'Error saving new user to the database', '/api/basic-user/newUpdated', err, false)
            );
            return;
        }

        res.status(201).json(
            handleResponse(newUser, 'Successfully saved new user!', '/api/basic-user/newUpdated', null, true)
        );
    })
});

// * Serve challenge data on login/load
basicUserRouter.post('/data', ({ body }, res) => {
    const { username } = body;

    try {
        BasicUser.findOne(
            { username: username }
        ).then(data => {

            if (!data) {
                res.status(500).json(
                    handleResponse(null, 'Error quering db for user', '/api/basic-user/data', null, false)
                );
                return;
            }
            let currentData = data.seasonalChallenges21;
            const serverData = seedSeasonalChallenges21;
            // *** If user's data is shorter than server, user is missing new data. Begin a loop with user's current data (length) than push new data to user array
            if (currentData.length < serverData.length) {
                for (let i = currentData.length; i < serverData.length; i++) {
                    currentData.push(serverData[i]);
                }
            }
            
            // * Check For Patch
            // ** If New Patch Is Available, Patch User's Data
            if (data.patchNumber !== patchNumber) {
                console.log("hit no match");
                
                currentData = patchedSeasonalChallenges(data.seasonalChallenges21)
                data.seasonalChallenges21 = currentData;
                
                BasicUser.findOneAndUpdate(
                    { username: username },
                    {
                        $set: {
                            seasonalChallenges21: data.seasonalChallenges21,
                            patchNumber: patchNumber
                        }
                    },
                    {
                        returnNewDocument: true,
                        multi: true
                    }
                ).catch(err => {
                    res.status(500).json(
                        handleResponse(null, "Error updating patch!", '/api/basic-user/data', err, false)
                    )
                });
            }

            // Send data to client    
            res.status(200).json(
                handleResponse(data, 'Reqests successfull', '/api/basic-user/data', null, true)
            );
        })
    } catch (err) {
        console.log(err);
    }
});

// Update Server with New User Data
basicUserRouter.post('/update', async ({ body }, res) => {
    // console.log('----req-----');
    // console.log(body.seasonalChallenges[0].challenges[0]);
    const { username, seasonalChallenges } = body;
    // console.log(username);
    BasicUser.findOneAndUpdate(
        { username: username },
        { seasonalChallenges21: seasonalChallenges },
        { returnNewDocument: true }
    )
        .then(data => {
            res.status(201).json(
                handleResponse(data, "Saved data to db!", '/api/basic-user/update', null, true)
            );
        })
        .catch(err => {
            res.status(500).json(
                handleResponse(null, "Error updating db!", '/api/basic-user/update', err, false)
            );
        })
});

module.exports = basicUserRouter;
