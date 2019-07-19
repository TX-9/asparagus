import { Component, OnInit } from '@angular/core';
import { ScheduleApiService } from '../shared/schedule-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private schApiService: ScheduleApiService) { }

  onSaveData() {
    this.schApiService.saveSchedules();
  }
  
  onFetchData() {
    this.schApiService.getSchedules().subscribe();
  }

  ngOnInit() {
  }

}
