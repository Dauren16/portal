import { Controller, Get } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Contact } from '@prisma/client';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  findAll(): Promise<Contact[]> {
    return this.contactsService.findAll();
  }
}
