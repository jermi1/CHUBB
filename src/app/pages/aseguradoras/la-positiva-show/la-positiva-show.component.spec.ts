import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaPositivaShowComponent } from './la-positiva-show.component';

describe('LaPositivaShowComponent', () => {
  let component: LaPositivaShowComponent;
  let fixture: ComponentFixture<LaPositivaShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaPositivaShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaPositivaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
