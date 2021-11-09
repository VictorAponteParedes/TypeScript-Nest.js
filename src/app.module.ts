import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './user/users.service';
import { UsersModule } from './user/users.module';
import {UserController}  from './user/user-controller';
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports:[UsersModule , MongooseModule.forRoot('mongodb://localhost/nest' ,{
    useNewUrlParser:true

  })],
  controllers: [AppController, UserController],
  providers: [AppService, UsersService],
})
export class AppModule {}
