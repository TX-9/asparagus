import { Injectable, EventEmitter } from '@angular/core';
import { Schedule } from '../model/schedule.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  scheduleChanged = new Subject<Schedule[]>();
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

  addSchedule(schedule: Schedule) {
    this.scheules.push(schedule);
    this.scheduleChanged.next(this.scheules.slice());
  }

  updateSchedule(index: number, newSchedule: Schedule) {
    this.scheules[index] = newSchedule;
    this.scheduleChanged.next(this.scheules.slice());
  }

  deleteSchedule(index: number) {
    this.scheules.splice(index, 1);
    this.scheduleChanged.next(this.scheules.slice());
  }
}
