import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

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


   getInformation(): Observable<any[]> {
    return this.http.get<any[]>("https://api.github.com/users/denis-ligare254");
  }
// function to get respository
   getProfileRepos(){
      return this.http.get<any[]>("https://api.github.com/users/denis-ligare254");
  }
  updateProfile(username:string){
    this.username=username;
  }
   }

 