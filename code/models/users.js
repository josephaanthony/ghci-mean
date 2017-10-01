const QuestionSchema, QuizSchema = require('../models/questions');

const mongoose = require('mongoose'),
	  extend = require('mongoose-schema-extend');


const UserQuestionSchema = QuestionSchema.extend({
	selectedOptionIds: [String],
	isCorrect: Boolean
})

const UserQuizSchema = 	QuizSchema.extend({
	timeTakenInterval: Number,
	questions: [UserQuestionSchema] 
})

const User = mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true},
	currentUserQuiz: UserQuizSchema
})