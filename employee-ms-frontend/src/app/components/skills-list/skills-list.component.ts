import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { Skill } from '../../skill';
import { SkillService } from "../../services/skill.service";
import { filter } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ViewChild } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css']
})
export class SkillsListComponent implements OnInit {

  skills: Observable<Skill[]>;
  displayedColumns: string[] = ['name', 'actions'];

  constructor(private skillService: SkillService,
   private router: Router, private dialog: MatDialog,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.reloadAllSkills();
  }

  reloadAllSkills(){
    this.skillService.getSkillsList()
        .subscribe(res=>{
            this.skills = res;
        });
  }

  deleteSkill(id: number) {
     if(confirm('Are you sure to delete the skill?')){
      this.skillService.deleteSkill(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadAllSkills();
          },
          error => console.log(error));
          this.notificationService.warn('Successfully Deleted!');
      }
  }

}
