import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/model/schedule.model';
import { ScheduleService } from '../schedule.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styles: []
})
export class ScheduleDetailComponent implements OnInit {
  sch: Schedule;
  id: number;

  constructor(private schService: ScheduleService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.sch = this.schService.getSchedule(this.id);
      });
  }

  onEditSchedule() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.schService.deleteSchedule(this.id);
    this.router.navigate(['/schedule']);
  }
}
