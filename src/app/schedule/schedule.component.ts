import { Component, OnInit } from '@angular/core';
import { Schedule } from '../model/schedule.model';
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [ScheduleService]
})
export class ScheduleComponent implements OnInit {
  selectedSchedule: Schedule;

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.scheduleService.scheduleSelected.subscribe((schedule: Schedule) => {
      this.selectedSchedule = schedule;
    });
  }

}
