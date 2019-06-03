import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule.component';

const scheduleRoutes: Routes = [
  { path: '', component: ScheduleComponent }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(scheduleRoutes)
  ],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
