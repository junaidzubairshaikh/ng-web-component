import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickListModule  as PrimePickListModule} from 'primeng/picklist';

import { PickListComponent } from './pick-list.component';


@NgModule({
  declarations: [PickListComponent],
  imports: [
    CommonModule,
    PrimePickListModule
  ],
  exports: [PickListComponent]
})
export class PickListModule { }
