export class EnrollmentServiceClient{

  findEnrollments(){
    return fetch("https://hardik-shah-nodejs.herokuapp.com/api/section",{
      credentials:'include'
    })
      .then(response=>response.json());
  }

}
