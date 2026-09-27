import { Controller, Get } from '@nestjs/common';
import { SoftwareService } from './software.service';
import { ISoftware } from './software.interface';

@Controller('softwares')
export class SoftwareController {
  constructor(private readonly softwaresServices: SoftwareService) {}

  @Get()
  findAll(): ISoftware[] {
    return this.softwaresServices.findAll()
  }
}
