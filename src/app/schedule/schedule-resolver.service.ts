import { Injectable } from '@angular/core';
import { ScheduleApiService } from '../shared/schedule-api.service';
import { ScheduleService } from './schedule.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Schedule } from '../model/schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleResolverService implements Resolve<Schedule[]>{
  constructor(private shcApiService: ScheduleApiService, private schService: ScheduleService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Schedule[] | import("rxjs").Observable<Schedule[]> | Promise<Schedule[]> {
    const schedules = this.schService.getSchedules();

    if (schedules.length === 0) {
      return this.shcApiService.getSchedules();
    } else {
      return schedules;
    }
  }
  


}
