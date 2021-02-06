import { Course } from "./course";
import { User } from "./user";

export class Summary{
    title: string;
      uploadDate: Date;
      pathUrl: string;
      owner:User;
      courseAppearance:Course;//TODO change to CourseApp
      usersRank:[{user:User,rank:number}];  
      rank:number;
}