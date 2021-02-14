import { Component, OnInit, Input } from '@angular/core';
import {NavLiComp} from '../model';

@Component({
  selector: 'app-li-comp',
  templateUrl: './li-comp.component.html',
  styleUrls: ['./li-comp.component.css']
})
export class LiCompComponent implements OnInit {
  @Input() navBarItem:Partial<NavLiComp>={};
  constructor() { }

  ngOnInit(): void {
  }
}
