import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePatientDto } from './dto/createPatient.dto';
import { UpdatePatientDto } from './dto/updatePatient.dto';

@Injectable()
export class PatientsService {
  private patients = [];

  // Define a method to get all patients
  getAllPatients() {
    return this.patients;
  }

  // Define a method to get a patient
  getPatient(id: number) {
    // find the patient with the given id
    const patientFound = this.patients.find((patient) => patient.id === id);

    if (!patientFound) {
      return new NotFoundException(`Patient with ${id} not found`);
    }
    return patientFound;
  }

  // Define a method to create a patient
  createPatient(patient: CreatePatientDto) {
    this.patients.push({
      id: this.patients.length + 1,
      // spread operator to merge the patient object with the id
      ...patient,
    });
    return patient;
  }

  // Define a method to update a patient
  updatePatient(patient: UpdatePatientDto) {
    console.log(patient.name);
    return 'Actualizando paciente';
  }
  // Define a method to delete a patient
  deletePatient() {
    return 'Eliminando paciente';
  }

  // Define a method to update a patient's status
  updatePatientStatus() {
    return 'Actualizando estado del paciente';
  }
}
