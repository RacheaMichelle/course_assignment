import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course {

    @PrimaryGeneratedColumn()
    course_id: number;
    @Column()
    course_code: string;
    @Column()
    course_name: string;

    @OneToOne(()=> User, User => User.course_trained)
    @JoinColumn({ name: 'user_id' })
    lecturer:User;

    @ManyToMany(() => User, user => user.courses)
    @JoinTable()
    students: User[]; // Assuming a Course can have multiple students, this should be a OneToMany relation
}
//Course(course_code, course_name)