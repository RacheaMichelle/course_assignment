import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';
import { User } from './user/entities/user.entity';
import { Course } from './course/entities/course.entity';
import { PaymentsModule } from './payments/payments.module';
import { Payment } from './payments/entities/payment.entity';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { LectureModuleModule } from './lecture-module/lecture-module.module';
import { PyamentCollectionModule } from './pyament_collection/pyament_collection.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port:  3306,
      username: 'root',
      password: 'root',
      database: 'skillswap_backend',
      entities: [User,Course,Payment],
      synchronize: true

    }),
    UserModule,
    CourseModule,
    PaymentsModule,
    EnrollmentModule,
    LectureModuleModule,
    PyamentCollectionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
