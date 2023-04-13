const router = require('express').Router();
const basicUserRouter = require('./basicUser.routes');
// const second = require('./second.routes')

router.use('/api/basic-user', basicUserRouter);
// router.use('/api/second', second);

module.exports = router;