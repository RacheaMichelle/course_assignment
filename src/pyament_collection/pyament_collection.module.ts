import { Module } from '@nestjs/common';
import { PyamentCollectionService } from './pyament_collection.service';
import { PyamentCollectionController } from './pyament_collection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Payment } from 'src/payments/entities/payment.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([User,Payment])
  ],
  controllers: [PyamentCollectionController],
  providers: [PyamentCollectionService],
})
export class PyamentCollectionModule {}
