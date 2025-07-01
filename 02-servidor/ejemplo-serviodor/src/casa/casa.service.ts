import { Inject, Injectable } from '@nestjs/common';
import { Casa } from './casa.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class CasaService {
    constructor(
        @Inject('CASA_REPOSITORY')
        private photoRepository: Repository<Casa>,
    ){
        
    }
    obtenerTodos(
        options?: FindManyOptions<Casa> | undefined
    ){
        return this.photoRepository.find(options);
    }
    crearUno(nombre: string, valor: number, imagenURL: string) {
        const nuevaInstance = this.photoRepository.create();
        nuevaInstance.nombre = nombre;
        nuevaInstance.valor = valor;
        nuevaInstance.imagenURL = imagenURL;
        return this.photoRepository.save(nuevaInstance);
    }
}