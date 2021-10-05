import express from 'express';
import { getStudents,createStudent,deleteStudent,editStudent, getStudentsId } from '../controllers/student.js';
import student from '../models/student.js';



const router = express.Router()

router.get('/',getStudents);
router.get('/:id',getStudentsId);
router.post('/',createStudent);
router.delete('/:id',deleteStudent);
router.put('/:id',editStudent);

export default router;