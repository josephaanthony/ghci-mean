const mongoose = require('mongoose');

const OptionSchema = mongoose.Schema( {
    desc: {
        type: String,
        required: true
    },
    isCorrect: {
        type: Boolean,
        required: true
    }
})
const Option = module.exports = mongoose.model('Option', OptionSchema);

const QuestionSchema = mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    optionType: {
        type: String,
        required: true,
        enum: ['Radio', 'Checkbox']
    },
    options: {
        type: [OptionSchema],
        required: true
    },
});
const Question = module.exports = mongoose.model('Question', QuestionSchema);

const QuizSchema = mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    timeoutInterval: {
        type: Number,
        required: true
    },
    questions: [QuestionSchema]
})
const Quiz = module.exports = mongoose.model('Quiz', QuizSchema);



/* 
{
	"desc": "What is your name",
	"optionType": "Radio",
	"options": [ 
			{
				"desc": "Abra",
				"isCorrect": false
			},
			{
				"desc": "Dabra",
				"isCorrect": false
			}
		]
} 
*/