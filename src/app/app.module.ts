import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalMaterialModule } from './shared/global-material/global-material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { QuestionViewComponent } from './components/question-view/question-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AssessmentViewComponent } from './components/assessment-view/assessment-view.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { QuestionItemComponent } from './components/question-item/question-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ArticlesComponent,
    ArticleComponent,
    QuestionViewComponent,
    AssessmentViewComponent,
    SignInComponent,
    QuestionItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GlobalMaterialModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
