var express = require('express');
var notes = require('../models/notes');
var router = express.Router();

router.post('/', (req, res) => {

    var updateNote = (account, noteId, note) => {
        var result = {};

        notes.updateOne({ account: account, noteId: noteId }, { note: note }, (err, resp) => {

            if (err) {
                console.log(err.message);
            }
            console.log(resp);
        });

    }

    updateNote(req.body.account, req.body.noteId, req.body.note);

});

module.exports = router;