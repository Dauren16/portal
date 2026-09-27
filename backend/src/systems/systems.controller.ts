import { Controller, Get } from '@nestjs/common';
import { SystemsService } from './systems.service';
import { ISystem } from './systems.interface';

@Controller('systems')
export class SystemsController {

  constructor(private readonly systemsService: SystemsService) {}

  @Get()
  findAll(): ISystem[] {
    return this.systemsService.findAll();
  }
}
