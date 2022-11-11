import { Component, OnInit } from '@angular/core';
import { UsertaskServiceService } from 'src/app/services/usertask-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

 
  constructor(
    private userTaskSerice:UsertaskServiceService,
   
  ) { }

  ngOnInit(): void {
    console.log(this.userTaskSerice.taskList);
  }
 
 

}


