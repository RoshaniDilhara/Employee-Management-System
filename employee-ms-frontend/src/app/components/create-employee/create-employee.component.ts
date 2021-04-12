import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { Employee } from '../../employee';
import { NotificationService } from '../../services/notification.service';
import { Observable } from "rxjs";
import { Skill } from '../../skill';
import { SkillService } from "../../services/skill.service";
// import { FormGroup, FormControl, FormArray, Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  data: any;
  submitted = false;
  skills: Skill[];
  selectedSkills:Skill[];

  constructor(private employeeService: EmployeeService,
  private skillService: SkillService,
  private router: Router,
  public dialogRef: MatDialogRef<CreateEmployeeComponent>,
  private notificationService: NotificationService) { }

  ngOnInit() {
    this.getAllSkills();
  }

    getAllSkills(){
      this.skillService.getSkillsList()
          .subscribe(res=>{
              this.skills = res;
//               console.log('skills '+ this.skills);
          });
    }

    newEmployee(): void {
      this.submitted = false;
      this.employee = new Employee();
    }

    save() {
      this.employeeService
      .createEmployee(this.employeeService.form.value).subscribe(data => {
        console.log(data)
        this.employee = new Employee();
        this.gotoList();
        this.notificationService.success('Successfully Added!');
      },
      error => console.log(error));
    }

//     updateEmployee(): void {
//       this.submitted = false;
//     }

    saveUpdate() {
      this.employeeService
      .updateEmployee(this.employeeService.form.get('id').value,this.employeeService.form.value).subscribe(data => {
        console.log(data);
        console.log(this.employeeService.form.get('id').value);
        this.employee = new Employee();
        this.gotoList();
//         this.notificationService.success('Successfully Updated!');
      },
      error => console.log(error));
    }

    onSubmit() {
//       console.log(this.employeeService.form.get('skills'))
      if (this.employeeService.form.valid) {
        if(!this.employeeService.form.get('id').value){
          this.submitted = true;
          this.save();
        }else{
          this.submitted = true;
          this.saveUpdate();
        }
        this.onClose();
      }
    }

    gotoList() {
      this.router.navigate(['/employees']);
    }

    onClear(){
      this.employeeService.form.reset();
      this.employeeService.initializeFormGroup();
//       this.onClose();
    }

    onClose(){
      this.employeeService.form.reset();
      this.employeeService.initializeFormGroup();
      this.dialogRef.close();
    }


}
