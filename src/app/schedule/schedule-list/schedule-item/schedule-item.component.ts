import { Component, OnInit, Input } from '@angular/core';
import { Schedule } from 'src/app/model/schedule.model';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.css']
})
export class ScheduleItemComponent implements OnInit {
  @Input() schedule: Schedule;
  @Input() index: number;
  
  constructor() { }

  ngOnInit() {
  }

}
