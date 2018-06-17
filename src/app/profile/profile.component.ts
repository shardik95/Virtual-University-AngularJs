import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service:UserServiceClient,private router:Router) { }

  user: User = new User();

  ngOnInit() {
    this.service.findCurrentUser()
      .then(user=>this.user=user)
  }

  updateProfile(){
    this.service.updateProfile(this.user)
      .then(()=>this.service.findCurrentUser())
      .then(user=>this.user=user)
  }

  logout(){
    this.service.logout()
      .then(()=>this.router.navigate(['login']))
  }

}
