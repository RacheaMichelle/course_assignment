import { PartialType } from '@nestjs/mapped-types';
import { CreateLectureModuleDto } from './create-lecture-module.dto';

export class UpdateLectureModuleDto extends PartialType(CreateLectureModuleDto) {}
