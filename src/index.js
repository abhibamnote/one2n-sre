const app = require("./app");
const dbConnection = require("./db/dbConnection");
require('dotenv').config();

dbConnection()
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log(`Server is running at port: ${process.env.PORT}`);
        })
    })
    .catch(error =>{
        console.log("MongoDb connection failed: ", error);
    })