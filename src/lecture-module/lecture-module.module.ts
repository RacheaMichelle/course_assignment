import { Module } from '@nestjs/common';
import { LectureModuleService } from './lecture-module.service';
import { LectureModuleController } from './lecture-module.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Course } from 'src/course/entities/course.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,Course])],
  controllers: [LectureModuleController],
  providers: [LectureModuleService],
})
export class LectureModuleModule {}
