import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaShowCronogramaPagosComponent } from './poliza-show-cronograma-pagos.component';

describe('PolizaShowCronogramaPagosComponent', () => {
  let component: PolizaShowCronogramaPagosComponent;
  let fixture: ComponentFixture<PolizaShowCronogramaPagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolizaShowCronogramaPagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizaShowCronogramaPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
