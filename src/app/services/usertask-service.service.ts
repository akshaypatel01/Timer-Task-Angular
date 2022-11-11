import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsertaskServiceService {
  taskList: {
    title: string,
    description: string,
    time: number,
  }[] = []
  constructor() {

  }

  addTask(title: string, description: string, millisecounds: number): void {
    this.taskList.push({
      title: title,
      description: description,
      time: millisecounds,
    })
  }

  deleteTask(index: number) {
    this.taskList.splice(index, 1)
  }

  updateTask(index: number, title: string, description: string, millisecounds: number) {
    this.taskList[index].title = title
    this.taskList[index].description = description
    this.taskList[index].time = millisecounds
  }
}
