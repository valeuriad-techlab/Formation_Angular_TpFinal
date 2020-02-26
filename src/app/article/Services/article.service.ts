import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article } from '../Models/article';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private pathListArticle:string = environment.listArticle;
  private pathAddArticle:string = environment.addArticle;
  private pathRemoveArticle:string = environment.removeArticle;
  private pathChangeArticle:string = environment.changeArticle;
  
  constructor(protected http:HttpClient) { }

  /**
   * @name listerArticle
   * @description Permet de récup la liste de tous les Articles
   */
  public listerArticle(): Observable<Article[]> {
    return this.http.get<Article[]>(this.pathListArticle).pipe();
  }

  /**
   * @name addArticle
   * @description Permet d'ajouter un article
   */
  public addArticle(article:Article) : Observable<string>{
    return this.http.post<string>(this.pathAddArticle,article);
  }

  /**
   * @name changeArticle
   * @description Permet de chnager lea liste des articles
   */
  public changeArticle(article:Article) : Observable<string>{
    return this.http.put<string>(this.pathChangeArticle+"/"+article.id,article);
  }

  /**
   * @name removeArticle
   * @description Permet de supprimer un user
   */
  public removeArticle(article:Article) : Observable<string>{
    //const params:HttpParams = new HttpParams();
    //params.append("id",article.id.toString());
    //return this.http.delete<string>(this.removeUser,{ params } );
    return this.http.delete<string>(this.pathRemoveArticle+"/"+article.id);
  }
}
