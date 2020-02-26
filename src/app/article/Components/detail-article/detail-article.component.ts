import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../Models/article';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss']
})
export class DetailArticleComponent implements OnInit {

  @Input()
  item:Article;

  constructor() { }

  ngOnInit(): void {
  }

}
