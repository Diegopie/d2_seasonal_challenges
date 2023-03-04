const basicUserRouter = require('express').Router();

const { BasicUser } = require('../models');

// * Print Errors and Create Response Object 
// arg 1 & 2 can be null if no error
// arg 3 is true if error occurs
const handleError = (message, route, err, msgError) => {
    if (route && err) console.log({ route }, err);
    return {
        message: {
            msgBody: message,
            msgError: msgError
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
            handleError('Error Checking For Duplicate Username', '/api/basic-user/new', err, true)
        );
    })

    // // ** No Match Will Still Return an Empty Array
    if (checkDupe) {
        res.status(500).json(
            handleError('Username already in use', '/api/basic-user/new', err, true)
        );
        return;
    }

    // why
    // * Create New Guest
    const newUser = new BasicUser({ username, seasonalChallenges });
    newUser.save(err => {
        if (err) {
            res.status(500).json(
                handleError('Error saving new user to the database', '/api/basic-user/new', err, true)
            );
            return;
        }

        res.status(201).json(
            handleError('Successfully saved new user!', '/api/basic-user/new', null, false)
        );
    })
});

// * Server User and All Guest info on Login and Page Load
basicUserRouter.post('/login', ({ body }, res) => {
    const { accessCode } = body;

    try {
        BasicUser.findOne(
            { accessKey: accessCode }
        ).then( async data => {
            
            if (!data) {
                res.status(500).json({
                    success: false,
                    message: "Error Finding Guest",
                });
                return;
            }
    
            // ** Get All Guests
            const allHumans = await Guest.find({});
    
            const allHumansFiltered = [];
    
            allHumans.forEach(doc => {
                if (doc.public) {
                    allHumansFiltered.push(doc);
                }
            });
            
    
            res.status(200).json({
                success: true,
                message: {
                    human: data,
                    allHuman: allHumans,
                    allHumansFiltered: allHumansFiltered,
                }
            });
        })
    } catch (err) {
        console.log(err);
    }
});


basicUserRouter.post('/update', async ({ body }, res) => {
    const { finder, name, accessKey, rsvp, public, role, icons } = body;

    // * Check for Dup Access Keys if Access Key Was Changed
    if (finder !== accessKey) {
        const checkDupe = await BasicUser.findOne(
            { accessKey: accessKey }
        ).then(data => {
            // console.log('Hit Check Dupe');
            // No Dupe
            if (!data) {
                return false;
            }
            // Dupe
            return true;
        }).catch(err => {
            console.log(err);
        })
        //  // ** Fail if Dupe Exists
        if (checkDupe) {
            res.status(500).json({
                success: false,
                message: "Access Key Already in Use",
            });
            return;
        }
    }

    const filter = { accessKey: finder }
    const update = {
        name: name,
        accessKey: accessKey,
        rsvp: rsvp,
        public: public,
        role: role,
        icons: icons
    }

    Guest.findOneAndUpdate(filter, update, { new: true })
        .then(data => {
            res.status(201).json({
                success: true,
                message: "Info Updated!"
            });
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: "Error Updating Info",
                error: err,
            });
        })
});

module.exports = basicUserRouter;
