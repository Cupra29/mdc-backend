import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePatientDto {
  // Define las propiedades del objeto que se espera en el cuerpo de la solicitud
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsNumber()
  age: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
