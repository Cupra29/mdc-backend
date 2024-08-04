import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Patient } from '.prisma/client';

@Injectable()
export class PatientsService {
  // Genera un constructor para inyectar el servicio de Prisma
  constructor(private prisma: PrismaService) {}

  // Define un metodo para obtener todos los pacientes
  async getAllPatients(): Promise<Patient[]> {
    return this.prisma.patient.findMany();
  }

  // Define un metodo para obtener un paciente por su id
  async getPatientById(id: string): Promise<Patient> {
    // Encuentra un paciente por su id
    const patientFound = await this.prisma.patient.findUnique({
      where: { id },
    });

    if (!patientFound) {
      throw new NotFoundException(`Patient with ${id} not found`);
    }
    return patientFound;
  }

  // Define un metodo para crear un paciente
  async createPatient(data: Patient): Promise<Patient> {
    return this.prisma.patient.create({ data });
  }

  // Define un metodo para actualizar un paciente
  async updatePatient(id: string, data: Patient): Promise<Patient> {
    try {
      return this.prisma.patient.update({ where: { id }, data });
    } catch (error) {
      throw new NotFoundException(`Patient with id: ${id} not found`);
    }
  }
  // Define un metodo para eliminar un paciente
  async deletePatient(id: string): Promise<Patient> {
    // Ejecuta un bloque try/catch para manejar errores
    try {
      // Elimina un paciente por su id
      return await this.prisma.patient.delete({ where: { id } });
    } catch (error) {
      throw new NotFoundException(`Patient whit id ${id} not found`);
    }
  }
}
