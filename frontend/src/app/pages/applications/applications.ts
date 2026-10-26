import { Component, inject } from '@angular/core';
import { ApplicationsApi } from '../../core/services/applications-api';
import { toSignal } from '@angular/core/rxjs-interop';
import { Loader } from '../../shared/loader/loader';
import { ApplicationCard } from '../../shared/application-card/application-card';

@Component({
  selector: 'app-applications',
  imports: [Loader, ApplicationCard],
  templateUrl: './applications.html',
  styleUrl: './applications.scss',
})
export class Applications {
  private applicationsApi: ApplicationsApi = inject(ApplicationsApi);
  applications = toSignal(this.applicationsApi.getApplications());
}
