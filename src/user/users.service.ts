import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import {User} from './interfaces/user'
import {Model} from 'mongoose'
import CreateUserDto from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>){}

    async getUsers(){
      return await this.userModel.find();
     }

     async getUser(id: string){
      return await  this.userModel.findById(id)
     }
     async createuser(user: CreateUserDto){
    const newUser = new this.userModel(user);
     await newUser.save()
    return 'guardado'
   }
   
}
