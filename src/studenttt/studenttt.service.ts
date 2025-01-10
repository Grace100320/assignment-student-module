import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './studenttt.entity';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentRepository: Repository<Student>,
    ) { }

    async deleteStudent(id: number): Promise<{ message: string }> {
        const result = await this.studentRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException('Student not found');
        }
        return { message: `The student with ID ${id} has been successfully removed.` };
    }
}