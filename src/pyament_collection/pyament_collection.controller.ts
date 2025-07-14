import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PyamentCollectionService } from './pyament_collection.service';
import { CreatePyamentCollectionDto } from './dto/create-pyament_collection.dto';
import { UpdatePyamentCollectionDto } from './dto/update-pyament_collection.dto';

@Controller('pyament-collection')
export class PyamentCollectionController {
  constructor(private readonly pyamentCollectionService: PyamentCollectionService) {}

  @Post('/user/:user_id/payment/:payment_id')
  create(@Param('user_id', ParseIntPipe) user_id: number, 
  @Param('payment_id',ParseIntPipe) payment_id: number) {
    return this.pyamentCollectionService.create(user_id, payment_id);
  }

  
}
