import { Module } from '@nestjs/common';
import { SoftwareController } from './software.controller';
import { SoftwareService } from './software.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SoftwareController],
  providers: [SoftwareService]
})
export class SoftwareModule {}
