import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { EstadoModule } from './estado/estado.module';

@Module({
  imports: [ClienteModule, EstadoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
