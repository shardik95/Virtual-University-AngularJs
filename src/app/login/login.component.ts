import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  loginValid=false;

  constructor(private service:UserServiceClient,private router:Router) { }

  ngOnInit() {
  }

  login(username,password){
     this.service.login(username,password)
       .then(user=>{
         if(user.username=='NOT FOUND'){
           this.loginValid=true
         }
         else{
           this.router.navigate(['profile'])
         }
       });
  }

}
