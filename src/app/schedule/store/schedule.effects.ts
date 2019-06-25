import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as ScheduleActions from './schedule.actions';
import { switchMap, map } from 'rxjs/operators';
import { Schedule } from 'src/app/model/schedule.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';

@Injectable()
export class ScheduleEffects {
    @Effect()
    fetchSchedules = this.actions$.pipe(
        ofType(ScheduleActions.FETCH_SCHEDULES),
        switchMap(() => {
            return this.http.get<Schedule[]>(
                ''
            );
        }),
        map(schedules => {
            return schedules.map(schedule => {
                return {
                    ...schedule
                }
            })

        }),
        map(schedules => {
            return new ScheduleActions.SetSchedules(schedules);
        })
    );
    
    constructor(
        private actions$: Actions, 
        private http: HttpClient,
        private store: Store<fromApp.AppState>){}
}