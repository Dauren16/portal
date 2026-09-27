import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SystemsApi } from '../../core/services/systems-api';
import { Loader } from '../../shared/loader/loader';

@Component({
  selector: 'app-home',
  imports: [Loader],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private systemApi: SystemsApi = inject(SystemsApi)
  systems = toSignal(this.systemApi.getSystems())
}
