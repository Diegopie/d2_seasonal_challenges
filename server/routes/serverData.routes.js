const ServerData = require('../models/ServerData');

const serverDataRouter = require('express').Router();

// { Note: what if we just make a postman route to update the server }

// * Print Errors and Create Response Object 
// arg 1 is the data to send to the client; arg 2 is the route the route the req is made
// arg 3 is the err from the promise or null of not applicable
// arg 4 is true if the request is successful
const handleResponse = (data, note, route, err) => {
    if (route && err) console.log({ route }, err);
    return {
        message: {
            success: err === null ? true : false,
            note: note,
            data: data,
            error: err
        }
    };
};

const checkKey = (req, res) => {
    if (req !== process.env.SERVER_SECRET) {
        res.status(401).json({ msg: 'Be Gone, Imposter!' })
        return false;
    }
    return true;
}

const baseApiRoute = '/api/serverData/';

serverDataRouter.post('/initServer', async ({ body }, res) => {

    if (!checkKey(body.key, res)) { return; }

    const apiRoute = baseApiRoute + '/initServer';

    try {
        new ServerData().save().then(data => {
            res.status(201).json(
                handleResponse(data, 'Successfully initiated server data!', apiRoute, null)
            );
        })
    } catch (err) {
        res.status(500).json(
            handleResponse(null, 'Error initializing server data', apiRoute, err, false)
        );
    }
});

serverDataRouter.post('/getServerData', async ({ body }, res) => {
    const apiRoute = baseApiRoute + '/getServerData';

    if (!checkKey(body.key, res)) { return; }

    const newActiveWeeks = body.newActiveWeeks;
    try {
        ServerData.find(
            {}
        ).then(data => {
            res.status(201).json(
                handleResponse(data, 'Successfully found server data!', apiRoute, null)
            );
        })
    } catch (err) {
        res.status(500).json(
            handleResponse(null, 'Error finding server data', apiRoute, err)
        );
    }
});

// Update Server Data
serverDataRouter.post('/updateServerData', async ({ body }, res) => {
    const apiRoute = baseApiRoute + '/updateServerData';

    if (!checkKey(body.key, res)) { return; }

    const newActiveWeeks = body.newActiveWeeks;
    try {
        ServerData.findOneAndUpdate(
            {},
            { $set: { activeWeeks: newActiveWeeks } },
            { new: true }
        ).then(data => {
            res.status(201).json(
                handleResponse(data, 'Successfully updated server data!', apiRoute, null)
            );
        })
    } catch (err) {
        res.status(500).json(
            handleResponse(null, 'Error updating server data', apiRoute, err)
        );
    }
});



module.exports = serverDataRouter;
