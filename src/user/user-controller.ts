import { Controller, Get , Post , Put , Delete,Body , Param} from '@nestjs/common';
import {UsersService} from './users.service'
import CreateUserDto from './dto/create-user.dto';
import {User} from './interfaces/user'
@Controller('user')
export class UserController {
    constructor(private userService:UsersService) {
        
    }

 @Get() 
    getUsers():Promise <User[]> {
    return this.userService.getUsers();
 };

 @Get(':userid')
 getUser(@Param('userid')  userid:string){
     return this.userService.getUser(userid);
 }

  @Post()
  createUser(@Body()  user: CreateUserDto):Promise<User> {
    return this.userService.createuser(user)
  };
 
  @Delete(':id')
  deleteUser(@Param('id') id): string {
      console.log('El usuario fue borrado:',id)
   return  `El usuario fue borrado: ${id}`
  };

  @Put(':id')
  updateUser(@Body() user: CreateUserDto, @Param('id') id): string {
      console.log(user)
      console.log(id)
      return `El usuario : ${id} fue actualizado`
  };

};
