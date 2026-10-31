import { Component } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate-pipe';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {}
