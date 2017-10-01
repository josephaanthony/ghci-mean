import { Question } from './question'

export class Quiz {
	private _id: String;
	private level: Number;
	private desc: String;
	private timeoutInterval: Number;
	private questions: [Question]
}