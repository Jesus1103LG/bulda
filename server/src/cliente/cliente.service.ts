import { Injectable } from '@nestjs/common';
import { Cliente } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}

  async getAllClientes(): Promise<Cliente[]> {
    return await this.prisma.cliente.findMany();
  }

  async getClienteByCedula(cedula: string): Promise<Cliente> {
    return await this.prisma.cliente.findUnique({
      where: {
        cedula,
      },
    });
  }

  async createCliente(data: Cliente): Promise<Cliente> {
    return await this.prisma.cliente.create({
      data,
    });
  }

  async updateCliente(cedula: string, data: Cliente): Promise<Cliente> {
    return await this.prisma.cliente.update({
      where: {
        cedula,
      },
      data,
    });
  }
  async deleteCliente(cedula: string): Promise<Cliente> {
    return await this.prisma.cliente.delete({
      where: {
        cedula,
      },
    });
  }
}
