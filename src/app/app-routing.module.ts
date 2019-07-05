import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path:'', redirectTo: '/schedule', pathMatch: 'full' },
  { path:'schedule', loadChildren: './schedule/schedule.module#ScheduleModule'},
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
