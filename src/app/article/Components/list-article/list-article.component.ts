import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { Article } from '../../Models/article';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss']
})
export class ListArticleComponent implements OnInit {

  @Input()
  listItems:Article[];


  @Output()
  onEmitSelectItem:EventEmitter<Article> = new EventEmitter<Article>();
  @Output()
  onnEmitEditItem:EventEmitter<Article> = new EventEmitter<Article>();
  @Output()
  onnEmitDeleteItem:EventEmitter<Article> = new EventEmitter<Article>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectItem(item:Article){
    this.onEmitSelectItem.emit(item);
  }

  onEditItem(item:Article){
    this.onnEmitEditItem.emit(item);
  }

  onDeletetItem(item:Article){
    this.onnEmitDeleteItem.emit(item);
  }

}
