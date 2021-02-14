import { Component, OnInit } from '@angular/core';
import { Card } from '../model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  card:Array<Card> = [
    {
      color:"primary",
      title:"Earnings",
      time:{
        isEnabled:true,
        key:"(Monthly)"
      },
      currency:{
        isEnabled:true,
        key:"$"
      },
      num:"40,000",
      bar:false,
      logo:"fa fa-calendar fa-2x text-gray-300"
    },
    {
      color:"success",
      title:"Earnings",
      time:{
        isEnabled:true,
        key:"(Annual)"
      },
      currency:{
        isEnabled:true,
        key:"$"
      },
      num:"215,000",
      bar:false,
      logo:"fa fa-dollar fa-2x text-gray-300"
    },
    {
      color:"warning",
      title:"TASKS",
      time:{
        isEnabled:false,
        key:""
      },
      currency:{
        isEnabled:false,
        key:""
      },
      num:"50",
      bar:true,
      logo:"fa fa-clipboard fa-2x text-gray-300"
    },
    {
      color:"danger",
      title:"Pending Requests",
      time:{
        isEnabled:false,
        key:""
      },
      currency:{
        isEnabled:false,
        key:""
      },
      num:"18",
      bar:false,
      logo:"fa fa-comments fa-2x text-gray-300"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
