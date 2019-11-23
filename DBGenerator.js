const districts = require('./response/districts')
const merchants = require('./response/merchants')
module.exports = () => ({
    districts: districts,
    merchants: merchants
})