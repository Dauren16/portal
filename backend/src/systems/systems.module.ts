import { Module } from '@nestjs/common';
import { SystemsController } from './systems.controller';
import { SystemsService } from './systems.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SystemsController],
  providers: [SystemsService]
})
export class SystemsModule {}
