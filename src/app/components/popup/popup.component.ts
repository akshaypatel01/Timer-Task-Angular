import { Component, Inject, OnInit, ViewChild } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @ViewChild('taskForm') form: any;
  taskData = {
    title: "",
    description: "",
  }
  index=0
  taskTime = 0
  intervalId: any
  btnName="Add"

  disabled = false
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (this.data.action) {
      this.taskData.title = this.data.data.title
      this.taskData.description = this.data.data.description
      this.btnName="Edit"
    }
    if(this.data.index !== undefined){
     this.index=this.data.index
    }
   
  }

  ngOnInit(): void {


  }
  onSubmit() {
    this.saveData()
  }
  cancelTask() {
    this.closeDailog(true)
  }
  saveData() {
    const data = {
      title: this.taskData.title,
      description: this.taskData.description,
      
    }
    this.closeDailog(false, data, this.data.action,this.index)
  }

  closeDailog(cancel?: boolean, data?: { title: string; description: string; } | undefined, action?:boolean, index?:number) {
      this.dialogRef.close({cancel,data, action, index})
  }

}
