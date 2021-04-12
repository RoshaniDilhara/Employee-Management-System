import { EmployeeDetailsComponent } from 'src/app/components/employee-details/employee-details.component';
import { CreateEmployeeComponent } from 'src/app/components/create-employee/create-employee.component';
import { CreateSkillComponent } from 'src/app/components/create-skill/create-skill.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from 'src/app/components/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from 'src/app/components/update-employee/update-employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'skills', component: CreateSkillComponent },
//   { path: 'update/:id', component: UpdateEmployeeComponent },
//   { path: 'details/:id', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
