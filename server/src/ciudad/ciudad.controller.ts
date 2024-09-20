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
import { CiudadService } from './ciudad.service';
import { Ciudad } from '@prisma/client';

@Controller('ciudad')
export class CiudadController {
  constructor(private readonly ciudadService: CiudadService) {}

  @Get()
  async getAllCiudades(): Promise<Ciudad[]> {
    return await this.ciudadService.getAllCiudades();
  }

  @Post()
  async createCiudad(@Body() data: Ciudad): Promise<Ciudad> {
    try {
      return await this.ciudadService.createCiudad(data);
    } catch (error) {
      throw new HttpException(error, 409);
    }
  }

  @Get(':id')
  async getCiundadById(@Param('id') id: string): Promise<Ciudad> {
    const ciudadFound = this.ciudadService.getCiudadById(Number(id));

    if (!ciudadFound)
      throw new NotFoundException(
        `La ciudad con el id ${id} no ha sido encontrada.`,
      );

    return ciudadFound;
  }

  @Delete(':id')
  async deleteCiudad(@Param('id') id: string): Promise<Ciudad> {
    try {
      return await this.ciudadService.deleteCiudad(Number(id));
    } catch (error) {
      throw new NotFoundException(
        `La ciudad con el id ${id} no ha sido encontrada.`,
      );
    }
  }

  @Put(':id')
  async updateCiudad(
    @Param('id') id: string,
    @Body() data: Ciudad,
  ): Promise<Ciudad> {
    try {
      return await this.ciudadService.updateCiudad(Number(id), data);
    } catch (error) {
      throw new NotFoundException(
        `La ciudad con el id ${id} no ha sido encontrada.`,
      );
    }
  }
}
