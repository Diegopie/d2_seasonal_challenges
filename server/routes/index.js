const router = require('express').Router();
const basicUserRouter = require('./basicUser.routes');
const serverData = require('./serverData.routes')

router.use('/api/basic-user', basicUserRouter);
router.use('/api/serverData', serverData);

module.exports = router;