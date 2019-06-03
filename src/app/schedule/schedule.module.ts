import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ScheduleItemComponent } from './schedule-list/schedule-item/schedule-item.component';
import { ScheduleRoutingModule } from './schedule-routing.module';

@NgModule({
  declarations: [ScheduleComponent, ScheduleListComponent, ScheduleItemComponent],
  imports: [
    CommonModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
