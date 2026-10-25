import { Controller, Get } from '@nestjs/common';
import { SystemsService } from './systems.service';
import type { System } from '../generated/prisma/client';

@Controller('systems')
export class SystemsController {

  constructor(private readonly systemsService: SystemsService) {}

  @Get()
  findAll(): Promise<System[]> {
    return this.systemsService.findAll();
  }
}
