var express = require('express');
var tasks = require('../models/eventScheduler');
var router = express.Router();

router.post('/', (req, res) => {

    var addTask = (account, task, start_date,start_time, end_date, end_time) => {
        var result = {};

        tasks.find((err, resp) => {

            if (err) {
                console.log(err.message);
            }
            console.log(resp.length + 1);
            var taskId = resp.length + 1;
            var newTask= new tasks({
                account: account,
                taskId: taskId,
                task:task,
                start_date:start_date,
                start_time:start_time,
                end_date:end_date,
                end_time:end_time
            });

            newTask.save((err, resp) => {

                if (err) {
                    console.log(err);
                } else {

                    result = {
                        success: true,
                        message: `task added!`,
                    }
                    console.log(result);
                    res.json(result);
                }
            });


        });

    }

    addTask(req.body.account, req.body.task, req.body.start_date, req.body.start_time, req.body.end_date, req.body.end_time);
    console.log(req.body.task);
});

module.exports = router;