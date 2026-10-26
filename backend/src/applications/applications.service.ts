import { Injectable } from '@nestjs/common';
import { Application } from 'src/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ApplicationsService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll(): Promise<Application[]> {
    return this.prismaService.application.findMany({
      orderBy: { id: 'asc' }
    })
  }
}
