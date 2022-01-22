//importing mongoose
const mongoose = require('mongoose');

//exporting connection() function
module.exports = connection = () => {
    //connection string
    var dbUrl = 'mongodb://localhost:27017/schedulerDB';

    try {
        mongoose.connect(dbUrl, (err, res) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log('connected succussfully');
            }
        });
    } catch (err) {
        console.log(err.message);
    }

}



/*
NOTES

Just import only mongoose module here, no need for importing express.

 */