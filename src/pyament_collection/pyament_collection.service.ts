import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePyamentCollectionDto } from './dto/create-pyament_collection.dto';
import { UpdatePyamentCollectionDto } from './dto/update-pyament_collection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Payment } from 'src/payments/entities/payment.entity';

@Injectable()
export class PyamentCollectionService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Payment) private readonly paymentRepository: Repository<Payment>,
  ) {}  

  async create(user_id: number, payment_id: number) {
    // Corrected relation names:
    const user = await this.userRepository.findOne({ 
      where: { user_id }, 
      relations: ['payments'] 
    });
    
    const payment = await this.paymentRepository.findOne({ 
      where: { payment_id }, 
      relations: ['payer']  // Changed from 'user' to 'payer'
    });

    if (!user || !payment) {
      throw new NotFoundException('User or Payment not found');
    }
    
    if (user.role !== 'student') {
      throw new ForbiddenException('Only students can make payments');
    }
      payment.payer = user;
    return this.paymentRepository.save(payment);

    
}
}