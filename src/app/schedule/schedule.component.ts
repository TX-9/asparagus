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
  
  constructor() { }

  ngOnInit() {
    
  }

}
