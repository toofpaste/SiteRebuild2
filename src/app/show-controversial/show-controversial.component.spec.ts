import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowControversialComponent } from './show-controversial.component';

describe('ShowControversialComponent', () => {
  let component: ShowControversialComponent;
  let fixture: ComponentFixture<ShowControversialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowControversialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowControversialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
