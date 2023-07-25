const dayjs = require('dayjs');
var utc = require('dayjs/plugin/utc');
// dayjs.extend(utc);

const wtf = dayjs("12-25-1995", "X")

console.log(wtf);