import { Component, OnInit } from '@angular/core';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../../employee';
import { EmployeeService } from "../../services/employee.service";
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  employee: Employee;

  constructor(private route: ActivatedRoute,private router: Router,
                  private employeeService: EmployeeService, public dialogRef: MatDialogRef<EmployeeDetailsComponent>) { }

  ngOnInit() {
//       this.getEmployee(this.route.snapshot.paramMap.get['id']);
//       this.employee = new Employee();
//       this.employee = this.employeeService.form.value;
//
//       let id = +this.route.snapshot.paramMap.get('id');
//       this.route.paramMap.subscribe(params => {
//           this.id = params.get['id'];
//           console.log(this.id);
//         })
//       console.log(this.id);
//       this.employeeService.getEmployeeById(this.id)
//         .subscribe(data => {
//           console.log(data)
//           this.employee = data;
//         }, error => console.log(error));

    }

//     getEmployee(id){
//       console.log(this.id);
//       this.employeeService.getEmployeeById(this.id)
//          .subscribe(data => {
//             console.log(data)
//             this.employee = data;
//          }, error => console.log(error));
//     }



//     list(){
//       this.router.navigate(['employees']);
//       this.dialogRef.close();
//     }

}
