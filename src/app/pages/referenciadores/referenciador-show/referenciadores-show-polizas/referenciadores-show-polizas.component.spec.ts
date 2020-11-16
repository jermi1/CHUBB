import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciadoresShowPolizasComponent } from './referenciadores-show-polizas.component';

describe('ReferenciadoresShowPolizasComponent', () => {
  let component: ReferenciadoresShowPolizasComponent;
  let fixture: ComponentFixture<ReferenciadoresShowPolizasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenciadoresShowPolizasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciadoresShowPolizasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
