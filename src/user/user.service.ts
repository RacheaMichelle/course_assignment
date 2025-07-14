import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { createUserDto } from './Dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ){}

    createOne(createUserdto: createUserDto){
        const user = this. userRepository.create(createUserdto);
        return this.userRepository.save(user);
    }

    findAll() {
        return this.userRepository.find();
    }

    findOne(id: number) {
        return this.userRepository.findOne({ where: { user_id: id } });
    }
    update(id: number, updateUserDto: createUserDto) {
        return this.userRepository.update(id, updateUserDto);
    }
    remove(id: number) {
        return this.userRepository.delete(id);
    }
}
