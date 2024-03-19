const mongoose = require('mongoose');
const Student = require('./models/student.model');
require('dotenv').config();
const dbName = "student-test"

const dbConnection = async () => {
    try {
        const db = await mongoose.connect(`${process.env.MONGO_URI}/${dbName}`);

        console.log(`DB is connected to: ${db.connection.host}`)

    } catch (error) {
        console.error("Mongoose Connection Error", error);
    }
}

const data = [
    {
        id: "1",
        name: "Abhishek",
        email: "abhi2bamnote@gmail.com",
        phone: "9876543210",
        address: "abcd edgh"
    },
    {
        id: "2",
        name: "Prathamesh",
        email: "prathamesh@gmail.com",
        phone: "9876543211",
        address: "abcd edgh"
    },
    {
        id: "3",
        name: "Aditya",
        email: "aditya@gmail.com",
        phone: "9876543212",
        address: "abcd edgh"
    },
]

dbConnection()
    .then(async ()=>{
        const students = await Student.find({});
        if(students.length > 0){
            await mongoose.connection.close();
            return 0;
        }

        await Student.insertMany(data);
        await mongoose.connection.close();
    })