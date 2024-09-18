const mongoose = require('mongoose');
const { dbName } = require('../constants');


const dbConnection = async () =>{
    try {
        const db = await mongoose.connect(`${process.env.MONGO_URI}/${dbName}`);

        console.log(`DB is connected to: ${db.connection.host}`)

    } catch (error) {
        console.error("Mongoose Connection Error", error);
    }
}


module.exports = dbConnection;