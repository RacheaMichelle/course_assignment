import { PartialType } from "@nestjs/mapped-types";
import { createUserDto } from "./create-user.dto";
import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../entities/role.enum";

export class UpdateUserDto extends PartialType(createUserDto) {
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
    }