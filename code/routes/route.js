const express = require('express');
const router = express.Router();

const Question = require('../models/questions');
const Quiz = require('../models/questions');

router.get('/quizs', (req, res, next) => {
    Quiz.find((err, quizs) => {
        res.json(quizs);
    })
})

router.post('/quiz', (req, res, next) => {
    let quiz = new Quiz(req.body)

    console.log("Save Quiz: " + quiz._id + " " + quiz.desc);

    quiz.update( 
        { _id: quiz._id },
        {
            $set: {
                desc: quiz.desc                
            }
        },
        (err, quiz) => {
            if(err) {
                res.json(err);
            }
            else {
                res.json(quiz);
            }
        },
        { upsert: true }
    )

    // if(quiz._id) {
    //     quiz.save();
    // }
    // else {
    //     quiz.update( { _id: quiz._id },
    //         quiz,
    //         (err, quiz) => {
    //             if(err) {
    //                 res.json(err);
    //             }
    //             else {
    //                 res.json(quiz);
    //             }
    //         },
    //         { upsert: true }
    //     )
    // }

    // quiz.save((err, quiz) => {
    //     if(err) {
    //         res.json(err);
    //     }
    //     else {
    //         res.json(quiz);
    //     }
    // })
})



// router.get('/questions', (req, res, next) => {
//     Question.find((err, questions) => {
//         res.json(questions);
//     })
// });

router.post('/questions', (req, res, next) => {
    let newQuestion = req.body.questions[0];

    console.log("Quiz Id: " + req.body.quizId);

    Quiz.update({ _id: req.body.quizId}, {
        $push: {
            questions: newQuestion
        }
    }, (err, raw) => {
        if(err) {
            res.json(err);
        }
        else {
            res.json(raw);
        }
    })
})

router.delete('/quizs', (req, res, next) => {
    Quiz.remove({}, (err, result)=> {
        if(err) {
            res.json({ msg: 'Error deleting quiz collection' });
        }
        else {
            res.json({ msg: 'Successfuly deleted all quizs' });
        }
    });
})



// router.delete('/questions', (req, res, next) => {
//     Question.remove({}, (err, result)=> {
//         if(err) {
//             res.json({ msg: 'Error deleting question collection' });
//         }
//         else {
//             res.json({ msg: 'Successfuly deleted all questions' });
//         }
//     });
// })

// router.delete('/question/:id', (req, res, next) => {
//     Question.remove({ _id: req.param.id}, (err, result)=> {
//         if(err) {
//             res.json({ msg: 'Error deleting question: ' + req.param.id });
//         }
//         else {
//             res.json({ msg: 'Successfuly deleted question: ' + req.param.id });
//         }
//     });
// })

module.exports = router;