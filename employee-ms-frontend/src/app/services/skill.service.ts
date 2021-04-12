import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private baseUrl = 'http://localhost:8080/api/skills';

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

    form: FormGroup = this.formBuilder.group({
      id: new FormControl(null),
      skill_name: new FormControl('', Validators.required)
    });

    initializeFormGroup() {
      this.form.setValue({
        id: null,
        skill_name: [],
      });
    }

    createSkill(skill: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl}`, skill);
    }

    getSkillsList(): Observable<any> {
      return this.http.get(`${this.baseUrl}`);
    }

    deleteSkill(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }


}
