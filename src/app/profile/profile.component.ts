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
  constructor(private profileService: ProfileService) { 
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
