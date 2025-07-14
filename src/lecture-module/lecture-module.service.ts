import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLectureModuleDto } from './dto/create-lecture-module.dto';
import { UpdateLectureModuleDto } from './dto/update-lecture-module.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Course } from 'src/course/entities/course.entity';

@Injectable()
export class LectureModuleService {
  constructor(
    @InjectRepository(User) private readonly userRepository:Repository<User>,
    @InjectRepository(Course)private readonly courseRepository:Repository<Course>
  ){}
  async create(user_id: number, course_id:number) {
    const user = await this.userRepository.findOne({where:{user_id:user_id}})
    const course = await this.courseRepository.findOne({where:{course_id:course_id},relations:['lecturer']})
    if (!user || !course) 
      throw new NotFoundException('User or Course not found');
    course.lecturer = user;
    return this.courseRepository.save(course);
    
     
   
  }

  
}
