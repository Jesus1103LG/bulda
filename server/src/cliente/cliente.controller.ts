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
      const emailFound = await this.clienteService.getClienteByEmail(
        data.email,
      );
      const phoneNumberFound =
        await this.clienteService.getClienteByPhoneNumber(data.phoneNumber);
      const cedulaFound = await this.clienteService.getClienteByCedula(
        data.cedula,
      );

      if (cedulaFound)
        throw new HttpException(
          `La cedula de identidad ${data.cedula} ya existe.`,
          409,
        );
      if (emailFound)
        throw new HttpException(
          `El correo electronico  ${data.email} ya existe.`,
          409,
        );
      if (phoneNumberFound)
        throw new HttpException(
          `El numero de telefono  ${data.phoneNumber} ya existe.`,
          409,
        );

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

  @Get(':email')
  async getClienteByEmail(@Param('email') email: string) {
    const emailFound = await this.clienteService.getClienteByEmail(email);

    if (!emailFound)
      throw new NotFoundException(
        `EL cliente con el correo ${email} no ha sido encontrado.`,
      );

    return emailFound;
  }

  @Get(':phoneNumber')
  async getClienteByPhoneNumber(@Param('phoneNumber') phoneNumber: string) {
    const phoneNumberFound =
      await this.clienteService.getClienteByPhoneNumber(phoneNumber);

    if (!phoneNumberFound)
      throw new NotFoundException(
        `EL cliente con el numero de telefono ${phoneNumber} no ha sido encontrado.`,
      );

    return phoneNumberFound;
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
