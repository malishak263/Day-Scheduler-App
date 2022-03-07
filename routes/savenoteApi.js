var express = require('express');
var notes = require('../models/notes');
var router = express.Router();

router.post('/', (req, res) => {

    var saveNote = (account, note) => {
        var result = {};

        notes.find((err, resp) => {

            if (err) {
                console.log(err.message);
            }
           // console.log(resp.length + 1);
            var noteId = resp.length + 1;
            var newNote = new notes({
                account: account,
                noteId: noteId,
                note: note
            });

            newNote.save((err, resp) => {

                if (err) {
                    console.log(err);
                } else {

                    result = {
                        success: true,
                        message: `note saved!`,
                    }
                  //  console.log(result);
                    res.json(result);
                }
            });


        });

    }

    saveNote(req.body.account, req.body.note);
   // console.log(req.body.note);
});

module.exports = router;