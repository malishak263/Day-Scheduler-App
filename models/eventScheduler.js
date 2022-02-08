var mongoose = require('mongoose');

var taskSchema = mongoose.Schema({
    account: String,
    taskId: String,
    task: String,
    start_date: String,
    start_time:String,
    end_date:String,
    end_time:String
});
module.exports = mongoose.model('tasks', taskSchema);