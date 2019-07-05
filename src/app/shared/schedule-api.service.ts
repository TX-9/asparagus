import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScheduleService } from '../schedule/schedule.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleApiService {
  constructor(private http: HttpClient, private schService: ScheduleService) { }

  saveSchedules() {
    const schedules = this.schService.getSchedules();

  }

  getSchedules() {

  }
}
