import { Component, OnInit, Input } from '@angular/core';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.scss']
})
export class RecipieDetailComponent implements OnInit {
  @Input() recipie: Recipie;
  constructor() { }

  ngOnInit() {
  }

}
