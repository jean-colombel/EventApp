import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  url = 'https://localhost:7217/api/events';

  headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

  constructor(private readonly httpClient: HttpClient) { }

  addNewEvent(event: Event) {
    return this.httpClient
      .post<Event>(this.url, event, { headers: this.headers })
  }

  getEvents() {
    return this.httpClient.get<Event[]>(this.url).pipe()
  }
}
