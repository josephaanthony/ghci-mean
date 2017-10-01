import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

import {} from './shared'

//Observable.prototype.mapJson = function (res: Response) { res.json()}

// Object.defineProperty(Observable, 'mapJson', {
// 	enumerable: false,
// 	writable: false,
// 	value: (res) => res.json()
// })

@Injectable()
export class QuizService {
	constructor(private http: Http) { 

	}
	
	public getQuizs() {
		return this.http.get('http://localhost:3000/api/quizs').mapJson()  .map(res => res.json());
	}

	public updateQuiz(quiz) {
		return this.http.post('http://localhost:3000/api/quiz', quiz).map(res => res.json());
	}


	public getQuestions() {
		return this.http.get('http://localhost:3000/api/questions').map(res => res.json());
	}

	public addQuestion(question) {
		return this.http.post('http://localhost:3000/api/question', question).map(res => res.json());
	}

	public deleteQuestion(id) {
		return this.http.delete('http://localhost:3000/api/question/' + id).map(res => res.json());
	}
}
