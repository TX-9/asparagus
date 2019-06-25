import { Injectable, EventEmitter } from '@angular/core';
import { Schedule } from '../model/schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  scheduleSelected = new EventEmitter<Schedule>();
  private scheules: Schedule[] = [
    new Schedule("lunch", true), new Schedule("dinner", true)
  ];

  constructor() { }

  getSchedules() {
    return this.scheules.slice();
  }

  getSchedule(index: number) {
    return this.scheules[index];
  }
}
