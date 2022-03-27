import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.less']
})
export class EventsListComponent implements OnInit {

  @Input() events: Event[] | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.events);
  }

}
