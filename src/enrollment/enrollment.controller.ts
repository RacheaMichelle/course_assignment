import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';

@Controller('enrollment')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Post('/user/:user_id/course/:course_id')
  create(
    @Param('user_id',ParseIntPipe) user_id: number,
    @Param('course_id',ParseIntPipe) course_id: number
  ) {
    return this.enrollmentService.create(user_id, course_id);
  }

 
}
