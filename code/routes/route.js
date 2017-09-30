const express = require('express');
const router = express.Router();

const Question = require('../models/questions')

router.get('/questions', (req, res, next) => {
    Question.find((err, questions) => {
        res.json(questions);
    })
});

router.post('/question', (req, res, next) => {
    let newQuestion = new Question({
        desc: req.body.questionDesc,
        options: req.body.options
    });

    newQuestion.save((err, question) => {
        if(err) {
            res.json({ msg: 'Error saving question'});
        }
        else {
            res.json({ msg: 'Successfully saved question '});
        }
    })
})

router.delete('/question/:id', (req, res, next) => {
    Question.remove({ _id: req.param.id}, (err, result)=> {
        if(err) {
            res.json({ msg: 'Error deleting question: ' + req.param.id });
        }
        else {
            res.json({ msg: 'Successfuly deleted question: ' + req.param.id });
        }
    });
})

module.exports = router;