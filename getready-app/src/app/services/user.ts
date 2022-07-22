import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  addUser(body: any): Observable<any> {
    return this.httpClient.post("https://dor-getready-api-6mvg7oyrgq-uc.a.run.app/users", body)
  }

  getUsers() {
    this.httpClient.get('https://dor-getready-api-6mvg7oyrgq-uc.a.run.app/users').subscribe(data=>{
      console.log(data)
    })
  }
}
