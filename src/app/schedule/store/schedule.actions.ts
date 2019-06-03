import { Schedule } from '../../model/schedule.model';
import { Action } from '@ngrx/store';

export const SET_SCHEDULES = 'SET_SCHEDULES';
export const ADD_SCHEDULE = 'ADD_SCHEDULE';
export const UPDATE_SCHEDULE = 'UPDATE_SCHEDULE';
export const DELETE_SCHEDULE = 'DELETE_SCHEDULE';
export const STORE_SCHEDULES = 'STORE_SCHEDULES';
export const FETCH_SCHEDULES = 'FETCH_SCHEDULES';

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