import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHotComponent } from './show-hot.component';

describe('ShowHotComponent', () => {
  let component: ShowHotComponent;
  let fixture: ComponentFixture<ShowHotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
