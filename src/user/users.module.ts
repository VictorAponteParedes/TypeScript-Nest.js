import { Module } from '@nestjs/common';
import {UserController} from './user-controller'
import {UsersService} from '../user/users.service'
import {MongooseModule} from '@nestjs/mongoose'
import {userSchema} from './Schemas/user-schema'

@Module({
    imports:[MongooseModule.forFeature([
        {name:'user' , schema:userSchema}
    ])],
    controllers:[UserController],
    providers:[UsersService]
})
export class UsersModule {}
