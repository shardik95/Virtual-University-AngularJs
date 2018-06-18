import {User} from './user.model.client';

export class Section{
  name:String;
  courseId:Number;
  maxSeats:Number;
  availableSeats:Number;
  students:[User];
}
