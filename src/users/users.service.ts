import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from '.prisma/client';

@Injectable()
export class UsersService {
  // Genera un constructor para inyectar el servicio de Prisma
  constructor(private prisma: PrismaService) {}

  // Define un metodo para obtener todos los usuarios
  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  // Define un metodo para obtener un usuario por su id
  async getUserById(id: string): Promise<User> {
    // Encuentra un usuario por su id
    const userFound = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!userFound) {
      throw new NotFoundException(`User with ${id} not found`);
    }
    return userFound;
  }

  // Define un metodo para crear un usuario
  async createUser(data: User): Promise<User> {
    return this.prisma.user.create({ data });
  }

  // Define un metodo para actualizar un usuario
  async updateUser(id: string, data: User): Promise<User> {
    try {
      return this.prisma.user.update({ where: { id }, data });
    } catch (error) {
      throw new NotFoundException(`User with id: ${id} not found`);
    }
  }

  // Define un metodo para eliminar un usuario
  async deleteUser(id: string): Promise<User> {
    // Ejecuta un bloque try/catch para manejar errores
    try {
      // Elimina un usuario por su id
      return await this.prisma.user.delete({ where: { id } });
    } catch (error) {
      throw new NotFoundException(`User whit id ${id} not found`);
    }
  }
}
