import { Component, OnInit } from '@angular/core';
import { Exam } from '../exam.model';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {
  exams : Exam[] = [new Exam('אלגברה לינארית','a Very Hard Curse',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/%D7%9E%D7%98%D7%A8%D7%99%D7%A6%D7%94_%D7%9E%D7%93%D7%95%D7%A8%D7%92%D7%AA_%D7%A7%D7%A0%D7%95%D7%A0%D7%99%D7%AA.png/250px-%D7%9E%D7%98%D7%A8%D7%99%D7%A6%D7%94_%D7%9E%D7%93%D7%95%D7%A8%D7%92%D7%AA_%D7%A7%D7%A0%D7%95%D7%A0%D7%99%D7%AA.png'),
  new Exam('מתמטיקה בדידה','a Very Very Hard Curse',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/%D7%9E%D7%98%D7%A8%D7%99%D7%A6%D7%94_%D7%9E%D7%93%D7%95%D7%A8%D7%92%D7%AA_%D7%A7%D7%A0%D7%95%D7%A0%D7%99%D7%AA.png/250px-%D7%9E%D7%98%D7%A8%D7%99%D7%A6%D7%94_%D7%9E%D7%93%D7%95%D7%A8%D7%92%D7%AA_%D7%A7%D7%A0%D7%95%D7%A0%D7%99%D7%AA.png'),
  new Exam('תקשורת מחשבים לתוכנה','a Hard Curse',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/%D7%9E%D7%98%D7%A8%D7%99%D7%A6%D7%94_%D7%9E%D7%93%D7%95%D7%A8%D7%92%D7%AA_%D7%A7%D7%A0%D7%95%D7%A0%D7%99%D7%AA.png/250px-%D7%9E%D7%98%D7%A8%D7%99%D7%A6%D7%94_%D7%9E%D7%93%D7%95%D7%A8%D7%92%D7%AA_%D7%A7%D7%A0%D7%95%D7%A0%D7%99%D7%AA.png')];
  constructor() { }

  ngOnInit(): void {
  }

}
