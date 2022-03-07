var express = require('express');
var notes = require('../models/notes');
var router = express.Router();

router.post('/', (req, res) => {

    var deleteNote = (account, noteId) => {


        notes.deleteOne({ account: account, noteId: noteId }, (err, resp) => {
            var result = {};
            if (err) {
                console.log(err.message);
            }
           // console.log(resp);
            result = {
                success: true,
                message: 'note deleted',
            }
        });

    }

    deleteNote(req.body.account, req.body.noteId);

});

module.exports = router;