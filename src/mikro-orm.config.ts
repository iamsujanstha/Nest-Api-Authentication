import { defineConfig } from '@mikro-orm/core';
import mikroOrmConfig from 'src/configs/db-connections.config';

const MikroOrmDataSource = defineConfig({ ...mikroOrmConfig });

export default MikroOrmDataSource;
