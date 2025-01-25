import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

// Load environment variables or provide defaults
const postgresConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  dbName: process.env.DB_NAME || 'postgres',
};

const mikroOrmConfig: Options<PostgreSqlDriver> = {
  dbName: postgresConfig.dbName,
  driver: PostgreSqlDriver,
  host: postgresConfig.host,
  port: postgresConfig.port,
  user: postgresConfig.username,
  password: postgresConfig.password,

  // Entity paths
  entities: ['./**/**/*.entity.js'],
  entitiesTs: ['./**/**/*.entity.ts'],

  // Debugging and migrations
  debug: process.env.NODE_ENV !== 'production', // Enable debug in non-production environments
  migrations: {
    tableName: 'mikro_orm_migrations', // Custom table name for migrations
    path: './dist/migrations',
    pathTs: './src/migrations',
    glob: '!(*.d).{js,ts}', // Match JS and TS files
  },
};

export default mikroOrmConfig;
