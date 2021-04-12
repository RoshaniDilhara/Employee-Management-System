import { Component, OnInit } from '@angular/core';
import { Observable,pipe, of } from "rxjs";
import { Router } from '@angular/router';
import { Employee } from '../../employee';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { CreateSkillComponent } from '../create-skill/create-skill.component';
import { SkillsListComponent } from '../skills-list/skills-list.component';
import { EmployeeService } from "../../services/employee.service";
import { filter } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ViewChild } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;
  displayedColumns: string[] = ['name', 'dob', 'email','skills', 'actions'];
  searchKey: string;
  employee: Employee;
//   filteredEmployees: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router, private dialog: MatDialog, private notificationService: NotificationService) { }

  ngOnInit() {
    this.reloadAllEmployees();
  }

  reloadAllEmployees(){
    this.employeeService.getEmployeesList()
        .subscribe(res=>{
            this.employees = res;
//             this.filteredEmployees= res;
        });
  }

  deleteEmployee(id: number) {
     if(confirm('Are you sure to delete the record?')){
      this.employeeService.deleteEmployee(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadAllEmployees();
          },
          error => console.log(error));
          this.notificationService.warn('Successfully Deleted!');
      }
    }

    deleteAllEmployee() {
        this.employeeService.deleteAllEmployees()
                  .subscribe(
                    data => {
                      console.log(data);
                      this.reloadAllEmployees();
                    },
                    error => {
                      console.log(error);
        });
   }

//       employeeDetails(id){
//           console.log(id);
//           this.employeeService.getEmployeeById(id)
//             .subscribe(
//               data => {
//                 this.employee = data;
//                 console.log(data);
//               },
//               error => {
//                 console.log(error);
//               });
//               this.router.navigate(['details', id]);
// //               console.log(id);
//               const dialogConfig = new MatDialogConfig();
//               dialogConfig.disableClose = false;
//               dialogConfig.autoFocus = true;
//               dialogConfig.width = "60%";
//               this.dialog.open(EmployeeDetailsComponent,dialogConfig);
//       }

//     onSearchClear(){
//       this.searchKey="";
// //       this.filteredEmployees = this.employees;
//     }

    onCreate(){
      this.employeeService.initializeFormGroup();
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
      this.dialog.open(CreateEmployeeComponent,dialogConfig);
    }

    onCreateSkill(){
      this.employeeService.initializeFormGroup();
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
      this.dialog.open(CreateSkillComponent,dialogConfig);
    }

    onEdit(row){
      this.employeeService.populateForm(row);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
      this.dialog.open(CreateEmployeeComponent,dialogConfig);
    }

    onViewSkills(){
      this.employeeService.initializeFormGroup();
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
      this.dialog.open(SkillsListComponent,dialogConfig);
    }

    getSkills(element: any): string {
        let skills = "";
        element.skills.forEach(skill => {
            skills += skill.skill_name + "| ";
            skills = skills.substring(0, skills.length - 1);
        });

//         console.log(skills);
        return skills;
    }

}
