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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('/users')
// @ApiTags() sirve para agrupar los endpoints en la documentación de Swagger
@ApiTags('users')
export class UsersController {
  // Inyecta el servicio UsersService en el controlador UsersController
  constructor(private usersService: UsersService) {
    this.usersService = usersService;
  }

  // Define una ruta para obtener todos los usuarios
  @Get()
  // @ApiOperation() sirve para dar una descripción a la operación en la documentación de Swagger
  @ApiOperation({ summary: 'Obtiene todos los usuarios' })
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }

  // Define una ruta para obtener un usuario
  @Get('/:id')
  @ApiOperation({ summary: 'Obtiene un usuario por ID' })
  // @Param() decorador para extraer el parámetro de la solicitud
  async getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }

  // Define una ruta para crear un usuario
  @Post()
  @ApiOperation({ summary: 'Crea un usuario' })
  // @Body() decorador para extraer el cuerpo de la solicitud
  async createUser(@Body() data: User) {
    return this.usersService.createUser(data);
  }

  // Define una ruta para actualizar un usuario
  @Put('/:id')
  @ApiOperation({ summary: 'Actualiza un usuario' })
  async updateUser(@Param('id') id: string, @Body() data: User) {
    return this.usersService.updateUser(id, data);
  }

  // Define una ruta para eliminar un usuario
  @Delete('/:id')
  @ApiOperation({ summary: 'Elimina un usuario' })
  async deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
