export class Exam{
    public name: string;
    public description: string;
    public examId: string;
    public imagePath: string;
    //public dateOfExam: Date;
    //public examFiles==shopping list

    constructor(name: string, desc:string,imagePath:string){
        this.name=name;
        this.description=desc;
        
        this.imagePath=imagePath;
    }

}