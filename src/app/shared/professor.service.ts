import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment} from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Professor } from './professor';
import { Manager} from './manager'

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  //declare variables -- global
  professors: Professor[];
  formData: Professor = new Professor();

  managers: Manager[];

  constructor(private httpClient: HttpClient) { }

  // get all professor or Method for Binding all professor
  getAllProfessors(){
    this.httpClient.get(environment.apiUrl+'/api/professors')
      .toPromise().then(response =>
        this.professors= response as Professor[]);
  }

  // get a particular employee
  getProfessor(proId: number): Observable<any>{
    return this.httpClient.get(environment.apiUrl+'/api/professors/'+proId);
  }

  // insert professor
  insertProfessor(pro: Professor): Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/professors/',pro);
  }

  // update professor
  updateProfessor(pro: Professor): Observable<any> {
    return this.httpClient.put(environment.apiUrl+'/api/employees/',pro);
  }

  // Get managers from dropdownList
    // get all managers or Method for Binding all managers
    getAllManagers(){
      this.httpClient.get(environment.apiUrl+'/api/managers')
        .toPromise().then(response =>
          this.managers= response as Manager[]);
    }

}
