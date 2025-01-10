import { Controller, Get, Post, Put, Body, Param, Patch, Delete } from '@nestjs/common';
import { StudentService } from './studenttt.service';
import { Student } from './studenttt.entity';

@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Put(':id')
    update(@Param('id') id: number, @Body() student: Partial<Student>) {
        return this.studentService.updateStudent(id, student);
    }

    @Patch(':id')
    partialupdate(@Param('id') id: number, @Body() student: Partial<Student>): Promise<Student> {
        return this.studentService.updateStudent(id, student);
    }
}
