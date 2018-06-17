import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username;
  password;
  confirmPassword;
  usernameValid=false;
  passwordValid=false;

  constructor(private service:UserServiceClient,
              private router:Router) { }

  ngOnInit() {
  }

  register(username,password,confirmPassword){

    if(password!==confirmPassword){
      this.passwordValid=true;
    }
    else{

      this.service.findUserByUserName(username)
        .then(response=>response.json())
        .then(user=>{
          if(user.username==='NOT FOUND'){
            this.service.createUser(username,password)
                .then(()=>this.router.navigate(['profile']))
          }
          else{
            this.usernameValid=true;
          }
        })
    }

  }

}
