const mongoose = require('mongoose');

const connectDatabase = () =>{
    mongoose.connect(process.env.DB_URI)
    .then(() => console.log('Connected to database'))
    .catch((err) => console.log(err));
}


// export 
module.exports = connectDatabase;