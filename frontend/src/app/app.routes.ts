import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Softwares } from './pages/softwares/softwares';
import { Contacts } from './pages/contacts/contacts';
import { Applications } from './pages/applications/applications';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'softwares', component: Softwares },
  { path: 'applications', component: Applications },
  { path: 'contacts', component: Contacts }
];
