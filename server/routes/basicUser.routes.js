const basicUserRouter = require('express').Router();

const { BasicUser } = require('../models');

// * Print Errors and Create Response Object 
// arg 1 is the data to send to the client; arg 2 is the rought the route the req is made
// arg 3 is the err from the promise or null of not applicalple
// arg 4 is true if the request is successfull
const handleResponse = (message, route, err, success) => {
    if (route && err) console.log({ route }, err);
    return {
        message: {
            success: success,
            message: message,
            error: err
        }
    };
};

// * Create User

basicUserRouter.post('/new', async ({ body }, res) => {
    const { username, seasonalChallenges } = body;

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
            handleResponse('Error Checking For Duplicate Username', '/api/basic-user/new', err, false)
        );
    })

    // // ** No Match Will Still Return an Empty Array
    if (checkDupe) {
        res.status(500).json(
            handleResponse('Username already in use', '/api/basic-user/new', null, false)
        );
        return;
    }

    // * Create New User
    const newUser = new BasicUser({ username, seasonalChallenges });
    newUser.save(err => {
        if (err) {
            res.status(500).json(
                handleResponse('Error saving new user to the database', '/api/basic-user/new', err, false)
            );
            return;
        }

        res.status(201).json(
            handleResponse('Successfully saved new user!', '/api/basic-user/new', null, true)
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
                    handleResponse('Error quering db for user', '/api/basic-user/data', null, false)
                );
                return;
            }
    
            // Send data to client    
            res.status(200).json(
                handleResponse(data, '/api/basic-user/data', null, true)
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
                handleResponse("Saved data to db!", '/api/basic-user/update', null, true)
            );
        })
        .catch(err => {
            res.status(500).json(
                handleResponse("Error updating db!", '/api/basic-user/update', err, false)
            );
        })
});

module.exports = basicUserRouter;
