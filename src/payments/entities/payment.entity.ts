
import { Course } from "src/course/entities/course.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    payment_id: number;
    @Column()
    amount:  number;

    @ManyToOne(() => User, user => user.payments)
    @JoinColumn({ name: 'user_id' })
    payer: User;


    
}
