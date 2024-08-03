import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

// Decorador Injectable para que el middleware pueda ser inyectado en otros componentes
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  // Funcion que se ejecuta cuando se recibe una solicitud
  use(req: Request, res: Response, next: () => void) {
    console.log(req.originalUrl);

    next();
  }
}
