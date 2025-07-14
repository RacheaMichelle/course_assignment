import { IsEmail, IsNotEmpty, isNotEmpty, IsSemVer, IsString } from "class-validator";
import { Role } from "../entities/role.enum";

export class createUserDto{
   @IsNotEmpty()
   @IsString()
   name: string;
   @IsEmail()
   @IsNotEmpty()
   email: string;
   @IsString()
   @IsNotEmpty()
   contact: string;
   @IsString()
   @IsNotEmpty()
   role: Role; 

   
}