import { Component, OnInit } from '@angular/core';
import { SkillService } from "../../services/skill.service";
import { Skill } from '../../skill';
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { Observable } from "rxjs";

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.css']
})
export class CreateSkillComponent implements OnInit {

  skill: Skill = new Skill();
  data: any;
  submitted = false;
  skills: Observable<Skill[]>;
  skillNames = [];

  constructor(private skillService: SkillService,
    private router: Router,
    private notificationService: NotificationService,
     public dialogRef: MatDialogRef<CreateSkillComponent>){ }

  ngOnInit() {
      this.skillService.getSkillsList()
          .subscribe(res=>{
              this.skills = res;
//               console.log('...........' + this.skills);
          });
  }

    newEmployee(): void {
      this.submitted = false;
      this.skill = new Skill();
    }

    save() {
      this.skillService
      .createSkill(this.skillService.form.value).subscribe(data => {
        console.log(data)
        this.skill = new Skill();
//         this.gotoList();
//         this.notificationService.success('Successfully Added!');
      },
      error => console.log(error));
    }

  onSubmit() {
        if (this.skillService.form.valid ) {
          console.log('id is' + this.skillService.form.get('id').value);
          if(!this.skillService.form.get('id').value){
            this.submitted = true;
            this.save();
          }
          this.skillService.initializeFormGroup();
          this.onClose();
        }
      }


  onClear(){
      this.skillService.form.reset();
      this.skillService.initializeFormGroup();
  }

  onClose(){
      this.skillService.form.reset();
      this.skillService.initializeFormGroup();
      this.dialogRef.close();
  }

}
