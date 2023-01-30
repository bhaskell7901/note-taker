const crypto = require('crypto');
const dayjs = require('dayjs');

module.exports = () => crypto.createHash('md5')
                            .update(
                                dayjs().format('YYYY-MM-DD[T]HH:mm:ss.SSS')
                            ).digest('hex');