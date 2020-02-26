import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteneurArticleComponent } from './conteneur-article.component';

describe('ConteneurArticleComponent', () => {
  let component: ConteneurArticleComponent;
  let fixture: ComponentFixture<ConteneurArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConteneurArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteneurArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
