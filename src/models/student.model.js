const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);


const StudentSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String
    }
})

StudentSchema.plugin(autoIncrement, { inc_field: 'id' });

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;