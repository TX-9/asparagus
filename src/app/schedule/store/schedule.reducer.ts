import { Schedule } from 'src/app/model/schedule.model';
import * as fromApp from '../../store/app.reducer';
import * as ScheduleActions from './schedule.actions';

export interface FeatureState extends fromApp.AppState {
    shedules: State
}

export interface State {
    schedules: Schedule[];
}

const initState: State = {
    schedules: [
        new Schedule('Daily Dinner', true, 'daily dinner schedule')
    ]
};

export function scheduleReducer(state = initState, action: ScheduleActions.ScheduleActions) {
    switch (action.type) {
        case (ScheduleActions.SET_SCHEDULES):
            return {
                ...state,
                schedules: [...action.payload]
            };
            
        default:
            return state;
    }
}