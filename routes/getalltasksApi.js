var express = require('express');
var tasks = require('../models/eventScheduler');
var router = express.Router();

router.post('/', (req, res) => {

    var getAllTasks = (account) => {
        var result = {};

        tasks.find({ account: account }, (err, resp) => {

            if (err) {
                console.log(err.message);
            }

            let tasksArray = [];

            resp.forEach(i => {

                tasksArray.push({
                    id: i.taskId,
                    task: i.task,
                    start_date:i.start_date,
                    start_time:i.start_time,
                    end_date:i.end_date,
                    end_time:i.end_time
                });

            });

            result = {
                success: true,
                message: `tasks loaded`,
                tasks: tasksArray
            }
    
           // console.log(result);
            res.json(result.tasks);

        });

    }

    getAllTasks(req.body.account);

});

module.exports = router;