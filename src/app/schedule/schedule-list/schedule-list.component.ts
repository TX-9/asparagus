import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromSchedule from '../store/schedule.reducer';
import * as fromApp from '../../store/app.reducer';
import { Router, ActivatedRoute } from '@angular/router';
import { Schedule } from 'src/app/model/schedule.model';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit, OnDestroy {
  schedules: Schedule[];
  subscription: Subscription;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>) { }
    
  ngOnInit() {
    this.subscription = this.store
      .select('schedules')
      .pipe(map(schedulesState => schedulesState.schedules))
      .subscribe((schedules: Schedule[]) => {
        this.schedules = schedules;
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
