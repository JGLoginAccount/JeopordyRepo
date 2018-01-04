import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-answer',
  templateUrl: './show-answer.component.html',
  styleUrls: ['./show-answer.component.css']
})


export class ShowAnswerComponent implements OnInit {


  answer;
  showAnswer;
  score=0;
  reply;

  //let the parent know things have happened

  constructor() { }

  @Input() questionInfo;

  @Output() answerHasBeenScored= new EventEmitter();

  ngOnInit() {
  }


  //scoring
  youClickedMe() {
    console.log(this.answer);


    if(this.answer.toLowerCase()===this.questionInfo.answer.toLowerCase()) {
      this.score=this.questionInfo.value+this.score;
      this.showAnswer=this.questionInfo.answer;
      this.reply="That answer is correct!  You have been awarded "+this.questionInfo.value+" dollars."

    }
    else {
      this.showAnswer=this.questionInfo.answer;
      this.reply="That answer is incorrect."
    }
    this.answerHasBeenScored.emit();
    
  }
   



}
