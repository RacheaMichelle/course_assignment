import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCourseDto {
 @IsString()
 @IsOptional()
 course_code: string;
 @IsNotEmpty()
 @IsString()
 course_name: string;
 
} // (course_code, course_name)
