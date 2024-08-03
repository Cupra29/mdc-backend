import { Module } from '@nestjs/common';
import { PatientModule } from './patients/patients.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { IndexController } from './index/index.controller';

@Module({
  imports: [PatientModule, ProjectsModule, AuthModule, UsersModule],
  controllers: [IndexController],
})
export class AppModule {}
