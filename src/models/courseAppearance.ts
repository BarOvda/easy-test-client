
export class CourseAppearance {
    _id: string;
    name: string;
    exams: {
        exam: string,
        remake: string,
        duration:Number,
        withMaterials:Boolean
    }
    courseId: string;

    students: string;
}
