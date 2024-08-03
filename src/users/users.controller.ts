import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Query,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller('/users')
export class UsersController {
  // inject the UsersService into the UsersController
  constructor(private usersService: UsersService) {
    this.usersService = usersService;
  }

  // Define a route handler to get all users
  @Get()
  getAllUsers(@Query() query: any) {
    console.log(query);
    return this.usersService.getAllUsers();
  }

  // Define a route handler to get a user
  @Get('/:id')
  // @Param() decorator to extract the parameter from the request
  getUser(@Param('id') id: string) {
    console.log(id);
    return this.usersService.getUser(parseInt(id));
  }

  // Define a route handler to create a user
  @Post()
  // @UsePipes(new ValidationPipe()) ----> Ya no se usara pero si quisieramos validacion para cada campo asi se haria
  // @Body() decorator to extract the body of the request
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }

  // Define a route handler to update a user
  @Put()
  updateUser(@Body() user: UpdateUserDto) {
    return this.usersService.updateUser(user);
  }

  // Define a route handler to delete a user
  @Delete()
  deleteUser() {
    return this.usersService.deleteUser();
  }

  // Define a route handler to update a user's status
  @Patch()
  updateUserStatus() {
    return this.usersService.updateUserStatus();
  }
}
