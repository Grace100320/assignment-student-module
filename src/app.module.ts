import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudModule } from './studenttt/studenttt.module';
import { Student } from './studenttt/studenttt.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'studenttt_db',
      entities: [Student],
      synchronize: true,
    }),
    StudModule,
  ],
})
export class AppModule { }
