import { Module } from '@nestjs/common';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';

@Module({
  // Define the controllers and services in the module
  controllers: [PatientsController],
  providers: [PatientsService],
})
export class PatientModule {}
