import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShowBestComponent} from './show-best.component';

describe('ShowBestComponent', () => {
  let component: ShowBestComponent;
  let fixture: ComponentFixture<ShowBestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowBestComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
