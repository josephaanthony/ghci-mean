import { Component, OnInit } from '@angular/core';

import { Question } from '../models/question';
import { Option } from '../models/option'
import { QuizService } from '../service/quiz.service'

@Component({
	selector: 'app-questions',
	templateUrl: './questions.component.html',
	styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
	private questions: [Question];

	constructor(private quizService: QuizService) {

	}

	ngOnInit() {
		this.quizService.getQuestions()
			.subscribe(questions => {
				this.questions = questions
			});
	}

}
