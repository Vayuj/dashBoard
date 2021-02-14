import { Component, OnInit } from '@angular/core';
import { Icon } from '../model'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  icon:Array<Icon> = [
    {
      class:"fa fa-bell fa-fw",
      span:"3+"
    },
    {
      class:"fa fa-envelope fa-fw",
      span:"7"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
