import { Controller, Get } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { IContact } from './contacts.interface';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  findAll(): IContact[] {
    return this.contactsService.findAll();
  }
}
