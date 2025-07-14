import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Course } from 'src/course/entities/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EnrollmentService {
 constructor(
  @InjectRepository(User) private readonly userRepository: Repository<User>,
  @InjectRepository(Course) private readonly  courseRepository: Repository<Course>
 ){
  
 }
  async create(user_id: number, course_id: number) {
    const user = await this.userRepository.findOne({ where: { user_id } });
    const course = await this.courseRepository.findOne({ where: { course_id }, relations: ['students'] });
    if (!user || !course) 
      throw new NotFoundException('User or Course not found');
    if(!(user.role == 'student')) throw new NotFoundException('Only students can enroll');

    course.students.push(user); // Assuming 'students' is the relation in Course entity
    return this.courseRepository.save(course);
  }

  
}
