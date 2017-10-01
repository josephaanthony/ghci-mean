import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizService } from './service/quiz.service';
import { UserQuizComponent } from './user-quiz/user-quiz.component'

@NgModule({
	declarations: [
		AppComponent,
		QuestionsComponent,
		UserQuizComponent,
		QuizComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [
		QuizService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
