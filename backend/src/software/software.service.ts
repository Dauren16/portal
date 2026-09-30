import { Injectable } from '@nestjs/common';
import { ISoftware } from './software.interface';

@Injectable()
export class SoftwareService {
  private softwares: ISoftware[] = [
    {
      id: 1,
      title: 'Tumar/Cryptosocket',
      img: 'cryptosocket.svg',
      fileName: 'SetupCSPv6.3.4.02.exe'
    },
    {
      id: 2,
      title: 'Tumar для Windows 7',
      img: 'tumar.ico',
      fileName: 'UpdateCSPv6.3.4.02_ucgo_release_windows7.exe'
    },
    {
      id: 3,
      title: 'NCALayer 64-bit',
      img: 'ncalayer.png',
      fileName: 'NCALayerInstall_x86.exe'
    },
    {
      id: 4,
      title: 'NCALayer 32-bit',
      img: 'ncalayer.png',
      fileName: 'NCALayerInstall_x86.exe'
    },
    {
      id: 5,
      title: 'Панель управления KAZTOKEN',
      img: 'kaztoken.png',
      fileName: 'KAZTOKEN_for_Windows_v4.6.4.0.exe'
    },
    {
      id: 6,
      title: 'CERTEX VPN Client',
      img: 'certex.ico',
      fileName: '#'
    },
    {
      id: 7,
      title: 'Chrome x64',
      img: 'chrome.png',
      fileName: '#'
    },
    {
      id: 8,
      title: 'Firefox x64',
      img: 'firefox.png',
      fileName: '#'
    }
    
  ]

  findAll(): ISoftware[] {
    return this.softwares
  }
}
