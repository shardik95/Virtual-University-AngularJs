export class UserServiceClient{

  // USER_URL = "http://localhost:4000/api/user";
  // LOGIN_URL = "http://localhost:4000/api/login";
  // PROFILE_URL = "http://localhost:4000/api/profile"

  USER_URL = "https://hardik-shah-nodejs.herokuapp.com/api/user";
  LOGIN_URL = "https://hardik-shah-nodejs.herokuapp.com/api/login";
  PROFILE_URL = "https://hardik-shah-nodejs.herokuapp.com/api/profile"



  createUser(username,password){

    var user = {
      username:username,
      password:password
    }

    return fetch("https://hardik-shah-nodejs.herokuapp.com/api/register",{
      credentials:'include',
      method:'post',
      body:JSON.stringify(user),
      headers:{
        'content-type':'application/json'
      }
    }).then(response=>response.json())

  }

  findUserByUserName(username){
    return fetch(this.USER_URL+"/"+username);
  }

  login(username,password){
    var user = {
      username:username,
      password:password
    }

    return fetch(this.LOGIN_URL,{
      credentials:'include',
      method:'post',
      body:JSON.stringify(user),
      headers:{
        'content-type':'application/json'
      }
    }).then(response=>response.json())
  }

  findCurrentUser(){
    return fetch(this.PROFILE_URL,{
      credentials:'include',
    })
      .then(response=>response.json());
  }

  logout(){
    return fetch("https://hardik-shah-nodejs.herokuapp.com/api/logout",{
      method:'post',
      credentials: 'include'
    })
  }

  updateProfile(user){
    return fetch(this.PROFILE_URL,{
      credentials:'include',
      method:'put',
      body:JSON.stringify(user),
      headers:{
        'content-type':'application/json'
      }
    }).then(response=>response.json());
  }

}
