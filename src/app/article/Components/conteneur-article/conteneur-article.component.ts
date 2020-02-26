import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../Services/article.service';
import { Article } from '../../Models/article';

@Component({
  selector: 'app-conteneur-article',
  templateUrl: './conteneur-article.component.html',
  styleUrls: ['./conteneur-article.component.scss']
})
export class ConteneurArticleComponent implements OnInit {

  public listArticles:Array<Article> = [];
  public itemFocus:Article;
  public itemModif:Article;

  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
    this.getListArticle();

    alert("Rappel : Ne pas oublier de lancer le mini-serveur : 'JsonServer'.");
  }

  getListArticle():void{
    this.articleService.listerArticle().subscribe((list:Article[]) =>{
      this.listArticles = list;
    });
  }


  onChildSelectItem(item:Article){
    //alert(item.nom);
    this.itemFocus = item;
  }

  onChildEditItem(item:Article){
    //alert(item.nom);
    this.itemModif = item;
  }

  onChildDeleteItem(item:Article){
    //alert(item.nom);
    //this.itemFocus = item;
    this.articleService.removeArticle(item).subscribe((etatAction:string) => {
      console.log("Article delete");
      this.getListArticle();
    });
  }

  onUpdateOrCreate(item: Article){
    if(item){
      if(item.id){
        // modif
        this.articleService.changeArticle(item).subscribe((etatAction:string) => {
          console.log("Article modif");
          this.getListArticle();
        });
      }
      else{
        // ajout
        this.articleService.addArticle(item).subscribe((etatAction:string) => {
          console.log("Article add");
          this.getListArticle();
        });
      }
    }
  }
}
