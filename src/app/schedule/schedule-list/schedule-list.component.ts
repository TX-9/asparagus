import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromSchedule from '../store/schedule.reducers';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {
  scheduleState: Observable<fromSchedule.State>;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromSchedule.FeatureState>) { }

  ngOnInit() {
    this.scheduleState = this.store.select('shedules');
  }

}
