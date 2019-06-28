import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromSchedule from '../store/schedule.reducer';
import * as fromApp from '../../store/app.reducer';
import { Router, ActivatedRoute } from '@angular/router';
import { Schedule } from 'src/app/model/schedule.model';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit, OnDestroy {
  schedules: Schedule[];
  subscription: Subscription;

  constructor(private scheduleService: ScheduleService,
    private router: Router,
    private route: ActivatedRoute) { }
    
  ngOnInit() {
    this.subscription = this.scheduleService.scheduleChanged
      .subscribe((schs: Schedule[]) => {
        this.schedules = schs;
      });
    
    this.schedules = this.scheduleService.getSchedules();
  }
  
  onNewSchedule() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  
}
