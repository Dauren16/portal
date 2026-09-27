import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Softwares } from './pages/softwares/softwares';
import { Contacts } from './pages/contacts/contacts';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'softwares', component: Softwares },
  { path: 'contacts', component: Contacts }
];
