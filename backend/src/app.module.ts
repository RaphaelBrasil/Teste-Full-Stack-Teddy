// app.module.ts
import { Module } from '@nestjs/common';
import { ClientsModule } from './modules/clients/clients.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [ClientsModule, DatabaseModule],
})
export class AppModule {}
