import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class PaymentsService {
 constructor(
  @InjectRepository(Payment) private readonly paymentRepository: Repository<Payment>,
  @InjectRepository(User) private readonly userRepository: Repository<User>

){
   
 }

  async create(user_id: number,createPaymentDto: CreatePaymentDto) {
    const user =  await this.userRepository.findOne({ where: { user_id } });
    if(!user) 
      throw new NotFoundException('User not found');
    if (!(user.role == 'student'  )) 
      throw new NotFoundException('Only students can make payments');

    const newPayment = this.paymentRepository.create(createPaymentDto)
    newPayment.payer = user; // Assuming 'payer' is the relation in Payment entity
    return this.paymentRepository.save(newPayment);
    
    
  }


  findAll() {
    return this.paymentRepository.find({ relations: ['payer'] });
  }

  findOne(id: number) {
    return this.paymentRepository.findOne({ where: { payment_id: id }, relations: ['payer'] });
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto){
    return this.paymentRepository.update(id, updatePaymentDto);
  }

  remove(id: number) {
    return this.paymentRepository.delete(id);
  }
}
