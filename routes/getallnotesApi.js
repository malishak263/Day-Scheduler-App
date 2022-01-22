var express = require('express');
var notes = require('../models/notes');
var router = express.Router();

router.post('/', (req, res) => {

    var getAllNotes = (account) => {
        var result = {};

        notes.find({ account: account }, (err, resp) => {

            if (err) {
                console.log(err.message);
            }

            console.log(result);
            console.log(resp);

            let notesArray = [];
            resp.forEach(i => {
                notesArray.push({
                    id: i.noteId,
                    note: i.note
                });

            });

            result = {
                success: true,
                message: `notes loaded`,
                notes: notesArray
            }

            res.send(result.notes);

        });

    }

    getAllNotes(req.body.account);

});

module.exports = router;