import {
  BadRequestException,
  Body,
  Controller, Delete, Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  Res,
  UploadedFile,
  UseInterceptors,
  Response
}from '@nestjs/common';
import { CasaService } from './casa.service';
import { FindManyOptions, Like } from 'typeorm';
import { BuscarDto } from 'src/casa/dto/buscar.dto';
import { Casa } from './casa.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { CasaEditarDto } from './dto/casa-editar.dto';
import { CrearEditarBaseDto } from 'src/casa/dto/crear-editar.base.dto';
import { createReadStream } from 'fs';
import { join } from 'path';
  
  @Controller('api/casa')
  export class CasaController {
      constructor(
          private readonly casaService: CasaService
      ) {
  
      }
      @Get()
      obtener(
        @Query() parametrosConsulta:BuscarDto,
      ){
        const objetoBusqueda: FindManyOptions<Casa> = {};
        if (parametrosConsulta.nombre) {
            objetoBusqueda.where = {
                nombre: Like(`%${parametrosConsulta.nombre}%`),
            };
        }
        return this.casaService.obtenerTodos(objetoBusqueda);
      }
      @Post()
      crearUno(
        @Body() parametrosCuerpo: CrearEditarBaseDto
      ){
        return this.casaService.crearUno(parametrosCuerpo);
      }
      @Get(':id')
      async obtenerUno(
        @Param('id') id: string
      ){
        const numeroCasteado = Number(id);
        const numeroValidado = !isNaN(numeroCasteado);
        if(numeroValidado){
          const registroEcontrado = await this.casaService.obtenerUnoPorId(numeroCasteado);
          if(registroEcontrado !== null){
            return registroEcontrado;
          }
          throw new NotFoundException('Registro no encontrado');
        } else {
          throw new BadRequestException('No es un id válido');
        }
      }
      @Put(':id')
      actualizarUnoPorId(
        @Body() parametrosCuerpo: CasaEditarDto,
        @Param('id') id: string
      ){
        try {
          return this.casaService.actualizarUnoPorId(
            parametrosCuerpo,
            +id,
          );
        } catch (e) {
          throw new NotFoundException('Registro no encontrado, o error del servidor');
        }
      }
      @Delete(':id')
      async eliminarUnoPorId(
        @Param('id') id: string
      ){
        const response = await this.casaService.eliminarUnoPorId(+id);
        if (response.affected === 1) {
          return {
            mensaje: 'Eliminado correctamente',
          };
        }
        throw new BadRequestException('No se encontro el registro');
      }
      @Post('uploadFile/:id')
      @UseInterceptors(FileInterceptor('archivoASubir', { dest: './uploads' }))
      async subirArchivo(
        @UploadedFile() file: Express.Multer.File,
        @Param('id') id: string,
      ) {
        if (file.size <= 1000 * 1024 * 5) {
          await this.casaService.actualizarArchivoPorId({
            fileContentType: file.mimetype,
            fileID: file.filename,
            filename: file.originalname,
          }, +id);
          return {
            mensaje: 'Archivo subido correctamente',
            ...file,
          }
        } else {
          throw new BadRequestException('El archivo es muy grande, debe ser menor a 5MB');
        }
      }
      @Get('streamDownloadFile/:id')
      async stream(
          @Res() response: any,
          @Param('id') id: string,
      ) {
          const respuestaCasa = await this.casaService.obtenerUnoPorId(+id);
          const file = createReadStream(join(process.cwd(), './uploads/' + respuestaCasa?.fileId));
          response.contentType(respuestaCasa?.fileContentType);
          response.setHeader('Content-Disposition', `attachment; filename="${respuestaCasa?.fileName}"`);
          file.pipe(response as any);
      }
  }