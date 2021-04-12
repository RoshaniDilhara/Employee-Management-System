import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, FormArray, Validators,FormBuilder} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/employees';

  constructor(private http: HttpClient,private formBuilder: FormBuilder) { }

    form = new FormGroup({
      id: new FormControl(null),
      name: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      skills: new FormControl(''),
    });

    initializeFormGroup() {
      this.form.setValue({
        id: null,
        name: '',
        dob: '',
        email: '',
        skills: [],
      });
    }

    getEmployeesList(): Observable<any> {
      return this.http.get(`${this.baseUrl}`);
    }

    getEmployeeById(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/${id}`);
    }

    createEmployee(employee: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl}`, employee);
    }

    updateEmployee(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteEmployee(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }

    deleteAllEmployees(): Observable<any> {
      return this.http.delete(`${this.baseUrl}`, { responseType: 'text' });
    }

    populateForm(employee){
        this.form.setValue(employee);
    }

    setSkillsForm(skills: String){
         this.form.patchValue(skills);
//          console.log('skills' + skills);
    }



}
