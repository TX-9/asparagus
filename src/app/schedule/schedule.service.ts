import { Injectable, EventEmitter } from '@angular/core';
import { Schedule } from '../model/schedule.model';
import { Subject } from 'rxjs';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { ScheduleApiService } from '../shared/schedule-api.service';

@Injectable()
export class ScheduleService {
  scheduleChanged = new Subject<Schedule[]>();
  // private schedules: Schedule[] = [
  //   new Schedule('lunch', true, 'lunch schedule'), new Schedule('dinner', true, 'dinner schedule')
  // ];

  private schedules: Schedule[] = [];
  private schAPIService: ScheduleApiService;
  constructor(private slService: ShoppingListService) {
  }
  
  setScheduleApiService(schAPIService: ScheduleApiService) {
    this.schAPIService = schAPIService;
    console.log('schAPIService', this.schAPIService);
  }

  setSchedules(schedule: Schedule[]) {
    this.schedules = schedule;
    this.scheduleChanged.next(this.schedules.slice());  
  }

  getSchedules() {
    return this.schedules.slice();
  }

  getSchedule(index: number) {
    return this.schedules[index];
  }

  addSchedule(schedule: Schedule) {
    this.schAPIService.saveSchedule(schedule).subscribe((sch) => {
      console.log('sch', sch);
      this.schedules.push(sch);
      this.scheduleChanged.next(this.schedules.slice());
    });
  }

  updateSchedule(index: number, newSchedule: Schedule) {
    this.schedules[index] = newSchedule;
    this.scheduleChanged.next(this.schedules.slice());
  }

  deleteSchedule(index: number) {
    this.schedules.splice(index, 1);
    this.scheduleChanged.next(this.schedules.slice());
  }
}
