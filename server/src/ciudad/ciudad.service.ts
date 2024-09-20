import { Injectable } from '@nestjs/common';
import { Ciudad } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CiudadService {
  constructor(private prisma: PrismaService) {}

  async getAllCiudades(): Promise<Ciudad[]> {
    return await this.prisma.ciudad.findMany();
  }

  async getCiudadById(id: number): Promise<Ciudad> {
    return await this.prisma.ciudad.findUnique({
      where: {
        id,
      },
    });
  }

  async createCiudad(data: Ciudad): Promise<Ciudad> {
    return await this.prisma.ciudad.create({
      data,
    });
  }

  async updateCiudad(id: number, data: Ciudad): Promise<Ciudad> {
    return await this.prisma.ciudad.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteCiudad(id: number): Promise<Ciudad> {
    return await this.prisma.ciudad.delete({
      where: {
        id,
      },
    });
  }
}
