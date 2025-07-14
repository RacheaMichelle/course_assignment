import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
    @PrimaryGeneratedColumn()
        course_id: number;
        @Column()
        course_code: string;
        @Column()
        course_name: string;
}

