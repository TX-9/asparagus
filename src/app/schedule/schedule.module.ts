import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ScheduleItemComponent } from './schedule-list/schedule-item/schedule-item.component';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { StoreModule } from '@ngrx/store';
import { scheduleReducer } from './store/schedule.reducer';
import { ScheduleEditComponent } from './schedule-edit/schedule-edit.component';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';
import { ScheduleStartComponent } from './schedule-start/schedule-start.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
  declarations: [ScheduleComponent, ScheduleListComponent, ScheduleItemComponent, ScheduleEditComponent, ScheduleDetailComponent, ScheduleStartComponent],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    StoreModule.forFeature('schedules', scheduleReducer),
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule 
  ]
})
export class ScheduleModule { }
