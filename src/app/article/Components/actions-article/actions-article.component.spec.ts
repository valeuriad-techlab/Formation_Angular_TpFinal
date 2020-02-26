import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsArticleComponent } from './actions-article.component';

describe('ActionsArticleComponent', () => {
  let component: ActionsArticleComponent;
  let fixture: ComponentFixture<ActionsArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
