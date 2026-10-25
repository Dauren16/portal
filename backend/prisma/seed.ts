import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.system.deleteMany();

  await prisma.system.createMany({
    data: [
      { title: 'ОДО', image: 'documentolog.svg', link: 'https://bko.qujat.gov.kz' },
      { title: 'ИС е-Обращения', image: 'eotinish.png', link: 'https://eotinish.gov.kz' },
      { title: 'ГБД е-Лицензирование', image: 'e-license.png', link: 'https://arm.elicens.kz'},
      { title: 'УЦГО', image: 'ucgo.png', link: 'https://ucgo.gov.kz'},
      { title: 'ЭПС', image: 'eps.svg', link: 'https://eps.gov.kz'},
      { title: 'ИИС ЦОН', image: 'iiscon.png', link: 'https://web.iiscon.kz'},
      { title: 'ИПГО', image: 'ipgo.png', link: 'https://ipgo.gov.kz'},
      { title: 'Адресный регистр', image: 'ar.jpg', link: 'https://10.245.12.5/ar/'},
      { title: 'E-Qyzmet', image: 'eqyzmet.png', link: 'http://10.50.192.37/eqyzmet/'},
      { title: 'Единая информационная система социально-трудовой сферы', image: 'eists.png', link: 'https://10.61.164.133/#!/login'},
      { title: 'АИС «Е-Собес»', image: 'e-sobes.png', link: 'https://10.61.164.116/#!/login'},
      { title: 'Единый электронный архив документов', image: 'e-archive.png', link: 'https://e-archive.gov.kz/'},
      { title: 'ИПС «Әділет»', image: 'adilet.png', link: 'http://10.61.42.188'},
      { title: 'Аналитический центр', image: 'a-center.png', link: 'https://ac.kgp.kz/#/type-systems'},
    ],
  });

  console.log('Seed: системы добавлены');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());