import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  p: number = 1;
  colorA: string = 'aquamarine';
  colorB: string = 'aquamarine';
  colorC: string = 'aquamarine';
  colorD: string = 'aquamarine';

  total: number = 10
  totalScore : any = 0
  currentPage : any = 1
  flip: boolean = false

  quiz: any = [
    {
      "id": 1,
      "question": "A module created by using the AngularJS function is called?",
      "description": "delete folder",
      "answers": {
        "answer_a": "module",
        "answer_b": "module()",
        "answer_c": "mod()",
        "answer_d": "angular module()",
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "false",
        "answer_b_correct": "true",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
      },

    },
    {
      "id": 2,
      "question": "AngularJS is perfect for?",
      "description": "delete folder",
      "answers": {
        "answer_a": "SPAs",
        "answer_b": "MPAs",
        "answer_c": "DPAs",
        "answer_d": "CPAs",
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "true",
        "answer_b_correct": "false",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
      },

    },
    {
      "id": 3,
      "question": "Which of the following is the correct syntax for writing AngularJS expressions?",
      "description": "delete folder",
      "answers": {
        "answer_a": "(expression)",
        "answer_b": "{{expression}}",
        "answer_c": "{{{expression}}}",
        "answer_d": "[expression]",
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "false",
        "answer_b_correct": "true",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
      },

    },
    {
      "id": 4,
      "question": "Do AngularJS provide reusable components",
      "description": "delete folder",
      "answers": {
        "answer_a": "Yes",
        "answer_b": "No",
        "answer_c": "Both",
        "answer_d": "None of these",
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "true",
        "answer_b_correct": "false",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
      },

    },
    {
      "id": 5,
      "question": "Which of the following directive is used to bind the application data to the HTML view in AngularJS?",
      "description": "delete folder",
      "answers": {
        "answer_a": "ng-app directive",
        "answer_b": "ng-model directive",
        "answer_c": "ng-bind directive",
        "answer_d": "ng-init directive",
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "false",
        "answer_b_correct": "false",
        "answer_c_correct": "true",
        "answer_d_correct": "false",
      },

    },
    {
      "id": 6,
      "question": "Which of the following syntax is correct for applying multiple filters in AngularJS?",
      "description": "delete folder",
      "answers": {
        "answer_a": "{{ expression | filter1 | filter2 | ... }}",
        "answer_b": "{{ expression | {filter1} | {filter2} | ... }}",
        "answer_c": "{{ expression - {filter1} - {filter2} - ... }}",
        "answer_d": "{{ {filter1} | {filter2} | ...-expression}}",
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "true",
        "answer_b_correct": "false",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
      }
    },
    {
      "id": 7,
      "question": "Which of the following is used to share data between controller and view in AngularJS?",
      "description": "delete folder",
      "answers": {
        "answer_a": "using Model",
        "answer_b": "using services",
        "answer_c": "using factory",
        "answer_d": "using $scope",
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "false",
        "answer_b_correct": "true",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
      }
    },
    {
      "id": 8,
      "question": "Which of the following is not a valid AngularJS filter?",
      "description": "delete folder",
      "answers": {
        "answer_a": "lowercase",
        "answer_b": "orderby",
        "answer_c": "email",
        "answer_d": "currency",
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "false",
        "answer_b_correct": "false",
        "answer_c_correct": "true",
        "answer_d_correct": "false",
      }
    },
    {
      "id": 9,
      "question": "Who is known as the father of AngularJS?",
      "description": "delete folder",
      "answers": {
        "answer_a": "Brad Green",
        "answer_b": "Misko Hevery",
        "answer_c": "Adam Abrons",
        "answer_d": "Mike Adams",
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "false",
        "answer_b_correct": "true",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
      }
    },
    {
      "id": 10,
      "question": "Which of the following community Angular JS belong to?",
      "description": "delete folder",
      "answers": {
        "answer_a": "Twitter",
        "answer_b": "Facebook",
        "answer_c": "Google",
        "answer_d": "Microsoft",
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "false",
        "answer_b_correct": "false",
        "answer_c_correct": "true",
        "answer_d_correct": "false",
      },

    }
  ]
  activeButton: any;
  



  constructor() { }

  ngOnInit(): void {
    console.log(this.quiz[0]['correct_answers'].answer_a_correct);
  }
  ansClicked(ans: any, option: any, questionId: any) {
    this.flip = true
    console.log("Option " + option + " is " + ans);
    if (ans == 'true') {
      this.totalScore += 10
      console.log(this.totalScore);
      
      switch (option) {
        case 'A':
          this.colorA = "green"
          this.activeButton = true
          break;
        case 'B':
          this.colorB = "green"
          this.activeButton = true

          break;
        case 'C':
          this.colorC = "green"
          this.activeButton = true

          break;
        case 'D':
          this.colorD = "green"
          this.activeButton = true

          break;
        default:
          break;
      }

    }
    else {
      
      switch (option) {
        case 'A':
          this.colorA = "red"
          this.activeButton = false

          break;
        case 'B':
          this.colorB = "red"
          this.activeButton = false

          break;
        case 'C':
          this.colorC = "red"
          this.activeButton = false

          break; case 'D':
          this.colorD = "red"
          this.activeButton = false

          break;
        default:
          break;
      }

    }
    this.whatIsRight(questionId)
  }
  whatIsRight(id: any) {
    var arr = this.quiz.filter((res: any) => {
      return res.id == id
    })

    // console.log(this.quiz.filter((res:any)=>{
    //   return res.id == id
    // }));
    let index = 0
    var correctAnsPos = 0
    for (let item of Object.keys(arr[0].correct_answers)) {
      Array(arr[0].correct_answers).filter((res: any) => {
        if (res[item] == 'true') {
          // console.log('correct answer is at index',index+1);
          correctAnsPos = index + 1
        }
        index++
        return res[item] == 'true'
      });
      switch (correctAnsPos) {
        case 1:
          this.colorA = "green"
          break;
        case 2:
          this.colorB = "green"
          break
        case 3:
          this.colorC = "green"
          break
        case 4:
          this.colorD = "green"
          break
        default:
          break;
      }

      // console.log(arr[0].correct_answers[item] == "true");

    }

    // console.log(Object.keys(arr[0].correct_answers));


  }
  paginate() {
    if(this.p == this.quiz.length){
return
    }
    this.p ++
    this.flip = false
    this.colorA = 'aquamarine';
    this.colorB = 'aquamarine';
    this.colorC = 'aquamarine';
    this.colorD = 'aquamarine';

  }
}
