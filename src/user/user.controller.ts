import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from './Dto/create-user.dto';
import { CreateCourseDto } from 'src/course/dto/create-course.dto';
import { UpdateUserDto} from './Dto/update-cource.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Post()
  createUser(@Body() createUserdto: createUserDto){
    return this.userService.createOne(createUserdto);

  }
  
  @Get()
  getUser(){
    return this.userService.findAll();
  }
  @Get(':id')
  getUserByID(@Param('id')id:string){
    return this.userService.findOne(+id)
  }

  @Delete(':id')
  deleteUser(@Param('id')id:string, @Body() createUserDto:CreateCourseDto){
    return this.userService.remove(+id)
  }


  @Patch(':id')
  updateUser(@Param('id')id:string, @Body() updateUserDto:UpdateUserDto){
    return this.userService.update(+id, updateUserDto);
  }

}
