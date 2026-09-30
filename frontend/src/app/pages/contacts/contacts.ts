import { Component, inject } from '@angular/core';
import { ContactsApi } from '../../core/services/contacts-api';
import { toSignal } from '@angular/core/rxjs-interop';
import { Loader } from '../../shared/loader/loader';
import { ContactCard } from '../../shared/contact-card/contact-card';

@Component({
  selector: 'app-contacts',
  imports: [Loader, ContactCard],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
})
export class Contacts {
  private contactsApi: ContactsApi = inject(ContactsApi);
  contacts = toSignal(this.contactsApi.getContacts())
}
