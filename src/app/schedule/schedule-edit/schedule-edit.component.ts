import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.css']
})
export class ScheduleEditComponent implements OnInit {
  id: number;
  editMode = false;
  schForm: FormGroup;
  
  constructor(private route: ActivatedRoute,
              private schService: ScheduleService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      })
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSubmit() {
    if (this.editMode) {
      this.schService.updateSchedule(this.id, this.schForm.value);
    } else {
      this.schService.addSchedule(this.schForm.value);
    }
    this.onCancel();
  }
  private initForm() {
    let schSubject = '';
    let schStatus = false;
    let date = '';
    let desc = '';
    if (this.editMode) {
      const sch = this.schService.getSchedule(this.id);
      schSubject = sch.subject;
      //date = sch.status;

    }

    this.schForm = new FormGroup({
      'subject': new FormControl(schSubject),
      'status': new FormControl(schStatus),
      'date': new FormControl(date),
      'desc': new FormControl(desc)
    })
  }

}
