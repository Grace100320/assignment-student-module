import { Controller, Get, Post, Put, Body, Param, Patch, Delete } from '@nestjs/common';
import { StudentService } from './studenttt.service';
import { Student } from './studenttt.entity';

@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.studentService.deleteStudent(id);
    }
}
