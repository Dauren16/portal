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
      { title: 'Единая ИС социально-трудовой сферы', image: 'eists.png', link: 'https://10.61.164.133/#!/login'},
      { title: 'АИС «Е-Собес»', image: 'e-sobes.png', link: 'https://10.61.164.116/#!/login'},
      { title: 'Единый электронный архив документов', image: 'e-archive.png', link: 'https://e-archive.gov.kz/'},
      { title: 'ИПС «Әділет»', image: 'adilet.png', link: 'http://10.61.42.188'},
      { title: 'Аналитический центр', image: 'a-center.png', link: 'https://ac.kgp.kz/#/type-systems'},
    ],
  });

  await prisma.software.deleteMany();

  await prisma.software.createMany({
    data: [
      { title: 'Tumar/Cryptosocket', image: 'cryptosocket.svg', fileName: 'SetupCSPv6.3.4.02.exe'},
      { title: 'Tumar для Windows 7', image: 'tumar.ico', fileName: 'UpdateCSPv6.3.4.02_ucgo_release_windows7.exe' },
      { title: 'NCALayer 64-bit', image: 'ncalayer.png', fileName: 'NCALayerInstall_x64.exe' },
      { title: 'NCALayer 32-bit', image: 'ncalayer.png', fileName: 'NCALayerInstall_x86.exe' },
      { title: 'Панель управления KAZTOKEN', image: 'kaztoken.png', fileName: 'KAZTOKEN_for_Windows_v4.6.4.0.exe' },
      { title: 'CERTEX VPN Client', image: 'certex.ico', fileName: 'SetupCertexVpnClient_bspd_10.61.40.56_2.1.2.4.exe' },
      { title: 'Chrome x64', image: 'chrome.png', fileName: 'ChromeStandaloneSetup64.exe' },
      { title: 'Firefox x64', image: 'firefox.png', fileName: 'Firefox Setup 120.0.1 x64.exe' },
    ]
  })

  await prisma.application.deleteMany();
  await prisma.application.createMany({
    data: [
      { title: 'Форма заявки ОДО', fileName: 'ODO_form.docx' },
      { title: 'Форма заявки ЕСЭДО', fileName: 'ESEDO_form.doc' },
      { title: 'Форма заявки E-Обращения', fileName: 'E-Otinish_form.docx' },
      { title: 'Форма заявки ИИС ЦОН', fileName: 'IISCON_form.docx' },
      { title: 'ИС Адресный регистр - Разблокировка', fileName: 'AR_unlock.docx' },
      { title: 'ИС Адресный регистр - Удаление', fileName: 'AR_delete.docx' },
      { title: 'ИС Адресный регистр - Доступ', fileName: 'AR_open.docx' },
      { title: 'Организация доступа к ЕТС ГО', fileName: 'form_ETS.doc' },
    ]
  })

  await prisma.contact.deleteMany();
  await prisma.contact.createMany({
    data:  [
      { title: 'ОДО, ЕСЭДО, е-Обращения', emails: ['sd_odozko@nitec.kz', 'esedozko@nitec.kz', 'sd_eotnish_zkomio@nitec.kz'], phones: ['+7 (7112) 97-20-30', '+7 (7112) 97-20-33', '+7 (7112) 97-20-41'] },
      { title: 'ГБД е-Лицензирование, ИИС ЦОН, ЭПС, Адресный регистр', emails: ['zkonit07@gmail.com'], phones: ['+7 (7112) 97-20-35', '+7 (7112) 97-20-36'] },
      { title: 'Связь', emails: ['701701@nitec.kz'], phones: ['+7 (7112) 97-20-26', '+7 (7172) 701-701', '8 8000 8000 37'] },
    ]
  })

  console.log('Seed: системы добавлены');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());