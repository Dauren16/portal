import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { System } from '../generated/prisma/client';

@Injectable()
export class SystemsService {
  
  constructor(private readonly prismaService: PrismaService) {}

  findAll(): Promise<System[]> {
    return this.prismaService.system.findMany({
      orderBy: { id: 'asc' }
    })
  }
}
