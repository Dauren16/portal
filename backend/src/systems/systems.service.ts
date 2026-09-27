import { Injectable } from '@nestjs/common';
import { ISystem } from './systems.interface';

@Injectable()
export class SystemsService {
  private systems: ISystem[] = [
    {
      id: 1,
      title: 'ОДО',
      image: 'documentolog.svg',
      link: 'https://bko.qujat.gov.kz'
    },
    {
      id: 2,
      title: 'ИС е-Обращения',
      image: 'eotinish.png',
      link: 'https://eotinish.gov.kz'
    },
    {
      id: 3,
      title: 'ГБД е-Лицензирование',
      image: 'e-license.png',
      link: 'https://arm.elicens.kz',
    },
    {
      id: 4,
      title: 'УЦГО',
      image: 'ucgo.png',
      link: 'https://ucgo.gov.kz'
    },
    {
      id: 5,
      title: 'ЭПС',
      image: 'eps.svg',
      link: 'https://eps.gov.kz'
    },
    {
      id: 6,
      title: 'Аналитический центр',
      image: 'a-center.png',
      link: '#'
    },
    {
      id: 7,
      title: 'Адилет',
      image: 'adilet.png',
      link: '#'
    },
    {
      id: 8,
      title: 'е-Кызмет',
      image: 'eqyzmet.png',
      link: '#'
    },
    {
      id: 9,
      title: 'е-Совбез',
      image: 'e-sobes.png',
      link: '#'
    },
    {
      id: 10,
      title: 'ИИС ЦОН',
      image: 'iiccon.png',
      link: '#'
    },
    {
      id: 11,
      title: 'е-Архив',
      image: 'e-archive.png',
      link: '#'
    },
    {
      id: 12,
      title: 'ИПГО',
      image: 'ipgo.png',
      link: '#'
    }
  ]

  findAll(): ISystem[] {
    return this.systems;
  }
  
}
