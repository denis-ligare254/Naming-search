import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../servives/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) { 
    this.profileService.getinformation().subscribe(profile=>{
      console.log(profile);
      
    })
  }

  ngOnInit(): void {
  }

}
