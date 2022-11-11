import { Component, OnInit } from '@angular/core';
import { UsertaskServiceService } from 'src/app/services/usertask-service.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  popupDailog!: MatDialogRef<PopupComponent>;

  constructor(
    public userTaskService: UsertaskServiceService,
    private dialogModel: MatDialog,
  ) {

  }

  ngOnInit(): void {

  }
  deleteTask(i: number) {
     this.userTaskService.deleteTask(i)
  }

  editTask(i: number) {
    const data={
      title:this.userTaskService.taskList[i].title,
      description:this.userTaskService.taskList[i].description,
     
    }
    this.openDialog(data, i)
  }

  openDialog(data:any, i:number) {

    this.popupDailog = this.dialogModel.open(PopupComponent, {
      disableClose: true,
      data: {action:true, data:data}
    });

    this.popupDailog.afterClosed()
      .subscribe((result) => {
        if (result.action) {
          this.userTaskService.taskList[result.index].title= result.data.title
          this.userTaskService.taskList[result.index].description= result.data.description
        }        
      })


  }
}
