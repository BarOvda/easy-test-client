import { Course } from "./course";
import { ExamDirectory } from "./examDirectory";

export class User {
    type:string;
    email: string;
    password: string;
    uploadedSummaries: [string];
    examsDirectories:  [ExamDirectory];
    imageUrl: string;
    followedCourses:Course[];
    name: string;
    _id:string;
}


