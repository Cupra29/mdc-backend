import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';
import { PrismaService } from 'src/prisma.service';

@Module({
  // Define the controllers and services in the module
  controllers: [PatientsController],
  providers: [PatientsService, PrismaService],
})

// Agrega la interfaz NestModule para poder configurar middleware en el módulo
export class PatientModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Aplica el middleware LoggerMiddleware a las rutas especificadas
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(
        {
          path: '/patients',
          method: RequestMethod.GET,
        },
        { path: '/patients', method: RequestMethod.POST },
      )
      // Aplica el middleware AuthMiddleware a todas las rutas de 'patients'
      .apply(AuthMiddleware)
      .forRoutes('patients');
  }
}
