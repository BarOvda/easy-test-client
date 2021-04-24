import { CourseAppearance } from "./courseAppearance";

export class ExamDirectory{
    _id:string;
    summaries:string[];
    owner:string;
    courseId:CourseAppearance;
    uploadDate:Date;
}