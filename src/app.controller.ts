import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/greeting')
  getGreetings(){
    return 'My Regards'
  }
  @Post('/greeting')
  postGreetings(){
    return 'My regards from post'
  }
 @Get('/names')
 getNames() {
   return this.appService.getNames();
 }
}
