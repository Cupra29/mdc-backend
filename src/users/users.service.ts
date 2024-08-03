import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
  private users = [];

  // Define a method to get all users
  getAllUsers() {
    return this.users;
  }

  // Define a method to get a user
  getUser(id: number) {
    // find the user with the given id
    const userFound = this.users.find((user) => user.id === id);

    if (!userFound) {
      return new NotFoundException(`User with ${id} not found`);
    }
    return userFound;
  }

  // Define a method to create a user
  createUser(user: CreateUserDto) {
    this.users.push({
      id: this.users.length + 1,
      // spread operator to merge the user object with the id
      ...user,
    });
    return user;
  }

  // Define a method to update a user
  updateUser(user: UpdateUserDto) {
    console.log(user.name);
    return 'Actualizando usuario';
  }

  // Define a method to delete a user
  deleteUser() {
    return 'Eliminando usuario';
  }

  // Define a method to update a user's status
  updateUserStatus() {
    return 'Actualizando estado del usuario';
  }
}
