import { Http } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
@Injectable()
export class HttpService {
    constructor(private http: HttpClient) { }
   
  
    changeProfile(value){
   return this.http.post('https://nxv10258.pythonanywhere.com/user/update',value)
    }
    getProfile(){
     return this.http.get('https://nxv10258.pythonanywhere.com/user')
    }
}