import { Component } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent {

  events: Event[] = [];

  constructor(private readonly eventService: EventsService) {
    this.eventService.getEvents().pipe().subscribe(e => this.events = e);
  }

  registerNewEvent(event: Event) {
    this.eventService.addNewEvent(event).subscribe(e => this.events = [...this.events, e]);
  }
}
