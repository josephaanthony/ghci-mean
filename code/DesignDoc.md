Option
	{
		id,
		desc,
		isCorrect
	}

Question
	{
		id,
		desc,
		optionType,
		options
	}

Quiz
	{
		id,	
		desc,
		level,
		timeoutInterval,
		[questions]
	}







UserQuestion 
	{
		id,
		questionId,
		[selectedOptionIds],
		isCorrect
	}

UserQuiz
	{
		id,
		quizId,
		timeTakenInterval,
		[userQuestions]
	}

User
	{
		id,
		name,
		email,
		currentUserQuiz,
		[archivedUserQuizs]
	}