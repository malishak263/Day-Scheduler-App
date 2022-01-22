var mongoose = require('mongoose');

var noteSchema = mongoose.Schema({
    account: String,
    noteId: String,
    note: String
});
module.exports = mongoose.model('notes', noteSchema);