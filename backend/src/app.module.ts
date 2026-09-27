import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SystemsModule } from './systems/systems.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SoftwareModule } from './software/software.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), '..', 'storage', 'downloads'),
      serveRoot: '/downloads',
    }),
    SystemsModule,
    SoftwareModule,
    ContactsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
