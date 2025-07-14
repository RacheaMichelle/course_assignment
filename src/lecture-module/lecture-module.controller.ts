import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { LectureModuleService } from './lecture-module.service';
import { CreateLectureModuleDto } from './dto/create-lecture-module.dto';
import { UpdateLectureModuleDto } from './dto/update-lecture-module.dto';

@Controller('lecture-module')
export class LectureModuleController {
  constructor(private readonly lectureModuleService: LectureModuleService) {}

  @Post('/user/:user_id/course/:course_id')
  create(
    @Param('user_id',ParseIntPipe) user_id: number,
    @Param('course_id',ParseIntPipe) course_id: number
  ) {
    return this.lectureModuleService.create(user_id, course_id);
  }

  
}
