import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScheduleService } from '../schedule/schedule.service';
import { map, tap } from 'rxjs/operators';
import { Schedule } from '../model/schedule.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleApiService {
  
  constructor(private http: HttpClient, private schService: ScheduleService) { }

  saveSchedules() {
    const schedules = this.schService.getSchedules();

  }

  getSchedules() {
    return this.http
      .get<Schedule[]>(
        'http://localhost:3000/plans?sortBy=createdAt:desc&limit=10&skip=0'
      ).pipe(
        map(schedules => {
          return schedules.map(schedule => {
            return {
              ...schedule
            };
          });
        }),
        tap(schedules => {
          this.schService.setSchedules(schedules);
        })
      )
  }
}
