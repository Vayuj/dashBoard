import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardInfo:Partial<Card> = {};
  constructor() { }

  ngOnInit(): void {
  }

}
