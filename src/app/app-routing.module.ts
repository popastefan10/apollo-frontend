import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentViewComponent } from './components/assessment-view/assessment-view.component';
import { ArticleComponent } from './components/article/article.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'article/:articleId', component: ArticleComponent },
  { path: 'assessment/:articleId', component: AssessmentViewComponent },
  { path: 'signin', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
