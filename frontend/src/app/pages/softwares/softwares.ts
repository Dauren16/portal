import { Component, inject } from '@angular/core';
import { SoftwaresApi } from '../../core/services/softwares-api';
import { toSignal } from '@angular/core/rxjs-interop';
import { Loader } from '../../shared/loader/loader';
import { SoftwareCard } from '../../shared/software-card/software-card';

@Component({
  selector: 'app-softwares',
  imports: [Loader, SoftwareCard],
  templateUrl: './softwares.html',
  styleUrl: './softwares.scss',
})
export class Softwares {
  private softwaresApi: SoftwaresApi = inject(SoftwaresApi)
  softwares = toSignal(this.softwaresApi.getSoftwares())
}
