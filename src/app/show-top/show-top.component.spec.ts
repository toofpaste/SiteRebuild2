import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTopComponent } from './show-top.component';

describe('ShowTopComponent', () => {
  let component: ShowTopComponent;
  let fixture: ComponentFixture<ShowTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
