var mongoose = require('mongoose');

var accountSchema = mongoose.Schema({
    username: String,
    password: String
});
module.exports = mongoose.model('userAccounts', accountSchema);