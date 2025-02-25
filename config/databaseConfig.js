const mongoose = require('mongoose') 

const MONGOOSE_URL = process.env.MONGOOSE_URL || "mongodb://localhost:27017/my_database"


const databaseConnect = () => {
    mongoose.connect(MONGOOSE_URL)
    .then( (conn)=> console.log(`Connected to DB: ${conn.connection.host}`))
    .catch( (err)=> console.log(err.message))
}



module.exports = databaseConnect

