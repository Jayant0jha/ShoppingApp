import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipie } from '../recipie.model';
// import {  } from 'events';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.scss']
})

export class RecipieListComponent implements OnInit {
  @Output() recipieWasSelected = new EventEmitter<Recipie>();
  recipies: Recipie[] = [
    new Recipie('A Test Recipie', 'New Recipie', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/5/14/1/WU1902_Italian-Chicken-Sheet-Pan-Supper_s4x3.jpg.rend.hgtvcom.826.620.suffix/1526332485385.jpeg'),
    new Recipie('Another Recipie', 'New Recipie', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/5/14/1/WU1902_Italian-Chicken-Sheet-Pan-Supper_s4x3.jpg.rend.hgtvcom.826.620.suffix/1526332485385.jpeg')

  ];

constructor() { }

  ngOnInit() {
  }

  onRecipieSelected(recipie: Recipie){
    this.recipieWasSelected.emit(recipie);
  }
}
