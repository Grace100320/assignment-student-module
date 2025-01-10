import { Controller, Get, Post, Put, Body, Param, Patch, Delete } from '@nestjs/common';
import { StudentService } from './studenttt.service';
import { Student } from './studenttt.entity';

@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Get()
    findAll(): Promise<Student[]> {
        return this.studentService.getAllStudents();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Student> {
        return this.studentService.getStudentById(id);
    }
}
