import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Uso de un pipe de validación global (siempre y cuando existan los respectivos decoradores en los DTO)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Med Data Collective')
    .setDescription('API para la administracion de centros médicos')
    .setVersion('1.0')
    .addTag('med-data-collective')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors(); // Para poner desde que dominio se puede acceder a la API se le agrega un objeto con origin: 'http://localhost:4200' o '*' para todos

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
