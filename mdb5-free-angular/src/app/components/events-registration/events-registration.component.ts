import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-events-registration',
  templateUrl: './events-registration.component.html',
  styleUrls: ['./events-registration.component.less']
})
export class EventsRegistrationComponent implements OnInit {

  @Output() newEventRegistered = new EventEmitter<Event>();
  constructor() { }

  ngOnInit(): void {
  }

  registerNewEvent() {
    this.newEventRegistered.emit({
      title: 'test title',
      description: 'test description',
      startDate: new Date('December 17, 1995 03:24:00'),
      endDate: new Date('December 17, 1995 03:24:00'),
    })
  }
}
