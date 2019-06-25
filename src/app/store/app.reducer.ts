import { ActionReducerMap } from '@ngrx/store';
import * as fromSchedule from '../schedule/store/schedule.reducer';
export interface AppState {
    schedules: fromSchedule.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    schedules: fromSchedule.scheduleReducer
};