import { Course } from "./course";

export class CourseAppearance {
    _id: string;
    name: string;
    exams: {
        exam: string,
        remake: string,
        duration:Number,
        withMaterials:Boolean
    }
    couresId: Course;

    students: [{loggedIn:boolean,student:string,_id:string}];
}
