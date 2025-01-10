import { Controller, Get, Post, Put, Body, Param, Patch, Delete } from '@nestjs/common';
import { StudentService } from './studenttt.service';
import { Student } from './studenttt.entity';

@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Post()
    create(@Body() student: Partial<Student>): Promise<Student> {
        return this.studentService.createStudent(student);
    }

}
