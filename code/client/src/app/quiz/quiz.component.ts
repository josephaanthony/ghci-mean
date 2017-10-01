import { Component, OnInit } from '@angular/core';

import { Question } from '../models/question';
import { Quiz } from '../models/quiz';
import { Option } from '../models/option'
import { QuizService } from '../service/quiz.service'

declare var _;

@Component({
	selector: 'app-quizs',
	templateUrl: './quiz.component.html',
	styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
	private quizs: [Quiz];

	constructor(private quizService: QuizService) {

	}

	ngOnInit() {
		this.quizService.getQuizs()
			.subscribe(quizs => {
				this.quizs = quizs
			});
	}

	private updateQuiz(quiz) {
		this.quizService.updateQuiz(quiz)
			.subscribe(updatedQuiz => {
				//
			},
			error => {
				let index = _.findIndex(this.quizs, { _id: quiz.id });	
				this.quizs[index] = quiz;
			});
	}
}
