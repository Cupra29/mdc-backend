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
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/createPatient.dto';
import { UpdatePatientDto } from './dto/updatePatient.dto';

@Controller('/patients')
export class PatientsController {
  // inject the PatientsService into the PatientsController
  constructor(private patientsService: PatientsService) {
    this.patientsService = patientsService;
  }

  // Define a route handler to get all patients
  @Get()
  getAllPatients(@Query() query: any) {
    console.log(query);
    return this.patientsService.getAllPatients();
  }

  // Define a route handler to get a patient
  @Get('/:id')
  // @Param() decorator to extract the parameter from the request
  getPatient(@Param('id') id: string) {
    console.log(id);
    return this.patientsService.getPatient(parseInt(id));
  }

  // Define a route handler to create a patient
  @Post()
  // Define un pipe de validación para validar los datos de entrada
  // @UsePipes(new ValidationPipe()) ----> Ya no se usara pero si quisieramos validacion para cada campo asi se haria
  // @Body() decorator to extract the body of the request
  createPatient(@Body() patient: CreatePatientDto) {
    return this.patientsService.createPatient(patient);
  }

  // Define a route handler to update a patient
  @Put()
  updatePatient(@Body() patient: UpdatePatientDto) {
    return this.patientsService.updatePatient(patient);
  }

  // Define a route handler to delete
  @Delete()
  deletePatient() {
    return this.patientsService.deletePatient();
  }

  // Define a route handler to update a patient's status
  @Patch()
  updatePatientStatus() {
    return this.patientsService.updatePatientStatus();
  }
}
