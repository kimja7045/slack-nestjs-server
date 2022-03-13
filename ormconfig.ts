import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';
import { ConfigModule } from '@nestjs/config';

dotenv.config();
console.log(process.env.DB_USERNAME);

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  // port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  // entities: [ChannelChats],
  entities: ['entities/*.js'],
  migrations: [__dirname + '/src/migrations/*.ts'],
  cli: { migrationsDir: 'src/migrations' },
  // autoLoadEntities: true,
  // charset: 'utf8mb4',
  synchronize: true, // 미리 직접만들고 디비로 옮길때 true, 한번만들고 false로 변경!!
  logging: true,
  keepConnectionAlive: true,
};

export = config;
