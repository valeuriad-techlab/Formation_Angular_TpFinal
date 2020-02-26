import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConteneurArticleComponent } from './article/Components/conteneur-article/conteneur-article.component';
import { LoginComponent } from './login/Components/login.component';


const routes: Routes = [
  { path: 'article', component: ConteneurArticleComponent},
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
