import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageRefService } from '../../services/local-storage-ref.service';
import { EventInterface } from '../models/event.model';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl: string = 'http://localhost:3000/api/event';
  private localStorage: Storage;

  constructor(
        private http: HttpClient,
        private localStorageRef: LocalStorageRefService
  ) 
  { 
      this.localStorage = localStorageRef.localStorage;
  }


  apiCallCreateEvent(newEvent : EventInterface): any {
      let jsonStringEventObject = JSON.stringify(newEvent);
      console.log(jsonStringEventObject);
  }

}