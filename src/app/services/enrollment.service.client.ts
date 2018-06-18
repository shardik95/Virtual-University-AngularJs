export class EnrollmentServiceClient{

  findEnrollments(){
    return fetch("http://localhost:4000/api/section",{
      credentials:'include'
    })
      .then(response=>response.json());
  }

}
