import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid:"f3b887eca853e1857012";
  private clientsecret:"d6a835cf0fd5bbd86a39fc873810711bdf85ffe8"

  constructor(private http:HttpClient) {
     console.log('server is ready');
     this.username="denis-ligare254"
     
   }
   getinformation(){
     return this.http.get("https://api.github.com/users/" +this.username + "?client_id=" + this.clientid +"&client_secret=" +this.clientsecret )
    //  return observable
     .map(res=>Response);
   }
}
