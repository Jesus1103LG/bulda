import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { EstadoModule } from './estado/estado.module';
import { CiudadModule } from './ciudad/ciudad.module';

@Module({
  imports: [ClienteModule, EstadoModule, CiudadModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
