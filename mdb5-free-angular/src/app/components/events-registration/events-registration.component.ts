import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-events-registration',
  templateUrl: './events-registration.component.html',
  styleUrls: ['./events-registration.component.less']
})
export class EventsRegistrationComponent implements OnInit {
  name = new FormControl();
  description = new FormControl();
  startDate = new FormControl();
  endDate = new FormControl();

  errorMessage: string;
  displayErrorMessage = false;

  @Output() newEventRegistered = new EventEmitter<Event>();
  constructor() { }

  ngOnInit(): void {
  }

  registerNewEvent() {
    if (this.startDate.value > this.endDate.value) {
      this.errorMessage = "Please enter valid date times."
      this.displayErrorMessage = true;
      return;
    }

    this.displayErrorMessage = false;

    this.newEventRegistered.emit({
      name: this.name.value,
      description: this.description.value,
      startDate: this.startDate.value,
      endDate: this.endDate.value,
    })

    this.name.reset();
    this.description.reset();
    this.startDate.reset();
    this.endDate.reset();
  }
}
