import { Router } from "express";
import { deleteStudent, getStudent, getStudents,registerStudent, updateFees } from "../Controllers/studentController.js";

export const studentRouter = Router()

studentRouter.get('/', getStudents)
studentRouter.get('/:id', getStudent)
studentRouter.post('/', registerStudent)
studentRouter.delete('/:id', deleteStudent)
studentRouter.patch('/', updateFees)
