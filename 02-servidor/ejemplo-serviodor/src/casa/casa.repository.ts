import { DataSource } from 'typeorm';
import { Casa } from './casa.entity';

export const photoProviders = [
  {
    provide: 'CASA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource
    .getRepository(Casa),
    inject: ['DATA_SOURCE'],
  },
];
 