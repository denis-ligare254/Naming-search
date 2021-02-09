import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../servives/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile:any[];
repos:any[];
username:string;
  constructor(private profileService: ProfileService) { 

  }
  findProfile(){
    this.profileService.updateProfile(this.username)
        this.profileService.getInformation().subscribe(profile=>{
      console.log(profile);
      this.profile =profile;
      
    })
    this.profileService.getProfileRepos().subscribe(repos=>{
      console.log('profile repo');
      this.repos=repos;
      
    })
  }

  ngOnInit(): void {
  }

}
