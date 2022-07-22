import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Data} from "@angular/router";

@Injectable()
export class WeaponService {
  constructor(private httpClient: HttpClient) {}

  getWeapons(): any {

    this.httpClient.get('https://dor-getready-api-6mvg7oyrgq-uc.a.run.app/weapons').subscribe(data => {
      console.log(data)
      return data;
    });

    return undefined;
  }
}
