import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessorComponent } from './professors/professor/professor.component';
import { ProfessorListComponent } from './professors/professor-list/professor-list.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ProfessorsComponent } from './professors/professors.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessorComponent,
    ProfessorListComponent,
    ProfessorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
