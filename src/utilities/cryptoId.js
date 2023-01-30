"use strict";

const crypto = require('crypto');
const dayjs = require('dayjs');

// Creates a unique hash code for IDs using Crypto and Dayjs
module.exports = () => crypto.createHash('md5')
                            .update(
                                dayjs().format('YYYY-MM-DD[T]HH:mm:ss.SSS')
                            ).digest('hex');