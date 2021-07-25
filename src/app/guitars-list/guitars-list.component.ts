import { Component, Input, OnInit } from '@angular/core';
import { Guitar } from '../models/guitar.model';

@Component({
  selector: 'app-guitars-list',
  templateUrl: './guitars-list.component.html',
  styleUrls: ['./guitars-list.component.scss'],
})
export class GuitarsListComponent implements OnInit {
  @Input() guitars: Guitar[] = [];
  constructor() {}

  ngOnInit(): void {}
}
