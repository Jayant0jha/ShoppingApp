import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipie } from '../../recipie.model';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.scss']
})
export class RecipieItemComponent implements OnInit {
  @Input() recipie: Recipie;
  @Output() recipieSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    this.recipieSelected.emit();
  }
}
