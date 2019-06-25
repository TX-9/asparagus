import { Schedule } from '../../model/schedule.model';
import { Action } from '@ngrx/store';

export const SET_SCHEDULES = '[Schedules] Set Schedules';
export const ADD_SCHEDULE = '[Schedules] Add Schedules';
export const UPDATE_SCHEDULE = '[Schedules] Update Schedules';
export const DELETE_SCHEDULE = '[Schedules] Delete Schedules';
export const STORE_SCHEDULES = '[Schedules] Store Schedules';
export const FETCH_SCHEDULES = '[Schedules] Fetch Schedules';

export class SetSchedules implements Action {
  readonly type = SET_SCHEDULES;

  constructor(public payload: Schedule[]) {}
}

export class AddSchedule implements Action {
  readonly type = ADD_SCHEDULE;

  constructor(public payload: Schedule) {}
}

export class UpdateSchedule implements Action {
  readonly type = UPDATE_SCHEDULE;

  constructor(public payload: {index: number, updatedSchedule: Schedule}) {}
}

export class DeleteSchedule implements Action {
  readonly type = DELETE_SCHEDULE;

  constructor(public payload: number) {}
}

export class StoreSchedules implements Action {
  readonly type = STORE_SCHEDULES;
}

export class FetchSchedules implements Action {
  readonly type = FETCH_SCHEDULES;
}

export type ScheduleActions = SetSchedules |
  AddSchedule |
  UpdateSchedule |
  DeleteSchedule |
  StoreSchedules |
  FetchSchedules;