import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/material/material.module';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { EmployeeService } from 'src/app/services/employee.service';
import { SkillService } from 'src/app/services/skill.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateSkillComponent } from './components/create-skill/create-skill.component';
import { SkillsListComponent } from './components/skills-list/skills-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    CreateSkillComponent,
    SkillsListComponent,
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [EmployeeService,SkillService],
  bootstrap: [AppComponent],
  entryComponents: [CreateEmployeeComponent,CreateSkillComponent,SkillsListComponent]
})
export class AppModule { }
