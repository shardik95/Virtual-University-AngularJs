export class UserServiceClient{

  USER_URL = "http://localhost:4000/api/user";

  createUser(username,password){

    var user = {
      username:username,
      password:password
    }

    return fetch(this.USER_URL,{
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

}
