import { Controller, Get } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { Application } from 'src/generated/prisma/client';

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationService: ApplicationsService) {}

  @Get()
  findAll(): Promise<Application[]> {
    return this.applicationService.findAll();
  }
}
