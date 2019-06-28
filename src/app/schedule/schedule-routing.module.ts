import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule.component';
import { ScheduleStartComponent } from './schedule-start/schedule-start.component';
import { ScheduleEditComponent } from './schedule-edit/schedule-edit.component';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';

const scheduleRoutes: Routes = [
  { 
    path: '', component: ScheduleComponent, 
    children: [
      { path: '', component: ScheduleStartComponent },
      { path: 'new', component: ScheduleEditComponent },
      { path: ':id', component: ScheduleDetailComponent },
      { path: ':id/edit', component: ScheduleEditComponent }
    ] 
}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(scheduleRoutes)
  ],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
