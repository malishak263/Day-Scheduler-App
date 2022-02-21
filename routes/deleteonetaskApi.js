var express = require('express');
var tasks = require('../models/eventScheduler');
var router = express.Router();

router.post('/', (req, res) => {

    var deleteOneTask = (account, taskId) => {
        
        tasks.deleteOne({ account: account, taskId: taskId }, (err, resp)=>{
         
            if (err) {
                console.log(err.message);
            }
            console.log(resp);
            var result = {
                success: true,
                message: 'task deleted',
            }
            res.json(result);
        });
       
    }
    deleteOneTask(req.body.account, req.body.taskId);
});

module.exports = router;