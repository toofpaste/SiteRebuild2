import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRisingComponent } from './show-rising.component';

describe('ShowRisingComponent', () => {
  let component: ShowRisingComponent;
  let fixture: ComponentFixture<ShowRisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
