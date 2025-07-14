import { Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role.enum";
import { Course } from "src/course/entities/course.entity";
import { Payment } from "src/payments/entities/payment.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    contact: string;

    @Column({
        type: "enum",
        enum: Role,
        default: Role.student,
    })
    role: Role;

    @OneToOne(() => Course, course => course.lecturer)
    course_trained: Course;

    @OneToMany(() => Payment, payment => payment.payer)
    payments: Payment[];

    @ManyToMany(() => Course, course => course.students)
    courses: Course[];
}