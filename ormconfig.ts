import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import * as dotenv from 'dotenv';
import dotenv from 'dotenv';
import { Users } from './src/entities/Users';
import { ChannelChats } from './src/entities/ChannelChats';
import { ChannelMembers } from './src/entities/ChannelMembers';
import { Channels } from './src/entities/Channels';
import { DMs } from './src/entities/DMs';
import { Mentions } from './src/entities/Mentions';
import { WorkspaceMembers } from './src/entities/WorkspaceMembers';
import { Workspaces } from './src/entities/Workspaces';

dotenv.config();

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  // port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    Users,
    ChannelChats,
    ChannelMembers,
    Channels,
    DMs,
    Mentions,
    WorkspaceMembers,
    Workspaces,
  ],
  // entities: ['entities/*.js'],
  migrations: [__dirname + '/src/migrations/*.ts'],
  cli: { migrationsDir: 'src/migrations' },
  // autoLoadEntities: true,
  // charset: 'utf8mb4',
  synchronize: true, // 미리 직접만들고 디비로 옮길때 true, 한번만들고 false로 변경!!
  logging: true,
  keepConnectionAlive: true,
};

export = config;
