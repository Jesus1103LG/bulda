import { Module } from '@nestjs/common';
import { CiudadService } from './ciudad.service';
import { CiudadController } from './ciudad.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CiudadController],
  providers: [CiudadService],
  imports: [PrismaModule],
})
export class CiudadModule {}
