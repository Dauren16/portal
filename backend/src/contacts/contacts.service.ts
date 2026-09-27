import { Injectable } from '@nestjs/common';
import { IContact } from './contacts.interface';

@Injectable()
export class ContactsService {
  private contacts: IContact[] = [
    {
      id: 1,
      title: 'ОДО, ЕСЭДО, е-Обращения',
      emails: ['sd_odozko@nitec.kz', 'esedozko@nitec.kz', 'sd_eotnish_zkomio@nitec.kz'],
      phones: ['+7 (7112) 97-20-30', '+7 (7112) 97-20-33', '+7 (7112) 97-20-41'],
      forms: [ 
        { title: 'Форма заявки ОДО', fileName: 'ODO_form.docx' },
        { title: 'Форма заявки ЕСЭДО', fileName: 'ESEDO_form.docx' },
        { title: 'Форма заявки е-Обращения', fileName: 'eOtinish_form.docx'}
      ]
    },
    {
      id: 2,
      title: 'ГБД е-Лицензирование, ИИС ЦОН, ЭПС, Адресный регистр',
      emails: ['zkonit07@gmail.com'],
      phones: ['+7 (7112) 97-20-35', '+7 (7112) 97-20-36'],
      forms: [
        { title: 'Форма заявки ИИС ЦОН', fileName: 'IISCON_form.docx' },
        { title: 'ИС Адресный регистр разблокировка', fileName: 'AR_unlock.docx' },
        { title: 'ИС Адресный регистр удаление', fileName: 'AR_delete.docx' },
        { title: 'ИС Адресный регистр доступ', fileName: 'AR_open.docx' }
      ]
    },
    {
      id: 3,
      title: 'Связь',
      emails: ['701701@nitec.kz'],
      phones: ['+7 (7112) 97-20-26', '+7 (7172) 701-701', '8 8000 8000 37'],
      forms: [
        { title: 'Организация доступа к ЕТС ГО', fileName: 'form_ETS.doc'}
      ]
    }
  ]

  findAll(): IContact[] {
    return this.contacts
  }
}
