import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import type { Software } from 'src/generated/prisma/client';

@Injectable()
export class SoftwareService {

  constructor(private readonly prismaService: PrismaService) {
    
  }
  

  findAll(): Promise<Software[]> {
    return this.prismaService.software.findMany({
      orderBy: { id: 'asc' }
    })
  }
}
