import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PickListModule } from './components/pick-list/pick-list.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, PickListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-web-component';
  sourceItems = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];
}
