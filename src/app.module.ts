import { ConfigModule } from './modules/config/config.module';
import { DatabaseModule } from './database/database.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ConfigModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
