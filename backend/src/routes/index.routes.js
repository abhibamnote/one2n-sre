const express = require('express');
const Student = require('../models/student.model');
const { getStudent, getStudents, addStudent, updateStudent, deleteStudent } = require('../controllers/student.controllers');

const router = express.Router();

router.get('/:id', getStudent);

router.get('/', getStudents);

router.post('/', addStudent);

router.put('/:id', updateStudent);

router.delete('/:id', deleteStudent);


module.exports = router;