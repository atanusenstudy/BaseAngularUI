import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { login } from '../model/commomModel';
@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get(environment.serverUrl+'User');
  }
  login(data:login){
    return this.http.post<any>(environment.serverUrl+'User/Authenticate',data);
  }

}
