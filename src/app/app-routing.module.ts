import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';

const appRoutes: Routes = [
  { path:'', component: HomeComponent },
  { path:'schedule', loadChildren: './schedule/schedule.module#ScheduleModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
