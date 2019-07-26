import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ScheduleService } from '../schedule/schedule.service';
import { map, tap, catchError } from 'rxjs/operators';
import { Schedule } from '../model/schedule.model';
import { Subject, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    //,'Authorization': 'jwt-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ScheduleApiService {
  
  constructor(private http: HttpClient, private schService: ScheduleService) { 
    this.schService.setScheduleApiService(this);
  }

  saveSchedule(schedule: Schedule): Observable<Schedule> {
    return this.http.post<Schedule>('http://localhost:3000/plans', schedule, httpOptions);
      
  }

  saveSchedules() {
    const schedules = this.schService.getSchedules();
    this.http.put<Schedule[]>(
      'http://localhost:3000/plans', schedules, httpOptions
    ).subscribe(response => {
      console.log(response);
    });

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
