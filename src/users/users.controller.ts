import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';

@Controller('/users')
export class UsersController {
  // inject the UsersService into the UsersController
  constructor(private usersService: UsersService) {
    this.usersService = usersService;
  }

  // Define a route handler to get all users
  @Get()
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }

  // Define a route handler to get a user
  @Get('/:id')
  // @Param() decorator to extract the parameter from the request
  async getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }

  // Define a route handler to create a user
  @Post()
  // @UsePipes(new ValidationPipe()) ----> Ya no se usara pero si quisieramos validacion para cada campo asi se haria
  // @Body() decorator to extract the body of the request
  async createUser(@Body() data: User) {
    return this.usersService.createUser(data);
  }

  // Define a route handler to update a user
  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() data: User) {
    return this.usersService.updateUser(id, data);
  }

  // Define a route handler to delete a user
  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
