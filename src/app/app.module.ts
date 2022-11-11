import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './components/task-list/task-list.component';
import { CustomtimePipe } from './pipes/customtime.pipe';
import { TaskformComponent } from './components/taskform/taskform.component';
import { PopupComponent } from './components/popup/popup.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskListComponent,
    CustomtimePipe,
    TaskformComponent,
    PopupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    PopupComponent,
    ],
})
export class AppModule { }
