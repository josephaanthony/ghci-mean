const mongoose = require('mongoose');

const OptionSchema = mongoose.Schema( {
    desc: {
        type: String
    },
    isCorrect: {
        type: Boolean
    }
})
const Option = module.exports = mongoose.model('Option', OptionSchema);

const QuestionSchema = mongoose.Schema({
    desc: {
        type: String
    },
    optionType: {
        type: String
    },
    options: {
        type: [OptionSchema]
    },
});

const Question = module.exports = mongoose.model('Question', QuestionSchema);


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