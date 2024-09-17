import { Injectable } from '@nestjs/common';
import { Estado } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EstadoService {
  constructor(private prisma: PrismaService) {}

  async getAllEstados(): Promise<Estado[]> {
    return await this.prisma.estado.findMany();
  }

  async getEstadoById(id: number): Promise<Estado> {
    return await this.prisma.estado.findUnique({
      where: {
        id,
      },
    });
  }

  async createEstado(data: Estado): Promise<Estado> {
    return await this.prisma.estado.create({
      data,
    });
  }

  async updateEstado(id: number, data: Estado): Promise<Estado> {
    return await this.prisma.estado.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteEstado(id: number): Promise<Estado> {
    return await this.prisma.estado.delete({
      where: {
        id,
      },
    });
  }
}
