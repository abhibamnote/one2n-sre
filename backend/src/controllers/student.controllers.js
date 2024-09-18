const Student = require("../models/student.model");

const getStudent = async (req, res) =>{
    try {
        const {id} = req.params;

        const student = await Student.findOne({id: id});
    
        if(!student){
            return res.status(404).json({
                success: true,
                message: "Student not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Found student",
            data: student
        })
    } catch (error) {
        console.error(error);

        return res.status(502).json({
            success: false,
            message: "Something went wrong"
        })
    }
}

const getStudents = async (req, res) =>{
    try {
        const students = await Student.find({});

        res.status(200).json({
            success: true,
            message: "Found students",
            data: students
        })
    } catch (error) {
        return res.status(502).json({
            success: false,
            message: "Something went wrong"
        })
    }
}

const addStudent = async (req, res) =>{
    try {
        const {name, email, phone, address} = req.body;
    
        if(!(name && email && phone && address)){
            return res.status(400).json({
                success: false,
                message: "Validation failed"
            })
        }
    
        const already = await Student.find({$or: [{email: email}, {phone: phone}]});

        if(already.length > 0){
            return res.status(400).json({
                success: false,
                message: "Email or phone already taken",
            })
        }
    
        const student = new Student({
            name: name,
            email: email,
            phone: phone,
            address: address
        })
    
        await student.save();
    
        res.status(201).json({
            success: true,
            message: "Student added"
        }) 
    } catch (error) {
        console.log(error)
        return res.status(502).json({
            success: false,
            message: "Something went wrong"
        })
    }
}

const updateStudent = async (req, res) =>{
    try {
        const {id} = req.params;

        await Student.findOneAndUpdate({id: id}, req.body);

        res.status(201).json({
            success: true,
            message: "Updated"
        })

    } catch (error) {
        return res.status(502).json({
            success: false,
            message: "Something went wrong"
        })
    }
}

const deleteStudent = async (req, res) =>{
    try {
        const {id} = req.params;
        
        await Student.findOneAndDelete({id: id});

        res.status(201).json({
            success: true,
            message: "Deleted"
        })

    } catch (error) {
        return res.status(502).json({
            success: false,
            message: "Something went wrong"
        })
    }
}

module.exports = {
    getStudent,
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent
}