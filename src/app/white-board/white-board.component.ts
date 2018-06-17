import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private service:UserServiceClient,private router:Router) { }

  user: User = new User();
  login=true;

  ngOnInit() {
    this.service.findCurrentUser()
      .then(user=>{
        if(user.username!=='NOT FOUND'){
          this.user=user
          this.login=false
        }

      })
  }

  logout(){
    this.service.logout()
      .then(()=>this.router.navigate(['login']))
  }

}
