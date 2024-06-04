import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PickListMoveAllToSourceEvent, PickListMoveAllToTargetEvent, PickListMoveToSourceEvent, PickListMoveToTargetEvent } from 'primeng/picklist';

@Component({
  selector: 'app-pick-list',
  standalone: false,
  templateUrl: './pick-list.component.html',
  styleUrl: './pick-list.component.scss'
})
export class PickListComponent {

  @Input() sourceItems: string[] = [];

  @Output() selectedData = new EventEmitter<string[]>();

  targetItems!: string[];

  ngOnInit() { 
    this.targetItems = [];
  }

  onMoveItem(data: PickListMoveToTargetEvent | PickListMoveToSourceEvent | PickListMoveAllToSourceEvent | PickListMoveAllToTargetEvent) {
    this.selectedData.emit(this.targetItems);
  }
}
