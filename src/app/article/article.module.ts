import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { ListArticleComponent } from './Components/list-article/list-article.component';
import { DetailArticleComponent } from './Components/detail-article/detail-article.component';
import { ActionsArticleComponent } from './Components/actions-article/actions-article.component';
import { ConteneurArticleComponent } from './Components/conteneur-article/conteneur-article.component';
import { UtilsModule } from '../utils/utils.module';



@NgModule({
  declarations: [ListArticleComponent, DetailArticleComponent, ActionsArticleComponent, ConteneurArticleComponent],
  imports: [
    CommonModule,
    MaterialModule,
    UtilsModule
  ],
  exports:[
    ConteneurArticleComponent
  ]
})
export class ArticleModule { }
