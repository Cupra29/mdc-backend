import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PatientsService } from './patients.service';
import { Patient } from '@prisma/client';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('/patients')
// @ApiTags() sirve para agrupar los endpoints en la documentación de Swagger
@ApiTags('patients')
export class PatientsController {
  // Inyecta el servicio PatientsService en el controlador PatientsController
  constructor(private patientsService: PatientsService) {
    this.patientsService = patientsService;
  }

  // Define un manejador de ruta para obtener todos los pacientes
  @Get()
  // @ApiOperation() sirve para dar una descripción a la operación en la documentación de Swagger
  @ApiOperation({ summary: 'Obtiene todos los pacientes' })
  async getAllPatients() {
    return this.patientsService.getAllPatients();
  }

  // Define a route handler to get a patient
  @Get('/:id')
  @ApiOperation({ summary: 'Obtiene un paciente por ID' })
  // @Param() decorador para extraer el parámetro de la solicitud
  async getPatientById(@Param('id') id: string) {
    return this.patientsService.getPatientById(id);
  }

  // Define una ruta para crear un paciente
  @Post()
  @ApiOperation({ summary: 'Crea un paciente' })
  // @Body() decorador para extraer el cuerpo de la solicitud
  async createPatient(@Body() data: Patient) {
    // Crea un paciente
    return this.patientsService.createPatient(data);
  }

  // Define a route handler to update a patient
  @Put('/:id')
  @ApiOperation({ summary: 'Actualiza un paciente' })
  async updatePatient(@Param('id') id: string, @Body() data: Patient) {
    return this.patientsService.updatePatient(id, data);
  }

  // Define una ruta para eliminar un paciente
  @Delete('/:id')
  @ApiOperation({ summary: 'Elimina un paciente' })
  async deletePatient(@Param('id') id: string) {
    return this.patientsService.deletePatient(id);
  }
}
