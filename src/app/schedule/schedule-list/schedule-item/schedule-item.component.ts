import { Component, OnInit, Input } from '@angular/core';
import { Schedule } from 'src/app/model/schedule.model';
import { ScheduleService } from '../../schedule.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.css']
})
export class ScheduleItemComponent implements OnInit {
  schedules: Schedule[];
  
  constructor(private scheduleService: ScheduleService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.schedules = this.scheduleService.getSchedules();
  }

  onNewSchedule() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
