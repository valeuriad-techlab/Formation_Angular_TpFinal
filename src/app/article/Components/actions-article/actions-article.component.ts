import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../Models/article';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-actions-article',
  templateUrl: './actions-article.component.html',
  styleUrls: ['./actions-article.component.scss']
})
export class ActionsArticleComponent implements OnInit {

  /**
   * @name item
   * @description Article reçu en paramètre
   */
  @Input()
  item:Article;

  /**
   * @name updateItemEvent
   * @description Notification du parent d'une action effectué dans ce composant
   * ici on renvoi un nouveau article ou un article modifier
   */
  @Output() updateItemEvent = new EventEmitter<Article>();

  constructor() { }

  /**
   * @name ngOnInit
   * @description On initialise l'article qu'on va afficher
   */
  ngOnInit(): void {
    this.item = new Article();
  }
  
  /**
   * @name getter sumbitActionText
   * @description Permet de connaitre le libelle qu'on doit afficher sur le bouton du formulaire
   */
  get sumbitActionText(): string {
    return !this.item.id ? "Ajouter" : "Modifier";
  }

  /**
   * @name onSubmit
   * @param form le formulaire en paramètre
   * @description Event déclencher lors de la soumission du formulaire
   */
  onSubmit(form: NgForm) {
    this.updateItemEvent.emit({
      id: this.item.id,
      ...form.value,
    });
  }

  /**
   * @name generateNewArticle
   * @description Permet de générer un nouvel article
   */
  generateNewArticle() {
    this.item = new Article();
  }


}
