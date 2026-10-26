import { Injectable } from '@nestjs/common';
import type { Contact } from 'src/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactsService {
  constructor( private readonly prismaService: PrismaService) {}

  findAll(): Promise<Contact[]> {
    return this.prismaService.contact.findMany({
      orderBy: { id: 'asc' }
    })
  }
}
