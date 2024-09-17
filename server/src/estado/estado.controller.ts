import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EstadoService } from './estado.service';
import { Estado } from '@prisma/client';

@Controller('estado')
export class EstadoController {
  constructor(private readonly estadoService: EstadoService) {}

  @Get()
  async getAllEstados(): Promise<Estado[]> {
    return await this.estadoService.getAllEstados();
  }

  @Post()
  async createEstado(@Body() data: Estado): Promise<Estado> {
    try {
      return await this.estadoService.createEstado(data);
    } catch (error) {
      throw new HttpException(error, 409);
    }
  }

  @Get(':id')
  async getEstadoById(@Param('id') id: string): Promise<Estado> {
    const estadoFound = await this.estadoService.getEstadoById(Number(id));

    if (!estadoFound)
      throw new NotFoundException(
        `El estado con el id ${id} no ha sido encontrado.`,
      );

    return estadoFound;
  }

  @Delete(':id')
  async deleteEstado(@Param('id') id: string): Promise<Estado> {
    try {
      return await this.estadoService.deleteEstado(Number(id));
    } catch (error) {
      throw new NotFoundException(
        `El estado con el id ${id} no ha sido encontrado.`,
      );
    }
  }

  @Put(':id')
  async updateEstado(
    @Param('id') id: string,
    @Body() data: Estado,
  ): Promise<Estado> {
    try {
      return await this.estadoService.updateEstado(Number(id), data);
    } catch (error) {
      throw new NotFoundException(
        `El estado con el id ${id} no ha sido encontrado.`,
      );
    }
  }
}
