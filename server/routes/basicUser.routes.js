const basicUserRouter = require('express').Router();
const seedSeasonalChallenges20 = require('../seeds/seasonalChallenges20')

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
    // const { username, seasonalChallenges20 } = body;

    // * Check for Dup Access Keys
    console.log(seedSeasonalChallenges20);
    console.log(seedSeasonalChallenges20[0].challenges);
    console.log(seedSeasonalChallenges20[1].challenges);
    // const checkDupe = await BasicUser.findOne(
    //     { username: username }
    // ).then(data => {
    //     if (!data) {
    //         return false;
    //     }
    //     return true;
    // }).catch(err => {
    //     res.status(500).json(
    //         handleResponse(null, 'Error Checking For Duplicate Username', '/api/basic-user/new', err, false)
    //     );
    // })

    // // // ** No Match Will Still Return an Empty Array
    // if (checkDupe) {
    //     res.status(500).json(
    //         handleResponse(null, 'Username already in use', '/api/basic-user/new', null, false)
    //     );
    //     return;
    // }

    // // * Create New User
    // const newUser = new BasicUser({ username, seasonalChallenges20 });
    // newUser.save(err => {
    //     if (err) {
    //         res.status(500).json(
    //             handleResponse(null, 'Error saving new user to the database', '/api/basic-user/new', err, false)
    //         );
    //         return;
    //     }

    //     res.status(201).json(
    //         handleResponse(newUser, 'Successfully saved new user!', '/api/basic-user/new', null, true)
    //     );
    // })
});

basicUserRouter.post('/new', async ({ body }, res) => {
    const { username, seasonalChallenges20 } = body;

    // * Check for Dup Access Keys
    const checkDupe = await BasicUser.findOne(
        { username: username }
    ).then(data => {
        if (!data) {
            return false;
        }
        return true;
    }).catch(err => {
        res.status(500).json(
            handleResponse(null, 'Error Checking For Duplicate Username', '/api/basic-user/new', err, false)
        );
    })

    // // ** No Match Will Still Return an Empty Array
    if (checkDupe) {
        res.status(500).json(
            handleResponse(null, 'Username already in use', '/api/basic-user/new', null, false)
        );
        return;
    }

    // * Create New User
    const newUser = new BasicUser({ username, seasonalChallenges20 });
    newUser.save(err => {
        if (err) {
            res.status(500).json(
                handleResponse(null, 'Error saving new user to the database', '/api/basic-user/new', err, false)
            );
            return;
        }

        res.status(201).json(
            handleResponse(newUser, 'Successfully saved new user!', '/api/basic-user/new', null, true)
        );
    })
});

// * Serve challenge data on login/load
basicUserRouter.post('/data', ({ body }, res) => {
    const { username } = body;

    try {
        BasicUser.findOne(
            { username: username }
        ).then( data => {
            
            if (!data) {
                res.status(500).json(
                    handleResponse(null, 'Error quering db for user', '/api/basic-user/data', null, false)
                );
                return;
            }
    
            // Send data to client    
            res.status(200).json(
                handleResponse(data, 'Reqests successfull','/api/basic-user/data', null, true)
            );
        })
    } catch (err) {
        console.log(err);
    }
});

// Update Server with New User Data
basicUserRouter.post('/update', async ({ body }, res) => {
    const { username, seasonalChallenges } = body;

    BasicUser.findOneAndUpdate({username: username}, {seasonalChallenges: seasonalChallenges}, { new: true })
        .then(data => {
            res.status(201).json(
                handleResponse({note: "Saved data to db!", message: data}, '/api/basic-user/update', null, true)
            );
        })
        .catch(err => {
            res.status(500).json(
                handleResponse("Error updating db!", '/api/basic-user/update', err, false)
            );
        })
});

module.exports = basicUserRouter;
