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
import { ClienteService } from './cliente.service';
import { Cliente } from '@prisma/client';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  async getAllClientes() {
    return await this.clienteService.getAllClientes();
  }

  @Post()
  async createCliente(@Body() data: Cliente) {
    try {
      return await this.clienteService.createCliente(data);
    } catch (error) {
      throw new HttpException(error, 409);
    }
  }

  @Get(':cedula')
  async getClienteByCedula(@Param('cedula') cedula: string) {
    const cedulaFound = await this.clienteService.getClienteByCedula(cedula);

    if (!cedulaFound)
      throw new NotFoundException(
        `EL cliente con la cedula de identidad ${cedula} no ha sido encontrado.`,
      );

    return cedulaFound;
  }

  @Delete(':cedula')
  async deleteCliente(@Param('cedula') cedula: string) {
    try {
      return await this.clienteService.deleteCliente(cedula);
    } catch (error) {
      throw new NotFoundException(
        `EL cliente con la cedula de identidad ${cedula} no ha sido encontrado.`,
      );
    }
  }

  @Put(':cedula')
  async updateCliente(@Param('cedula') cedula: string, @Body() data: Cliente) {
    try {
      return await this.clienteService.updateCliente(cedula, data);
    } catch (error) {
      throw new NotFoundException(
        `EL cliente con la cedula de identidad ${cedula} no ha sido encontrado.`,
      );
    }
  }
}
