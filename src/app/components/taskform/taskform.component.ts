import { Component, OnInit, ViewChild } from '@angular/core';
import { UsertaskServiceService } from 'src/app/services/usertask-service.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {
  popupDailog!: MatDialogRef<PopupComponent>;

  @ViewChild('taskForm') form: any;
  taskData = {
    title: "",
    description: "",
    time: 0,
  }
  taskTime = 0
  intervalId: any

  disabled = true

  constructor(
    private userTaskService: UsertaskServiceService,
    private dialogModel: MatDialog,
  ) {  }

  ngOnInit(): void {
  }
  onSubmit() {

  }


  startTimer() {
    this.disabled = false
    this.intervalId = setInterval(() => {
      this.taskTime++
    }, 1000)
  }
  pauseTimer() {
    this.disabled = true
    clearInterval(this.intervalId)
  }

  openDailog() {
    this.pauseTimer()
    this.popupDailog = this.dialogModel.open(PopupComponent, {
      disableClose: true,
      data: { action:false }
    });

    this.popupDailog.afterClosed()
      .subscribe((result) => {
        if (result.cancel) {
          this.startTimer()
        }else{
          this.disabled = true
          this.userTaskService.addTask(result.data.title, result.data.description, this.taskTime)
          this.taskTime = 0
          clearInterval(this.intervalId)
        }
      })
  }


}
