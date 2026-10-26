import { Controller, Get } from '@nestjs/common';
import { SoftwareService } from './software.service';
import type { Software } from 'src/generated/prisma/client';

@Controller('softwares')
export class SoftwareController {
  constructor(private readonly softwaresServices: SoftwareService) {}

  @Get()
  findAll(): Promise<Software[]> {
    return this.softwaresServices.findAll()
  }
}
