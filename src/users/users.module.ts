import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})

// Agrega la interfaz NestModule para poder configurar middleware en el módulo
export class UsersModule implements NestModule {
  // Aplica el middleware LoggerMiddleware a las rutas especificadas
  configure(consumer: MiddlewareConsumer) {
    // Si quisiera aplicar el middleware a todas las rutas, debería usar '*' en lugar de un objeto de ruta o el nombre de la ruta general (podria ser 'users')
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(
        {
          path: '/users',
          method: RequestMethod.GET,
        },
        { path: '/users', method: RequestMethod.POST },
      )
      // Aplica el middleware AuthMiddleware a todas las rutas de 'users'
      .apply(AuthMiddleware)
      .forRoutes('users');
  }
}
